export namespace SpeciesFullActions {
  export class FetchOne {
    static readonly type = '[Species Full] Fetch One';
    constructor(public id: string) {}
  }
}
