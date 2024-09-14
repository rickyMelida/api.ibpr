import DefaultResponse from "../../Domain/Common/DefaultResponse";
import HeaderVerses from "../../Domain/Entities/HeaderVerses";
import IVerseServices from "../Interfaces/IVerseServices";

class VerseService implements IVerseServices {
    GetMainVerses(): Promise<Array<HeaderVerses>> {
        throw new Error("Method not implemented.");
    }
    SetMainVerses(headerVerse: HeaderVerses): Promise<DefaultResponse> {
        throw new Error("Method not implemented.");
    }

}