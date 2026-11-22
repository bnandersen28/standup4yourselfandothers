//Saves new books and book edits to Firestore database.
import {
    collection, 
    getDocs,
    query,
    where, 
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
    serverTimestamp,
} from "firebase/firestore";

import { getFirebaseDb} from "./firebase";

export type Book = {
    id: string;
    title: string;
    author: string;
    language: string;
    gradeLevel: string;
    description: string;
}

 const db = getFirebaseDb();



export async function getBooksByGrade(
    gradeLevel: string
): Promise<Book[]>{

    const booksQuery = query(
        collection(db, "books"),
        where("gradeLevel", "==", gradeLevel)
    );
    const booksSnapshot = await getDocs(booksQuery);
    
    return booksSnapshot.docs.map((doc) => ({
        ...(doc.data() as Omit<Book, "id">),
        id: doc.id,
    }));
}

export async function addBook(book: Omit<Book, "id">) {
    try {
        const docRef = await addDoc(collection(db, "books"), {
            ...book,
            createdAt: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function updateBook(
    bookId: string,
    bookData: Partial<Omit<Book, "id">>
){
    const bookRef = doc(db, "books", bookId);
    await updateDoc(bookRef, bookData);
}

export async function deleteBook(bookId: string) {
    const bookRef = doc(db, "books", bookId);
    await deleteDoc(bookRef);
}