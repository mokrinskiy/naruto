export interface Data<T> {
    items: T[];
    currentPage: number;
    pageSize: number;
    total: number;
}
