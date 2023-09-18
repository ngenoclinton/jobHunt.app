import React,{useState, useEffect} from 'react'; 
import { collection, getDocs, addDoc,query, orderBy,where ,serverTimestamp } from "firebase/firestore"; 
import { useSelector, useDispatch } from 'react-redux';

import { getBooks, deleteAll ,deleteBook, updateBook} from '../redux/actions';

import { getJobs } from '../redux/JobsReducer/actions';

import { AiFillEdit,AiFillDelete } from "react-icons/ai";

import { postBook } from '../redux/actions';

function SearchJob() {
    const dispatch = useDispatch();

    const books = useSelector(state => state.operationsReducer);
    const jobs = useSelector(state=>state.jobsReducer);
    console.log(jobs);
    useEffect(() => {
      dispatch(getBooks()); 
    }, [dispatch]);

    useEffect(() => {
        dispatch(getJobs()); 
    }, [dispatch]);

    // Normal form states
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [review, setReview] = useState('');
    // Edited form states
    const [editIsbn, setEditIsbn] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editAuthor, setEditAuthor] = useState('');
    const [editReview, setEditReview] = useState('');

    const [editVisibility, setEditVisibility] =useState(false); 
    const [bookToBeEdited, setBookToBeEdited] = useState('');

    useEffect(()=>{
        setEditIsbn(bookToBeEdited.isbn);
        setEditTitle(bookToBeEdited.title)
        setEditAuthor(bookToBeEdited.author)
        setEditReview(bookToBeEdited.review)
    },[bookToBeEdited])

    const handleSubmit = (e)=>{
        e.preventDefault();
        let book={
            isbn, title, author, review
        }
        dispatch(postBook(book));
        setIsbn('')
        setTitle('')
        setAuthor('')
        setReview('')
    }

    const handleEdit =( bookObj)=>{
        setEditVisibility(!editVisibility);
        setBookToBeEdited(bookObj);
    }
    const handleEditSubmit = (e)=>{
        e.preventDefault();
        let editedBook={
            previousIsbn:bookToBeEdited.isbn,isbn:editIsbn, title:editTitle, author:editAuthor, review:editReview
        }
        dispatch(updateBook(editedBook));
        
    }
    const cancelUpdate =()=>{
        setEditVisibility(false);
        setBookToBeEdited('')
    }
  return (
    <div className='mx-auto'>
        <div class="bg-white p-8 rounded shadow-md w-full ">
            <h1 class="text-2xl font-semibold mb-4">Sample Form</h1>
            {editVisibility == false ? (
                //Normal add book form 
                <form className='flex' onSubmit={handleSubmit}>
                <div class="mb-4 mr-4">
                    <label for="isbn" class="block text-gray-700 text-sm font-bold mb-2">ISBN NO.</label>
                    <input type="text" name="isbn" class="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="123456" onChange={(e)=>setIsbn(e.target.value)} value={isbn} required/>
                </div>
                <div class="mb-4 mr-4">
                    <label for="author" class="block text-gray-700 text-sm font-bold mb-2">Author</label>
                    <input type="text" name="author" class="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Author" required onChange={(e)=>setAuthor(e.target.value)} value={author}/>
                </div>
                <div class="mb-4 mr-4">
                    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input type="title" name="title" class="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="@example Make it Happen" required onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div class="mb-4 mr-4">
                    <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Book Review</label>
                    <textarea id="message" name="message" rows="4" class="border rounded px-3 py-2 w-full resize-none focus:outline-none focus:border-blue-500" placeholder="Your message here" required onChange={(e)=>setReview(e.target.value)} value={review}></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
                </form>
            ): 
            (
                <div className="flex flex-col">
                {/* // Form when edit button is clicked */}
                <form className='flex' onSubmit={handleEditSubmit}>
                    <div class="mb-4 mr-4">
                        <label for="isbn" class="block text-gray-700 text-sm font-bold mb-2">ISBN NO.</label>
                        <input type="text" name="isbn" class="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" onChange={(e)=>setEditIsbn(e.target.value)} value={editIsbn || ''} required/>
                    </div>
                    <div class="mb-4 mr-4">
                        <label for="author" class="block text-gray-700 text-sm font-bold mb-2">Author</label>
                        <input type="text" name="author" class="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" onChange={(e)=>setEditAuthor(e.target.value)} value={editAuthor || ''} required/>
                    </div>
                    <div class="mb-4 mr-4">
                        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input type="title" name="title" class="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" onChange={(e)=>setEditTitle(e.target.value)} value={editTitle || ''} required />
                    </div>
                    <div class="mb-4 mr-4">
                        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Book Review</label>
                        <textarea id="message" name="message" rows="4" class="border rounded px-3 py-2 w-full resize-none focus:outline-none focus:border-blue-500" onChange={(e)=>setEditReview(e.target.value)} value={editReview || ''}  required></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">UPDATE</button>
                    </div>
                    
                </form>
                
                <button type="submit" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={cancelUpdate}>Cancel Edit</button>
                </div>
                )
            }
        </div>
        <div className='max-w-6xl mx-auto w-full mt-10'>
            { books.length > 0 ? (
                <div className='mb-4'>
                    {books.map(book =>(
                        <div key={book.isbn} className='flex space-x-10 mb-4'>
                            <span>#{book.isbn}</span>
                            <span>{book.title}</span>
                            <span>{book.author}</span>
                            <span>{book.preview}</span>
                            {editVisibility == false && <>
                                <AiFillEdit className="cursor-pointer" onClick={()=>handleEdit(book)}/>
                                <AiFillDelete className="cursor-pointer" onClick={()=>dispatch(deleteBook(book.isbn))}/>
                            </>}  
                        </div>
                        )                    
                    )}
                </div>
            ): <div>No books found, add a book to display it here</div>}
            {books.length > 1&&(
            <button className="btn btn-outline-danger btn-md delete-all w-fit border-[1px] border- rounded-md bg-red-500 py-2 px-4" onClick={()=>dispatch(deleteAll())}>
              DELETE ALL
            </button>
          )}
        </div>
    </div>
  )
}

export default SearchJob
