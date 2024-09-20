import { Request, Response } from "express";
import {} from "../../Application/Services/VerseServices";
import IVerseServices from "../../Application/Interfaces/IVerseServices";
import { inject, injectable } from "tsyringe";
import IVerseController from "../../Application/IControllers/IVerseController"

@injectable()
class VerseController implements IVerseController {
  _IVerseService: IVerseServices;

  constructor(@inject("IVerseServices") IVerseServices: IVerseServices) {
    this._IVerseService = IVerseServices;
  }

  getHeaderVerses = async (req: Request, res: Response) => {
    const versesServicces = await this._IVerseService.GetMainVerses();
    res.send("¡Hello verses!");
  };
}

export default VerseController;