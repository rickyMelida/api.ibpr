import { inject } from "tsyringe";
import DefaultResponse from "../../Domain/Common/DefaultResponse";
import HeaderVerses from "../../Domain/Entities/HeaderVerses";
import IVerseServices from "../Interfaces/IVerseServices";
import IMainVerseRepository from "../Repositories/IMainVerseRepository";

class VerseService implements IVerseServices {
    _IMainVerseRepository: IMainVerseRepository;
    
    constructor(@inject('IMainVerseRepository') IMainVerseRepository: IMainVerseRepository) {
        this._IMainVerseRepository = IMainVerseRepository
    }

    async GetMainVerses(): Promise<Array<HeaderVerses>> {
        return await this._IMainVerseRepository.GetMainVerses()
        
    }
    SetMainVerses(headerVerse: HeaderVerses): Promise<DefaultResponse> {
        throw new Error("Method not implemented.");
    }

}

export default VerseService;