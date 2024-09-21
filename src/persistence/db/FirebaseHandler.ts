import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    Firestore,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";

class FirebaseHandler<T> {
    private _db: Firestore;
    private _collection: string;

    constructor(db: Firestore, col: string) {
        this._db = db;
        this._collection = col;
    }

    create = async (data: T | any) => {
        const docRef = await addDoc(
            collection(this._db, this._collection),
            data
        );
        return docRef;
    };

    getAll = async () => {
        try {
            let result: any[] = [];

            const querySnapshot = await getDocs(
                collection(this._db, this._collection)
            );

            await querySnapshot.forEach((doc) => {
                result.push(doc.data());
            });

            if (result.length === 0) throw new Error("No verses found");

            return result;
        } catch (error) {
            throw new Error(
                `Error al obtener los datos de ${this._collection}`
            );
        }
    };

    getBy = async (param: string, data: string) => {
        try {
            const q = await query(
                collection(this._db, this._collection),
                where(param, "==", data)
            );

            const querySnapshot = await getDocs(q);
            const result: T[] = [];

            querySnapshot.forEach((doc) => {
                result.push(doc.data() as T);
            });

            return result;
        } catch (error) {
            throw new Error(
                `Error al obtener los datos de ${this._collection}`
            );
        }
    };

    update = async (id: number, newData: T) => {
        try {
            const docRef = await doc(this._db, this._collection, id.toString());
            await updateDoc(docRef, newData as any);
            return newData;
        } catch (error) {
            throw new Error(
                `Error al actualizar los datos de ${this._collection}`
            );
        }
    };

    delete = async (id: number) => {
        const docRef = doc(this._db, this._collection, id.toString());
        try {
            await deleteDoc(docRef);
        } catch (error) {
            throw new Error(
                `Error al eliminar los datos de ${this._collection}`
            );
        }
    };
}

export default FirebaseHandler;
