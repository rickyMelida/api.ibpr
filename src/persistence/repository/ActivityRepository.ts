import IFirebaseHandler from "../../Application/Interfaces/IFirebaseHandler";
import IActivityRepository from "../../Application/Repositories/IActivityRepository";
import COLLECTIONS from "../../Domain/constants/Collections";
import Activity from "../../Domain/Entities/Activity";
import { db } from "../db/firebase.config";
import FirebaseHandler from "../db/FirebaseHandler";

class ActivityRepository implements IActivityRepository {
    private _dbHandler: IFirebaseHandler<Activity>;

    constructor() {
        this._dbHandler = new FirebaseHandler(db, COLLECTIONS.ACTIVITIES);
    }

    async GetActivities(): Promise<Array<Activity>> {
        return await this._dbHandler.getAll();
    }

    async GetActivity(activityId: number): Promise<Activity> {
        return this._dbHandler.getById(activityId);
    }

    GetLastActivity(amount: number): Promise<Array<Activity>> {
        throw new Error("Method not implemented.");
    }
    async SetActivity(activity: Activity): Promise<Activity> {
        const hasCreated = await this._dbHandler.create(activity);

        if(hasCreated)
            return activity;

        throw new Error("Error al crear una nueva actividad");
    }

    async GetLastActivityId(): Promise<number> {
        try {
            const data = await this.GetActivities();
            const dataSorted = data.sort((a, b) => b.Id - a.Id);
            
            return dataSorted[0].Id
        } catch (error) {
            return 0;
        }
    }
    
}

export default ActivityRepository;