import firebaseApp from "./config";
import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export const getAllProducts = async () => {
    try {
        const docRef = doc(db, "landigs_products", "FoodAndEatDB");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().products;
        } else {
            console.log("No such document!");
            return null;
        }

    } catch (error) {
        console.log(error);
    }
};

export const getExtrasPrice = async () => {
    try {
        const docRef = doc(db, "landigs_products", "FoodAndEatDB");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().extras;
        } else {
            console.log("No such document!");
            return null;
        }

    } catch (error) {
        console.log(error);
    }
};