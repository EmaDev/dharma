import firebaseApp from "./config";
import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query } from "firebase/firestore";

const db = getFirestore(firebaseApp);
const baseCollection = 'landigs_products/FoodAndEatDB/products_collection';

export const getAllProducts = async () => {

    const q = query(collection(db, baseCollection));
    const querySnapshot = await getDocs(q);
    const arrProducts:any= [];
    querySnapshot.forEach((doc) => {
        arrProducts.push({...doc.data(), id: doc.id});
    });
    return arrProducts;
};

export const getExtrasPrice = async () => {
    try {
        const docRef = doc(db, "landigs_products", "FoodAndEatDB");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                extras: docSnap.data().extras,
                phone: docSnap.data().telefono
            };
        } else {
            console.log("No such document!");
            return null;
        }

    } catch (error) {
        console.log(error);
    }
};