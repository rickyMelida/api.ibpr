import IVerseRepository from "../../Application/Repositories/IVerseRepository";
import Verse from "../../Domain/Entities/Verse";

export default class VerseRepository implements IVerseRepository {
    GetVerses(): Promise<Array<Verse>> {
        throw new Error("Method not implemented.");
    }
    GetVerse(Id: number): Promise<Verse> {
        throw new Error("Method not implemented.");
    }
    SetVerse(verse: Verse): Promise<Verse> {
        throw new Error("Method not implemented.");
    }
    UpdateVerse(id: number, verse: Verse): Promise<Verse> {
        throw new Error("Method not implemented.");
    }
    DeleteVerse(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}