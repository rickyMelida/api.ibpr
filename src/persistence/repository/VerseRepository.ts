import { injectable } from "tsyringe";
import IVerseRepository from "../../Application/Repositories/IVerseRepository";
import Verse from "../../Domain/Entities/Verse";
import { db } from "../db/firebase.config";
import IFirebaseHandler from "../../Application/Interfaces/IFirebaseHandler";
import FirebaseHandler from "../db/FirebaseHandler";
import COLLECTIONS from "../../Domain/constants/Collections";

@injectable()
class VerseRepository implements IVerseRepository {
    private _dbHandler: IFirebaseHandler<Verse>;

    constructor() {
        this._dbHandler = new FirebaseHandler(db, COLLECTIONS.VERSE);
    }

    async GetVerses(): Promise<Array<Verse>> {
        return await this._dbHandler.getAll();
    }

    GetVerse(Id: number): Promise<Verse> {
        throw new Error("Method not implemented.");
    }

    async SetVerse(verse: Verse): Promise<Verse> {
        const hasCreated = await this._dbHandler.create(verse);

        if(hasCreated)
            return verse
        
        throw new Error("No se pudo insertar el nuevo versiculo")
    }

    UpdateVerse(id: number, verse: Verse): Promise<Verse> {
        throw new Error("Method not implemented.");
    }
    DeleteVerse(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async GetLastId(): Promise<number> {
        try {
            const data = await this.GetVerses();
            const dataSorted = data.sort((a, b) => a.Id - b.Id);
            
            return dataSorted[0].Id
        } catch (error) {
            return 0;
        }
    }
}

export default VerseRepository;
