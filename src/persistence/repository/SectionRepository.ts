import ISectionRepository from "../../Application/Repositories/ISectionRepository";
import Section from "../../Domain/Entities/Section";
import { db } from "../db/firebase.config";
import IFirebaseHandler from "../../Application/Interfaces/IFirebaseHandler";
import FirebaseHandler from "../db/FirebaseHandler";
import COLLECTIONS from "../../Domain/constants/Collections";

export default class SectionRepository implements ISectionRepository {

    private _dbHandler: IFirebaseHandler<Section>;

    constructor() {
        this._dbHandler = new FirebaseHandler(db, COLLECTIONS.SECTION);
    }

    async GetSections(): Promise<Array<Section>> {
        return await this._dbHandler.getAll();
    }

    async GetSection(id: number): Promise<Section> {
        return await this._dbHandler.getById(id);
    }

    async GetSectionId(sectionName: string): Promise<number> {
        try {
            const dataResult = await this._dbHandler.getBy("Name", sectionName);
            return dataResult[0].Id;

        } catch (error) {
            return 0;
        }
    }
    async SetSection(section: Section): Promise<Section> {
        const hasCreated = await this._dbHandler.create(section);

        if(hasCreated)
            return section;

        throw new Error("Error al crear una nueva seccion");
    }

    UpdateSection(id: number, sectionUpdate: Section): Promise<void> {
        throw new Error("Method not implemented.");
    }
    DeleteSection(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
