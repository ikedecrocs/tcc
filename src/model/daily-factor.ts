import { DailyDTO } from "./daily-dto";

export class DailyFactor {
    public extenalId: number;
    public externalPeriod: DailyDTO[];

    constructor(_externalId: number, _externalPeriod: DailyDTO[]) {
        this.extenalId = _externalId;
        this.externalPeriod = _externalPeriod;
    }

    // public getExternalId(): number {
    //     return this.externalId;
    // }
    // public setExternalId(value: number) {
    //     this.externalId = value;
    // }

    // public getExternalPeriod(): Array<DailyDTO> {
    //     return this.externalPeriod;
    // }
    // public setExternalPeriod(value: Array<DailyDTO>) {
    //     this.externalPeriod = value;
    // }

}