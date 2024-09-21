import { inject, injectable } from "tsyringe";
import IActivityServices from "../../Application/Interfaces/IActivityServices";
import { Request, Response } from "express";

@injectable()
class ActivityController {
    private _activityService: IActivityServices;

    constructor(@inject("IActivityServices") activityService: IActivityServices) {
        this._activityService = activityService;
    }

    GetActivities = async (req: Request, res: Response): Promise<void> => {
        try {
            const activities = await this._activityService.GetActivities();
            res.json(activities);
            
        } catch (error) {
            res.status(500).json({ error})
        }
    }

}

export default ActivityController;