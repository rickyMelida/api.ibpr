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
import {
    getStorage,
    ref,
    uploadString,
    getDownloadURL,
} from "firebase/storage";

import IFirebaseHandler from "../../Application/Interfaces/IFirebaseHandler";

class FirebaseHandler<T> implements IFirebaseHandler<T> {
    private _db: Firestore;
    private _collection: string;

    constructor(db: Firestore, coll: string) {
        this._db = db;
        this._collection = coll;
    }

    create = async (data: T) => {
        try {
            const docRef = await addDoc(
                collection(this._db, this._collection),
                data as any
            );
            return true;
        } catch (error) {
            return false;
        }
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

    getById = async (id: number) => {
        try {
            const q = await query(
                collection(this._db, this._collection),
                where("Id", "==", id)
            );

            const querySnapshot = await getDocs(q);
            const result: T[] = [];

            querySnapshot.forEach((doc) => {
                result.push(doc.data() as T);
            });

            return result as T;
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

    uploadImage = async (base64Image: string, imageName: string) => {
        const storage = getStorage();
        const storageRef = ref(storage, `${this._collection}/images/${imageName}`);

        try {
            await uploadString(storageRef, base64Image, "base64");
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (error) {
            console.error("Error uploading image: ", error);
            return "";
        }
    };
}

export default FirebaseHandler;
