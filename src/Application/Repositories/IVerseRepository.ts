import Verse from "../../Domain/Entities/Verse";

interface IVerseRepository {
    GetVerses(): Promise<Array<Verse>>;
    GetVerse(Id: number): Promise<Verse>;
    SetVerse(verse: Verse): Promise<Verse>;
    UpdateVerse(id: number, verse: Verse): Promise<Verse>;
    DeleteVerse(id: number): Promise<void>;
    GetLastId(): Promise<number>;
}

export default IVerseRepository;
