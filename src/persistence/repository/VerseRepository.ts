import { injectable } from "tsyringe";
import IVerseRepository from "../../Application/Repositories/IVerseRepository";
import Verse from "../../Domain/Entities/Verse";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../db/firebase.config";

@injectable()
class VerseRepository implements IVerseRepository {
    async GetVerses(): Promise<Array<any>> {
        let result: any[] = [];

        const querySnapshot = await getDocs(collection(db, "verses"));
        
        await querySnapshot.forEach((doc) => {
          result.push(doc.data());
        });

        if(result.length === 0)
            throw new Error("No verses found");

        return result;
    }
    GetVerse(Id: number): Promise<Verse> {
        throw new Error("Method not implemented.");
    }
    async SetVerse(verse: Verse): Promise<Verse> {
        try {
            const docRef = await addDoc(collection(db, "verses"), verse);

            return verse;
        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }

    UpdateVerse(id: number, verse: Verse): Promise<Verse> {
        throw new Error("Method not implemented.");
    }
    DeleteVerse(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    GetLastId(): Promise<number> {
        throw new Error("Method not implemented.");
    }
}

export default VerseRepository;
