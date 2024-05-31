export namespace FilmsActions {
  export class FetchCollection {
    static readonly type = '[Films] Fetch Collection';
  }

  export class FetchOne {
    static readonly type = '[Films] Fetch One';
    constructor(public id: string) {}
  }
}
