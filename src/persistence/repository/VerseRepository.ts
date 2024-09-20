import { injectable } from "tsyringe";
import IVerseRepository from "../../Application/Repositories/IVerseRepository";
import Verse from "../../Domain/Entities/Verse";

@injectable()
class VerseRepository implements IVerseRepository {
  async GetVerses(): Promise<Array<Verse>> {
    const fakeData: Verse[] = [
      {
        Id: 1,
        Book: "Genesis",
        Chapter: 1,
        Text: "In the beginner God Created the heaven and the erth",
        Versse: 1,
      },
      {
        Id: 2,
        Book: "Leviticus",
        Chapter: 1,
        Text: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
        Versse: 2,
      },
      {
        Id: 3,
        Book: "Jhon",
        Chapter: 3,
        Text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        Versse: 16,
      },
    ];

    return await fakeData;
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

export default VerseRepository;