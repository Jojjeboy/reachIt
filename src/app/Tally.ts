export class Tally {
    name: string;
    increseBy: number;
    decreseBy: number;
    resetEveryDay: boolean;
    uuid: string;
    value: number;
    lastTouched: Date;
    goal: number;

    constructor(obj: any) {

            this.setName(obj.name);
            this.setIncreseBy(obj.increseBy);
            this.setDecreseBy(obj.decreseBy);
            this.setResetEveryday(obj.resetEveryDay);
            this.setUuid(obj.uuid);
            this.setValue(obj.value);
            this.setLastTouched(obj.lastTouched);
            this.setGoal(obj.goal);
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getIncreseBy(): number {
        return this.increseBy;
    }

    public setIncreseBy(increseBy: number): void {
        this.increseBy = increseBy;
    }

    public getDecreseBy(): number {
        return this.decreseBy;
    }

    public setDecreseBy(decreseBy: number): void {
        this.decreseBy = decreseBy;
    }

    public getResetEveryday(): boolean {
        return this.resetEveryDay;
    }

    public setResetEveryday(resetEveryDay: boolean): void {
        this.resetEveryDay = resetEveryDay;
    }

    public getUuid(): string {
        return this.uuid;
    }

    public setUuid(uuid: string): void {
        this.uuid = uuid;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getLastTouched(): Date {
        return this.lastTouched;
    }

    public setLastTouched(lastTouched: Date): void {
        this.lastTouched = new Date(lastTouched);
    }

    public touch(): void {
        this.lastTouched = new Date();
    }

    public getGoal(): number {
        return this.goal;
    }

    public setGoal(goal: number): void {
        this.goal = goal;
    }
}
