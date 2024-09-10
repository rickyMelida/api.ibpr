import DefaultResponse from "../../Domain/Common/DefaultResponse";
import HeaderVerses from "../../Domain/Entities/HeaderVerses";

interface IVerseServices {
    GetMainVerses(): Promise<Array<HeaderVerses>>;
    SetMainVerses(headerVerse: HeaderVerses): Promise<DefaultResponse>;
}

export default IVerseServices;