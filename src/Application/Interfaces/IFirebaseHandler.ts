export default interface IFirebaseHandler<T> {
    create: (data: T) => Promise<boolean>;
    getAll: () => Promise<T[]>;
    getById: (id: number) => Promise<T>;
    getBy: (param: string, data: string) => Promise<T[]>;
    update: (id: number, newData: T) => Promise<T>;
    delete: (id: number) => Promise<void>;

}