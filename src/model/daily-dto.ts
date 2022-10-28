export class DailyDTO {
    public id: number;
    public value: string;
    public date: Date;
    public lastPercentage: string;

    constructor(id : number, value: string, date: Date, lastPercentage: string) {
        this.id = id;
        this.value = value;
        this.date = date;
        this.lastPercentage = lastPercentage;
    }

    // public get id(): number {
    //     return this._id;
    // }
    // public set id(id: number) {
    //     this._id = id;
    // }

    // public get value(): number {
    //     return this._value;
    // }
    // public set value(value: number) {
    //     this._value = value;
    // }

    // public get date(): Date {
    //     return this._date;
    // }
    // public set date(date: Date) {
    //     this._date = date;
    // }

    // public get lastPercentage(): number {
    //     return this._lastPercentage;
    // }
    // public set lastPercentage(lastPercentage: number) {
    //     this._lastPercentage = lastPercentage;
    // }

    
}
