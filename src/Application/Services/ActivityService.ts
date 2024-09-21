import { inject, injectable } from "tsyringe";
import ActivityDetails from "../../Domain/Entities/ActivityDetails";
import IActivityServices from "../Interfaces/IActivityServices";
import IActivityRepository from "../Repositories/IActivityRepository";
import IUbicationRepository from "../Repositories/IUbicationRepository";
import IScheduleRepository from "../Repositories/IScheduleRepository";

@injectable()
class ActivityService implements IActivityServices {
    private _activityRepository: IActivityRepository;
    private _ubicationRepository: IUbicationRepository;
    private _scheduleRepository: IScheduleRepository;

    constructor(
        @inject("IActivityRepository") activityRepository: IActivityRepository,
        @inject("IUbicationRepository") ubicationRepository: IUbicationRepository,
        @inject("IScheduleRepository") scheduleRepository: IScheduleRepository
    ) {
        this._activityRepository = activityRepository;
        this._ubicationRepository = ubicationRepository;
        this._scheduleRepository = scheduleRepository;
    }
    SetActivity(activityDetails: ActivityDetails): Promise<ActivityDetails> {
        throw new Error("Method not implemented.");
    }

    GetActivityById(activityId: number): Promise<ActivityDetails> {
        throw new Error("Method not implemented.");
    }
    
    async GetActivities(): Promise<ActivityDetails[]> {
        const ubication = await this._ubicationRepository.GetUbications()
        const schedule = await this._scheduleRepository.GetSchedules();
        const activity = await this._activityRepository.GetActivities();

        const result = activity.map((activity) => {
            const ubicationFound = ubication.find((ubication) => ubication.Id === activity.Ubication);
            const scheduleFound = schedule.find((schedule) => schedule.Id === activity.Ubication);
            return {
                Id: activity.Id,
                Name: activity.Name,
                Description: activity.Description,
                DateActivity: activity.DateActivity,
                Site: ubicationFound?.Site,
                Direction: ubicationFound?.Direction
            }
        });

        if(result.length > 0)
            return result as ActivityDetails[];

        return [];
    }
}

export default ActivityService;
