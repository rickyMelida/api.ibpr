import IMainVerseRepository from "../../Application/Repositories/IMainVerseRepository";
import MainVerse from "../../Domain/Entities/MainVerse";
import { db } from "../db/firebase.config";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

class MainVerseRepository implements IMainVerseRepository {
    GetMainVerse(id: number): Promise<MainVerse> {
        throw new Error("Method not implemented.");
    }
    async GetMainVerses(): Promise<Array<MainVerse>> {
        try {
            const mainVersesCollection = collection(db, "mainVerses");
            const querySnapshot = await getDocs(mainVersesCollection);

            const mainVerses: MainVerse[] = [];
            
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const mainVerse = new MainVerse(
                    Number(doc.id),
                    data.Section,
                    data.IdVerse
                );
                mainVerses.push(mainVerse);
            });

            return mainVerses;
        } catch (error) {
            console.error("Error getting MainVerses:", error);
            throw error;
        }
    }

    async SetMainVerse(mainVerse: MainVerse): Promise<MainVerse> {
        try {
            const docRef = doc(db, "mainVerses", mainVerse.Id.toString());

            const dataToStore = { ...mainVerse };
            await setDoc(docRef, dataToStore);

            return mainVerse;
        } catch (error) {
            console.error("Error setting MainVerse:", error);
            throw error;
        }
    }
    UpdateMainVerse(id: number, mainVerseUpdate: MainVerse): Promise<void> {
        throw new Error("Method not implemented.");
    }
    DeleteMainVerse(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    GetLastId(): Promise<number> {
        throw new Error("Method not implemented.");
    }
}

export default MainVerseRepository;
