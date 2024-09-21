import { container } from "tsyringe";
import IMainVerseRepository from "../Application/Repositories/IMainVerseRepository";
import MainVerseRepository from "./repository/MainVerseRepository";
import IVerseServices from "../Application/Interfaces/IVerseServices";
import VerseService from "../Application/Services/VerseServices";
import IVerseRepository from "../Application/Repositories/IVerseRepository";
import VerseRepository from "./repository/VerseRepository";
import ISectionRepository from "../Application/Repositories/ISectionRepository";
import SectionRepository from "./repository/SectionRepository";
import ICoverImageRepository from "../Application/Repositories/ICoverImageRepository";
import CoverImageRepository from "./repository/CoverImageRepository";
import IImageRepository from "../Application/Repositories/IImageRepository";
import ImageRepository from "./repository/ImageRepository";
import ICoverImagesService from "../Application/Interfaces/ICoverImagesService";
import CoverImagesService from "../Application/Services/CoverImagesServices";
import IActivityRepository from "../Application/Repositories/IActivityRepository";
import ActivityRepository from "./repository/ActivityRepository";
import IActivityServices from "../Application/Interfaces/IActivityServices";
import ActivityService from "../Application/Services/ActivityService";
import IUbicationRepository from "../Application/Repositories/IUbicationRepository";
import UbicationRepository from "./repository/UbicationRepository";
import IScheduleRepository from "../Application/Repositories/IScheduleRepository";
import ScheduleRepository from "./repository/ScheduleRepository";

const DependencyInyeccion = () => {
    container.register<IMainVerseRepository>("IMainVerseRepository", {
        useClass: MainVerseRepository,
    });

    container.register<IVerseRepository>("IVerseRepository", {
        useClass: VerseRepository,
    });

    container.register<IVerseServices>("IVerseServices", {
        useClass: VerseService,
    });

    container.register<ISectionRepository>("ISectionRepository", {
        useClass: SectionRepository,
    });

    container.register<ICoverImageRepository>("ICoverImageRepository", {
        useClass: CoverImageRepository,
    });

    container.register<IImageRepository>("IImageRepository", {
        useClass: ImageRepository,
    });

    container.register<ICoverImagesService>("ICoverImagesService", {
        useClass: CoverImagesService,
    });

    container.register<IActivityRepository>("IActivityRepository", {
        useClass: ActivityRepository,
    });

    container.register<IUbicationRepository>("IUbicationRepository", {
        useClass: UbicationRepository,
    });

    container.register<IScheduleRepository>("IScheduleRepository", {
        useClass: ScheduleRepository,
    });

    container.register<IActivityServices>("IActivityServices", {
        useClass: ActivityService,
    });
};

export default DependencyInyeccion;
