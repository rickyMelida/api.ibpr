import { Request, Response } from "express";
import IVerseServices from "../../Application/Interfaces/IVerseServices";
import { inject, injectable } from "tsyringe";

@injectable()
class VerseController {
    private _IVerseService: IVerseServices;

    constructor(@inject("IVerseServices") IVerseService: IVerseServices) {
        this._IVerseService = IVerseService;
    }

    getHeaderVerses = async (req: Request, res: Response): Promise<void> => {
        try {
            const versesServicces = await this._IVerseService.GetMainVerses();
            res.json(versesServicces);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch user" });
        }
    };

    setHeaderVerse = async (req: Request, res: Response): Promise<void> => {
        try {
            const verse = req.body;
            const versesServices = await this._IVerseService.SetMainVerses(verse);
            res.json(versesServices);
        } catch (error) {
            res.status(500).json({ error });
        }
    };
}

export default VerseController;
