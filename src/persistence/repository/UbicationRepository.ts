import IFirebaseHandler from "../../Application/Interfaces/IFirebaseHandler";
import IUbicationRepository from "../../Application/Repositories/IUbicationRepository";
import Ubication from "../../Domain/Common/Ubication";
import COLLECTIONS from "../../Domain/constants/Collections";
import { db } from "../db/firebase.config";
import FirebaseHandler from "../db/FirebaseHandler";


class UbicationRepository implements IUbicationRepository {
    private _dbHandler: IFirebaseHandler<Ubication>;

    constructor() {
        this._dbHandler = new FirebaseHandler(db, COLLECTIONS.UBICATIONS);
    }
    
    async GetUbications(): Promise<Array<Ubication>> {
        return await this._dbHandler.getAll();
    }

    async GetUbication(Id: number): Promise<Ubication> {
        return await this._dbHandler.getById(Id);
    }

    async SetUbication(ubication: Ubication): Promise<Ubication> {
        const hasCreated = await this._dbHandler.create(ubication);

        if(hasCreated)
            return ubication;

        throw new Error("Error al crear una nueva ubicacion");
    }
    
    UpdateUbication(id: number, ubication: Ubication): Promise<Ubication> {
        throw new Error("Method not implemented.");
    }
    DeleteUbication(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}

export default UbicationRepository;
