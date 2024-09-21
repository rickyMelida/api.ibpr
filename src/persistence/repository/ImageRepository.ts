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

    async GetUrlImage(base64Image: string, imageName: string): Promise<string> {
        return await this._dbHandler.uploadImage(base64Image, imageName);
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
    GetLastIdImage(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    
}

export default ImageRepository;