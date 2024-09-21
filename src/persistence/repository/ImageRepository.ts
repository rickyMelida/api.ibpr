import IFirebaseHandler from "../../Application/Interfaces/IFirebaseHandler";
import IImageRepository from "../../Application/Repositories/IImageRepository";
import Image from "../../Domain/Common/Image";
import COLLECTIONS from "../../Domain/constants/Collections";
import { db } from "../db/firebase.config";
import FirebaseHandler from "../db/FirebaseHandler";

class ImageRepository implements IImageRepository {
    private _dbHandler: IFirebaseHandler<Image>;

    constructor() {
        this._dbHandler = new FirebaseHandler(db, COLLECTIONS.IMAGES);
    }
    async Get(id: number): Promise<Image> {
        return await this._dbHandler.getById(id);
    }

    async GetImages(): Promise<Array<Image>> {
        return await this._dbHandler.getAll(); 
    }

    async SetImage(image: Image): Promise<Image> {
        image.Picture = await this._dbHandler.uploadImage(image.Picture, image.Name);
        const hasCreated = await this._dbHandler.create(image);

        if(hasCreated)
            return image;

        throw new Error("Error al crear una nueva imagen");
    }

    Update(id: number, imageModified: Image): Promise<Image> {
        throw new Error("Method not implemented.");
    }
    Delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async GetLastIdImage(): Promise<number> {
        try {
            const data = await this.GetImages();
            const dataSorted = data.sort((a, b) => b.Id - a.Id);
            
            return dataSorted[0].Id
        } catch (error) {
            return 0;
        }
    }
    
}

export default ImageRepository;