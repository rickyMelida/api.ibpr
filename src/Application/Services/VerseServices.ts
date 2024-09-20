import { inject, injectable } from "tsyringe";
import DefaultResponse from "../../Domain/Common/DefaultResponse";
import HeaderVerses from "../../Domain/Entities/HeaderVerses";
import IVerseServices from "../Interfaces/IVerseServices";
import IMainVerseRepository from "../Repositories/IMainVerseRepository";
import IVerseRepository from "../Repositories/IVerseRepository";

@injectable()
class VerseService implements IVerseServices {
  _IMainVerseRepository: IMainVerseRepository;
  _IVerseRepository: IVerseRepository;

  constructor(
    @inject("IMainVerseRepository") IMainVerseRepository: IMainVerseRepository,
    @inject("IVerseRepository") IVerseRepository: IVerseRepository
  ) {
    this._IMainVerseRepository = IMainVerseRepository,
    this._IVerseRepository = IVerseRepository
  }

  async GetMainVerses(): Promise<Array<HeaderVerses>> {
    const verses = await this._IVerseRepository.GetVerses();
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

    return await result;
    // return await this._IMainVerseRepository.GetMainVerses()
  }
  SetMainVerses(headerVerse: HeaderVerses): Promise<DefaultResponse> {
    throw new Error("Method not implemented.");
  }
}

export default VerseService;
