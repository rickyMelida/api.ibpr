import {
    addDoc,
    collection,
    getDoc,
    getDocs,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import ISectionRepository from "../../Application/Repositories/ISectionRepository";
import Section from "../../Domain/Entities/Section";
import { db } from "../db/firebase.config";

export default class SectionRepository implements ISectionRepository {
    GetSections(): Promise<Array<Section>> {
        throw new Error("Method not implemented.");
    }
    GetSection(id: number): Promise<Section> {
        throw new Error("Method not implemented.");
    }
    async GetSectionId(sectionName: string): Promise<number> {
        try {
            const q = await query(
                collection(db, "sections"),
                where("Name", "==", sectionName)
            );
            let id: number = 0;

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                id = doc.data().Id;
            });

            return id;
        } catch (error) {
            return 0;
        }
    }
    async SetSection(section: Section): Promise<Section> {
        try {
            const docRef = await addDoc(collection(db, "sections"), section);
            return section;
        } catch (error: Error | any) {
            throw new Error(error.message);
        }
    }

    UpdateSection(id: number, sectionUpdate: Section): Promise<void> {
        throw new Error("Method not implemented.");
    }
    DeleteSection(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async GetLastId(): Promise<number> {
        try {
            const q = query(collection(db, "sections"), orderBy("Id", "desc"));
            const querySnapshot = await getDocs(q);

            const sections: any[] = [];
            querySnapshot.forEach((doc) => {
                sections.push(doc.data().Id);
            });
            return sections[0];
        } catch (error) {
            return 0;
        }
    }
}
