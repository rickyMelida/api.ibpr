import { container } from "tsyringe";
import IMainVerseRepository from "../Application/Repositories/IMainVerseRepository";
import MainVerseRepository from "./repository/MainVerseRepository";
import IVerseServices from "../Application/Interfaces/IVerseServices";
import VerseService from "../Application/Services/VerseServices";

const DependencyInyeccion = () => {
    container.register<IMainVerseRepository>("IMainVerseRepository", {
        useClass: MainVerseRepository,
    });

    container.register<IVerseServices>("IVerseServices", {
        useClass: VerseService,
    });
};

export default DependencyInyeccion;
