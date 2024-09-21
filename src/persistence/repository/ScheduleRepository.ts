import e from "express";
import IScheduleRepository from "../../Application/Repositories/IScheduleRepository";
import Schedule from "../../Domain/Common/Schedule";
import IFirebaseHandler from "../../Application/Interfaces/IFirebaseHandler";
import FirebaseHandler from "../db/FirebaseHandler";
import { db } from "../db/firebase.config";
import COLLECTIONS from "../../Domain/constants/Collections";

class ScheduleRepository implements IScheduleRepository {
    private _dbHandler: IFirebaseHandler<Schedule>;

    constructor() {
        this._dbHandler = new FirebaseHandler(db, COLLECTIONS.SCHEDULE);
    }

    async GetSchedules(): Promise<Array<Schedule>> {
        return await this._dbHandler.getAll();
    }
    async GetSchedule(id: number): Promise<Schedule> {
        return await this._dbHandler.getById(id);
    }

    async SetSchedule(schedule: Schedule): Promise<Schedule> {
        const hasCreated = await this._dbHandler.create(schedule);

        if(hasCreated)
            return schedule;

        throw new Error("Error al crear una nueva actividad");
    }
    
}

export default ScheduleRepository;