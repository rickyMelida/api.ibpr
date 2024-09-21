import IMainVerseRepository from "../../Application/Repositories/IMainVerseRepository";
import MainVerse from "../../Domain/Entities/MainVerse";
import { db } from "../db/firebase.config";
import IFirebaseHandler from "../../Application/Interfaces/IFirebaseHandler";
import FirebaseHandler from "../db/FirebaseHandler";
import COLLECTIONS from "../../Domain/constants/Collections";


class MainVerseRepository implements IMainVerseRepository {
    private _dbHandler: IFirebaseHandler<MainVerse>;

    constructor() {
        this._dbHandler = new FirebaseHandler(db, COLLECTIONS.MAIN_VERSES);
    }

    async GetMainVerse(id: number): Promise<MainVerse> {
        return await this._dbHandler.getById(id);
    }

    async GetMainVerses(): Promise<Array<MainVerse>> {
        return await this._dbHandler.getAll();
    }

    async SetMainVerse(mainVerse: MainVerse): Promise<MainVerse> {
        const hasCreated = await this._dbHandler.create(mainVerse);

        if(hasCreated)
            return mainVerse;

        throw new Error("No se pudo insertar el versiculo principal");
    }

    UpdateMainVerse(id: number, mainVerseUpdate: MainVerse): Promise<void> {
        throw new Error("Method not implemented.");
    }
    DeleteMainVerse(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async GetLastId(): Promise<number> {
        try {
            const data = await this.GetMainVerses();
            const dataSorted = data.sort((a, b) => a.Id - b.Id);
            
            return dataSorted[0].Id
        } catch (error) {
            return 0;
        }
    }
}

export default MainVerseRepository;
