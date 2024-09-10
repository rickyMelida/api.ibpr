import ActivityDetails from "../../Domain/Entities/ActivityDetails";

interface IActivityServices {
    GgetActivityById(activityId: number): Promise<ActivityDetails>;
    getActivities(): Promise<ActivityDetails[]>;
}

export default IActivityServices;