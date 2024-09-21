import Image from "../../Domain/Common/Image";

interface IImageRepository {
    Get(id: number): Promise<Image>;
    GetImages(): Promise<Array<Image>>;
    SetImage(image: Image): Promise<Image>;
    Update(id: number, imageModified: Image): Promise<Image>;
    Delete(id: number): Promise<boolean>;
    GetLastIdImage(): Promise<number>;
}

export default IImageRepository;
