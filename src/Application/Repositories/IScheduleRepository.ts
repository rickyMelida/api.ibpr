import DefaultResponse from "../../Domain/Common/DefaultResponse";
import Schedule from "../../Domain/Common/Schedule";

interface IScheduleRepository {
    GetSchedules(): Promise<Array<Schedule>>;
    GetSchedule(id: number): Promise<Schedule>;
    SetSchedule(schedule: Schedule): Promise<DefaultResponse>;
}


export default IScheduleRepository;