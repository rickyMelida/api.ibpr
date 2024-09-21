import { inject, injectable } from "tsyringe";
import DefaultResponse from "../../Domain/Common/DefaultResponse";
import HeaderVerses from "../../Domain/Entities/HeaderVerses";
import IVerseServices from "../Interfaces/IVerseServices";
import IMainVerseRepository from "../Repositories/IMainVerseRepository";
import IVerseRepository from "../Repositories/IVerseRepository";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../persistence/db/firebase.config";
import ISectionRepository from "../Repositories/ISectionRepository";
import MainVerse from "../../Domain/Entities/MainVerse";
import Verse from "../../Domain/Entities/Verse";

@injectable()
class VerseService implements IVerseServices {
    private _mainVerseRepository: IMainVerseRepository;
    private _verseRepository: IVerseRepository;
    private _sectionRepository: ISectionRepository;

    constructor(
        @inject("IMainVerseRepository")
        mainVerseRepository: IMainVerseRepository,
        @inject("IVerseRepository") verseRepository: IVerseRepository,
        @inject("ISectionRepository") sectionRepository: ISectionRepository
    ) {
        (this._mainVerseRepository = mainVerseRepository),
            (this._verseRepository = verseRepository),
            (this._sectionRepository = sectionRepository);
    }

    async GetMainVerses(): Promise<Array<any>> {
        const verses = await this._verseRepository.GetVerses();
        const result: HeaderVerses[] = verses.map((verse) => {
            return {
                Id: verse.Id,
                Section: "section",
                Text: verse.Text,
                Book: verse.Book,
                Chapter: verse.Chapter,
                Verse: verse.Versse,
            };
        });

        return await verses;
    }
    async SetMainVerses(headerVerse: HeaderVerses): Promise<DefaultResponse> {
        try {
            const idMainVerse = (await this._mainVerseRepository.GetLastId()) + 1;
            const idVerse = (await this._verseRepository.GetLastId()) + 1;
            const idSection = await this._sectionRepository.GetSectionId(headerVerse.Section.trim());

            const mainVerse: MainVerse = {
                Id: idMainVerse,
                Section: idSection,
                IdVerse: idVerse,
            };

            const verse: Verse = {
                Id: idVerse,
                Book: headerVerse.Book,
                Chapter: headerVerse.Chapter,
                Versse: headerVerse.Verse,
                Text: headerVerse.Text,
            };

            await this._mainVerseRepository.SetMainVerse(mainVerse);
            await this._verseRepository.SetVerse(verse);

            return { StatusCode: 0, Message: "Ok" };
        } catch (error: Error | any) {
            throw new Error(error.message);
        }
    }
}

export default VerseService;
