import IFirebaseHandler from "../../Application/Interfaces/IFirebaseHandler";
import ICoverImageRepository from "../../Application/Repositories/ICoverImageRepository";
import COLLECTIONS from "../../Domain/constants/Collections";
import CoverImage from "../../Domain/Entities/CoverImage";
import { db } from "../db/firebase.config";
import FirebaseHandler from "../db/FirebaseHandler";

class CoverImageRepository implements ICoverImageRepository {
    private _dbHandler: IFirebaseHandler<CoverImage>;

    constructor() {
        this._dbHandler = new FirebaseHandler(db, COLLECTIONS.COVER_IMAGES);
    }
    async GetCoverImages(): Promise<Array<CoverImage>> {
        return await this._dbHandler.getAll();
    }

    async SetCoverImage(coverImage: CoverImage): Promise<CoverImage> {
        const hasCreated = await this._dbHandler.create(coverImage);

        if(hasCreated)
            return coverImage;

        throw new Error("Error al crear una nueva imagen de portada");
    }

    async GetLastIdCoverImage(): Promise<number> {
        try {
            const data = await this.GetCoverImages();
            const dataSorted = data.sort((a, b) => b.Id - a.Id);
            
            return dataSorted[0].Id
        } catch (error) {
            return 0;
        }
    }
    
}

export default CoverImageRepository;