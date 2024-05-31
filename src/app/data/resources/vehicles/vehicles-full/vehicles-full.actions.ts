export namespace VehiclesFullActions {
  export class FetchOne {
    static readonly type = '[Vehicles Full] Fetch One';
    constructor(public id: string) {}
  }
}
