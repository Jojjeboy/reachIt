export class History {
    value: number;
    date: Date;

    constructor(obj: any) {

            this.setDate(obj.date);
            this.setValue(obj.value);
    }


    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date): void {
        this.date = date;
    }

}
