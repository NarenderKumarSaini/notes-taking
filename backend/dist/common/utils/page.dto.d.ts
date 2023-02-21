export declare class PageDto<T> {
    readonly data: T[];
    readonly draw: string;
    readonly total_count: number;
    constructor({ data, count }: {
        data: any;
        count: any;
    });
}
