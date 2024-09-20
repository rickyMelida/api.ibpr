import { Router } from "express";
import { container, inject } from "tsyringe";
import IVerseController from "../../Application/IControllers/IVerseController";
import VerseController from "../controller/VerseController";

const router = Router();
const userController = container.resolve(VerseController);

router.get("/verses", userController.getHeaderVerses);

export default router;

/*class VerseRouter {
  private _router: Router;
  private _controller: IVerseController;

  constructor(@inject("IVerseController") controller: IVerseController) {
    this._router = Router();
    this._controller = controller;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this._router.get('/verses', this._controller.getHeaderVerses.bind(this._controller));
  }

  public getRoutes(): Router {
    return this._router
  }
}
export default VerseRouter;*/