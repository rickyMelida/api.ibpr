import Section from "../../Domain/Entities/Section";

interface ISectionRepository {
    GetSections(): Promise<Array<Section>>;
    GetSection(id: number): Promise<Section>;
    GetSectionId(sectionName: string): Promise<number>;
    SetSection(section: Section): Promise<Section>;
    UpdateSection(id: number, sectionUpdate: Section): Promise<void>;
    DeleteSection(id: number): Promise<void>;
    GetLastId(): Promise<number>;
}

export default ISectionRepository;
