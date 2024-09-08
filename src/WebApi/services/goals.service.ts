// ejemplo.ts
import { db } from './firebase-service';
import { collection, getDocs } from 'firebase/firestore';

export const getGoals = async () => {
  const querySnapshot = await getDocs(collection(db, "goals"));
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });

   return querySnapshot.docs.map((doc) => doc.data());
}

