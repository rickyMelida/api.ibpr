import DefaultResponse from "../../Domain/Common/DefaultResponse";
import Schedule from "../../Domain/Common/Schedule";

interface IScheduleRepository {
    GetSchedules(): Promise<Array<Schedule>>;
    GetSchedule(id: number): Promise<Schedule>;
    SetSchedule(schedule: Schedule): Promise<Schedule>;
    GetLastId(): Promise<number>;
}


export default IScheduleRepository;