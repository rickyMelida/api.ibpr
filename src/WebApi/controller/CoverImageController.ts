import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import ICoverImagesService from "../../Application/Interfaces/ICoverImagesService";

@injectable()
class CoverImageController {
    private _coverImagesService: ICoverImagesService;

    constructor(@inject("ICoverImagesService") coverImagesService: ICoverImagesService) {
        this._coverImagesService = coverImagesService;
    }

    GetCoverImages = async (req: Request, res: Response): Promise<void> => {
        try {
            const coverImages = await this._coverImagesService.GetCoverImages();
            res.json(coverImages);
        } catch (error) {
            res.status(500).json({ error });
        }
    };

    GetCoverImageById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const coverImages = await this._coverImagesService.GetCoverImagesDetails(parseInt(id));
            res.json(coverImages);
        } catch (error) {
            res.status(500).json({ error });
        }
    };


    setCoverImage = async (req: Request, res: Response): Promise<void> => {
        try {
            const coverImages = req.body;
            const coverImagesServices = await this._coverImagesService.SetCoverImages(coverImages);
            res.json(coverImagesServices);
        } catch (error) {
            res.status(500).json({ error });
        }
    };
}

export default CoverImageController;
