import CoverImage from "../../Domain/Entities/CoverImage";

interface ICoverImageRepository {
    GetCoverImage(): Promise<Array<CoverImage>>;
    SetCoverImage(coverImage: CoverImage): Promise<CoverImage>;
    GetLastIdCoverImage(): Promise<number>;
}

export default ICoverImageRepository;
