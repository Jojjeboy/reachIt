import { Injectable } from '@angular/core';
import { Tally } from './Tally';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  public localStorage: any;
  private key: string;
  private app: any;

  constructor() {
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
  }

  public init(app: Object, key: string): any {
    if (!key) {
      throw new Error('Local Storage key not provided');
    }
    this.key = key;
    if (localStorage.getItem(key) === null) {
      this.app = app;
      localStorage.setItem(this.key, JSON.stringify({ app: this.app }));
    } else {
      this.app = JSON.parse(localStorage.getItem(this.key));
    }
  }

  public getAll(): Array<Object> {
    const lSData: Object = JSON.parse(localStorage.getItem(this.key));
    return lSData['data'];
  }

  public add(obj: Object): void {
    const lsItems = this.getAll();
    lsItems.push(obj);
    this.writeLS(lsItems);
  }

  public addMultiple(array: Array<Object>): void {
    const lsItems = this.getAll();
    for (let i = 0; i < array.length; i++) {
      lsItems.push(array[i]);
    }
    this.writeLS(lsItems);
  }

  public writeLS(array: Array<Object>): void {
    this.app['data'] = array;
    localStorage.setItem(this.key, JSON.stringify( this.app ));
  }

  public updateItem(key: String, propertyName: any, obj: Object) {
    const lsItems = this.getAll();
    for (let i = 0; i < lsItems.length; i++) {
      const item: any = lsItems[i];
      if (item[propertyName] === key) {
        lsItems[i] = obj;
        this.writeLS(lsItems);
        break;
      }
    }

  }

  public removeItem(key: String): boolean {
    const lsItems = this.getAll(),
      newData = [];
      let foundItem = false,
      iter = 0;
    while (iter < lsItems.length) {
      if (key !== lsItems[iter]['uuid']) {
        newData.push(lsItems[iter]);
      } else {
        foundItem = true;
      }
      iter++;
    }
    this.writeLS(newData);
    return foundItem;
  }

  public update(obj: Object): boolean {
    const lsItems = this.getAll(),
      newData = [];
      let updated = false;
    for (let i = 0; i < lsItems.length; i++) {
      if (lsItems[i]['uuid'] === obj['uuid']) {
        lsItems[i] = obj;
        updated = true;
      }
    }
    this.writeLS(lsItems);
    return updated;
  }

  getItem(id: String): any {
    const lsItems = this.getAll(),
      newData = [],
      foundIt = false;
    for (let i = 0; i < lsItems.length; i++) {
      if (lsItems[i]['uuid'] === id) {
        return lsItems[i];
      }
    }
    return foundIt;
  }

  public getNrOfItems(): number {
    return this.getAll().length;
  }

  public emptyItemsInKey(): void {
    this.app.data = [];
    localStorage.setItem(this.key, JSON.stringify({ app: this.app }));
  }

  public clear(): any {
    this.localStorage.removeItem(this.key);
  }

  public getConfig(): any {
    const lSData: Object = JSON.parse(localStorage.getItem(this.key));
    if (!lSData['app']['config']) {
      return false;
    }
    return lSData['app']['config'];
  }

  public uppdatePropertyOnAll(propertyName: string, newValue: any): void {
    const lsData: Array<any> = this.getAll();
    let touched = false;
    for (let i = 0; i < lsData.length; i++) {
      if (lsData[i].hasOwnProperty(propertyName)) {
        lsData[i][propertyName] = newValue;
        touched = true;
      }
    }
    if (touched) {
      this.writeLS(lsData);
    }
  }
}
