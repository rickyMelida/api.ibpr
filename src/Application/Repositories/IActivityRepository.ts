import Activity from "../../Domain/Entities/Activity";

export interface IActivityRepository {
    GetActivities(): Promise<Array<Activity>>;
    GetActivity(activityId: number): Promise<Activity>;
    GetLastActivity(amount: number): Promise<Array<Activity>>;
    SetActivity(activity: Activity): Promise<Activity>;
    GetLastActivityId(): Promise<number>;
}

export default IActivityRepository;