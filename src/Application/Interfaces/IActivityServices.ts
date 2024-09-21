import ActivityDetails from "../../Domain/Entities/ActivityDetails";

interface IActivityServices {
    GetActivityById(activityId: number): Promise<ActivityDetails>;
    GetActivities(): Promise<ActivityDetails[]>;
    SetActivity(activityDetails: ActivityDetails): Promise<ActivityDetails>;
}

export default IActivityServices;