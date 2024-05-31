export namespace PeopleFullActions {
  export class FetchOne {
    static readonly type = '[People Full] Fetch One';
    constructor(public id: string) {}
  }
}
