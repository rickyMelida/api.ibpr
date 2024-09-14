import Ubication from "../../Domain/Common/Ubication";

interface IUbicationRepository {
    GetUbications(): Promise<Array<Ubication>>;
    GetUbication(Id: number): Promise<Ubication>;
    SetUbication(ubication: Ubication): Promise<Ubication>;
    UpdateUbication(id: number, ubication: Ubication): Promise<Ubication>;
    DeleteUbication(id: number): Promise<void>;
}

export default IUbicationRepository;