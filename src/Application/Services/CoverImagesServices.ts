import { inject, injectable } from "tsyringe";
import CoverImagesDetails from "../../Domain/Entities/CoverImagesDetails";
import CoverImageRequest from "../../Domain/Request/CoverImageRequest";
import ICoverImagesService from "../Interfaces/ICoverImagesService";
import ICoverImageRepository from "../Repositories/ICoverImageRepository";
import IImageRepository from "../Repositories/IImageRepository";
import ISectionRepository from "../Repositories/ISectionRepository";

@injectable()
class CoverImagesService implements ICoverImagesService {
    private _coverImageRepository: ICoverImageRepository;
    private _imageRepository: IImageRepository;
    private _sectionRepository: ISectionRepository;

    constructor(
        @inject("ICoverImageRepository") coverImageRepository: ICoverImageRepository,
        @inject("IImageRepository") imageRepository: IImageRepository,
        @inject("ISectionRepository") sectionRepository: ISectionRepository
    ) {
        this._coverImageRepository = coverImageRepository;
        this._imageRepository = imageRepository;
        this._sectionRepository = sectionRepository;
    }

    async GetCoverImages(): Promise<Array<CoverImagesDetails>> {
        const coverImages = await this._coverImageRepository.GetCoverImages();
        const images = await this._imageRepository.GetImages();
        const sections = await this._sectionRepository.GetSections();

        const result = coverImages.map((coverImage) => {
            const image = images.find((image) => image.Id === coverImage.Id);
            const section = sections.find((section) => section.Id === coverImage.Section);
            return {
                Id: coverImage.Id,
                Name: section?.Name,
                Section: section?.Name,
                Picture: image?.Picture,
            };
        });

        if(result.length > 0)
            return result as Array<CoverImagesDetails>;

        return [];
    }
    async GetCoverImagesDetails(id: number): Promise<CoverImagesDetails | null> {
        const data = await this.GetCoverImages();
        
        return data.find(e => e.Id === id) ?? null;
    }

    async SetCoverImages(coverImagesDetails: CoverImageRequest): Promise<CoverImagesDetails> {
        const lastId = await this._coverImageRepository.GetLastIdCoverImage() + 1;
        throw new Error("");

    }
}

export default CoverImagesService;