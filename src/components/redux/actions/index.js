import { db } from "../../../utils/firebase/firebase.utils";
import { addDoc,getDocs, collection,deleteDoc, doc,updateDoc, query } from "firebase/firestore";

// types
export const ADD_BOOKS = 'ADD_BOOKS';
export const GET_BOOKS = 'GET_BOOKS';
export const DELETE_ALL = 'DELETE_ALL';
export const DELETE_BOOK="DELETE_BOOK";
export const UPDATE_BOOK ="UPDATE_BOOK"
/*jobs*/
// export const ADD_JOBS ='ADD_JOBS';
// export const GET_JOBS = 'GET_JOBS'; 

export const postBook =(newBook)=>async(dispatch)=>{
    await addDoc(collection(db, 'Books'),{
        isbn:newBook.isbn,
        title:newBook.title,
        author:newBook.author,
        review:newBook.review
    })
    dispatch({
        type:'ADD_BOOKS',
        payload:newBook
    })
}

export const getBooks =()=>async(dispatch)=>{
    const q = query(collection(db, 'Books'));
    const books = await getDocs(q);
    if(books.docs.length > 0 ){
        const booksArray = [];
        for(let snap of books.docs){
            let data = snap.data();
            booksArray.push(data);
        }
        dispatch({
            type:'GET_BOOKS',
            payload:booksArray
        })
    }
}



export const deleteAll =()=>async(dispatch)=>{
    const q = query(collection(db, 'Books'));
    const books = await getDocs(q);

    for(let snap of books.docs){ 
        await deleteDoc(doc(db, 'Books', snap.id));
    }
    dispatch({
        type:'DELETE_ALL',
    })
}

export const deleteBook=(bookToBeDeletedIsbn)=>async(dispatch)=>{
    const q = query(collection(db, 'Books'));
    const books = await getDocs(q);

    for (let snap of books.docs){
        const data = snap.data();
        if(data.isbn === bookToBeDeletedIsbn){
                await deleteDoc(doc(db,'Books', snap.id));
            }
        }
        
        dispatch({
            type:DELETE_BOOK,
            payload:bookToBeDeletedIsbn
        })

}

export const updateBook=(editedBook)=>async(dispatch)=>{
    const q = query(collection(db, 'Books'));
    const books = await getDocs(q);

    for (let snap of books.docs){
        const data = snap.data();
        if(data.isbn === editedBook.previousIsbn){
                const bookRef = doc(db,'Books', snap.id)
                await updateDoc(bookRef,{
                    isbn:editedBook.isbn,
                    title:editedBook.title,
                    author:editedBook.author,
                    review:editedBook.review
                });
            }
        }
    dispatch({
        type:UPDATE_BOOK,
        payload:editedBook
    })
}