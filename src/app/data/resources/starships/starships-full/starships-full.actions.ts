export namespace StarshipsFullActions {
  export class FetchOne {
    static readonly type = '[Starships Full] Fetch One';
    constructor(public id: string) {}
  }
}
