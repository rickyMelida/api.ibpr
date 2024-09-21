import CoverImage from "../../Domain/Entities/CoverImage";

interface ICoverImageRepository {
    GetCoverImages(): Promise<Array<CoverImage>>;
    SetCoverImage(coverImage: CoverImage): Promise<CoverImage>;
    GetLastIdCoverImage(): Promise<number>;
}

export default ICoverImageRepository;
