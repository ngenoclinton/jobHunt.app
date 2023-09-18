import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, addDoc, query, orderBy, where, serverTimestamp } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';



export const fetchJobss = createAsyncThunk('job/fetchJobs', async () => {
  const req = await getDocs(collection(db, 'jobs'), orderBy('postedOn', 'desc'));
  const tempJobs = req.docs.map((job) => ({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toMillis() }));
  return tempJobs;
});

export const postJob = createAsyncThunk('job/postJob', async (postJobDetails) => {
  const docRef = await addDoc(collection(db, 'jobs'), {
    ...postJobDetails,
    jobTitle: postJobDetails.jobTitle.toLowerCase(),
    postedOn: serverTimestamp(),
  });
  return docRef.id;
});

export const fetchJobsSearch = createAsyncThunk('job/fetchJobsSearch', async (jobSearch) => {
  const collectionRef = collection(db, 'jobs');
  const querySnap = await getDocs(
    query(collectionRef, where('type', '==', jobSearch.type), where('location', '==', jobSearch.location))
  );
  const results = querySnap.docs.map((job) => ({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() }));
  return results;
});
