import { container } from "tsyringe";
import IMainVerseRepository from "../Application/Repositories/IMainVerseRepository";
import MainVerseRepository from "./repository/MainVerseRepository";
import IVerseServices from "../Application/Interfaces/IVerseServices";
import VerseService from "../Application/Services/VerseServices";
import IVerseRepository from "../Application/Repositories/IVerseRepository";
import VerseRepository from "./repository/VerseRepository";
import ISectionRepository from "../Application/Repositories/ISectionRepository";
import SectionRepository from "./repository/SectionRepository";

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
};

export default DependencyInyeccion;
