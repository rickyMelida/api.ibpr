import ISectionRepository from "../../Application/Repositories/ISectionRepository";
import Section from "../../Domain/Entities/Section";

export default class SectionRepository implements ISectionRepository{
    GetSections(): Promise<Array<Section>> {
        throw new Error("Method not implemented.");
    }
    GetSection(id: number): Promise<Section> {
        throw new Error("Method not implemented.");
    }
    GetSectionId(sectionName: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
    SetSection(section: Section): Promise<Section> {
        throw new Error("Method not implemented.");
    }
    UpdateSection(id: number, sectionUpdate: Section): Promise<void> {
        throw new Error("Method not implemented.");
    }
    DeleteSection(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}