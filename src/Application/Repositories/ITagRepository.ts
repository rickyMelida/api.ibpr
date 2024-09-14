import Tag from "../../Domain/Entities/Tag";

interface ITagRepository {
    GetTags(): Promise<Array<Tag>>;
    GetTag(Id: number): Promise<Tag>;
    SetTag(tag: Tag): Promise<Tag>;
    UpdateTag(id: number, tag: Tag): Promise<Tag>;
    DeleteTag(id: number): Promise<void>;
}

export default ITagRepository;
