import CoverImagesDetails from "../../Domain/Entities/CoverImagesDetails";
import CoverImageRequest from "../../Domain/Request/CoverImageRequest";

interface ICoverImagesService {
    GetCoverImages(): Promise<Array<CoverImagesDetails>>;
    GetCoverImagesDetails(id: number): Promise<CoverImagesDetails | null>;
    SetCoverImages(coverImagesDetails: CoverImageRequest): Promise<CoverImagesDetails>;
}

export default ICoverImagesService;