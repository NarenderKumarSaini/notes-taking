
export class PageDto<T> {
  readonly data: T[];
  readonly draw: string;
  readonly total_count: number;

  constructor({data, count}) {
    this.data = data;
    this.total_count = count;
  }

}