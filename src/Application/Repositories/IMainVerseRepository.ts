import MainVerse from "../../Domain/Entities/MainVerse";

interface IMainVerseRepository {
    GetMainVerse(id: number): Promise<MainVerse>;
    GetMainVerses(): Promise<Array<MainVerse>>;
    SetMainVerse(mainVerse: MainVerse): Promise<MainVerse>;
    UpdateMainVerse(id: number, mainVerseUpdate: MainVerse): Promise<void>;
    DeleteMainVerse(id: number): Promise<void>;
    GetLastId(): Promise<number>;
}

export default IMainVerseRepository;