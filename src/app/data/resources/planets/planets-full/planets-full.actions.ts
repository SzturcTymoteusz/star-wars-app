export namespace PlanetsFullActions {
  export class FetchOne {
    static readonly type = '[Planets Full] Fetch One';
    constructor(public id: string) {}
  }
}
