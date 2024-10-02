import { inject, injectable } from "tsyringe";
import ActivityDetails from "../../Domain/Entities/ActivityDetails";
import IActivityServices from "../Interfaces/IActivityServices";
import IActivityRepository from "../Repositories/IActivityRepository";
import IUbicationRepository from "../Repositories/IUbicationRepository";
import IScheduleRepository from "../Repositories/IScheduleRepository";
import IImageRepository from "../Repositories/IImageRepository";

@injectable()
class ActivityService implements IActivityServices {
    private _activityRepository: IActivityRepository;
    private _ubicationRepository: IUbicationRepository;
    private _scheduleRepository: IScheduleRepository;
    private _imageRepository: IImageRepository;


    constructor(
        @inject("IActivityRepository") activityRepository: IActivityRepository,
        @inject("IUbicationRepository") ubicationRepository: IUbicationRepository,
        @inject("IScheduleRepository") scheduleRepository: IScheduleRepository,
        @inject("IImageRepository") imageRepository: IImageRepository
    ) {
        this._activityRepository = activityRepository;
        this._ubicationRepository = ubicationRepository;
        this._scheduleRepository = scheduleRepository;
        this._imageRepository = imageRepository;
    }

    async SetActivity(activityDetails: ActivityDetails): Promise<ActivityDetails> {
        const lastUbicationId = await this._ubicationRepository.GetLastIdUbication();
        const lastScheduleId = await this._scheduleRepository.GetLastId();
        const activityLastId = await this._activityRepository.GetLastActivityId();

        await this._ubicationRepository.SetUbication({
            Id: lastUbicationId + 1,
            Site: activityDetails.Site,
            Direction: activityDetails.Direction
        });

        await this._activityRepository.SetActivity({
            Id: activityLastId + 1,
            Name: activityDetails.Name,
            Description: activityDetails.Description,
            DateActivity: activityDetails.DateActivity,
            Ubication: lastUbicationId + 1,
            IdImage: 1
        });




        // const lastScheduleId = await this._scheduleRepository.
        throw new Error("Method not implemented.");

    }

    GetActivityById(activityId: number): Promise<ActivityDetails> {
        throw new Error("Method not implemented.");
    }
    
    async GetActivities(): Promise<ActivityDetails[]> {
        const ubication = await this._ubicationRepository.GetUbications()
        const schedule = await this._scheduleRepository.GetSchedules();
        const activity = await this._activityRepository.GetActivities();
        const image = await this._imageRepository.GetImages();

        const result = activity.map((activity) => {
            const ubicationFound = ubication.find((ubication) => ubication.Id === activity.Ubication);
            const scheduleFound = schedule.find((schedule) => schedule.Id === activity.Ubication);
            const images = image.find((image) => image.Id === activity.IdImage);

            return {
                Id: activity.Id,
                Name: activity.Name,
                Description: activity.Description,
                DateActivity: activity.DateActivity,
                Site: ubicationFound?.Site,
                Direction: ubicationFound?.Direction,
                ImageName: images?.Name,
                Image: images?.Picture
            }
        });

        if(result.length > 0)
            return result as ActivityDetails[];

        return [];
    }
}

export default ActivityService;
