import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCTo-E63fsDz3Go0B5znOch6iYiu67IbxQ",
  authDomain: "work-board-15dcf.firebaseapp.com",
  projectId: "work-board-15dcf",
  storageBucket: "work-board-15dcf.appspot.com",
  messagingSenderId: "903327978958",
  appId: "1:903327978958:web:741f24cb1027fb7c10079f"
};

const app = initializeApp(firebaseConfig);

const Get = async (table) => {
  const db = getFirestore(app);
  const tableCollection = collection(db, table);
  const tableSnapshot = await getDocs(tableCollection);
  const tableList = tableSnapshot.docs.map(doc => doc.data());
  const documentRefs = tableSnapshot.docs.map(doc => doc.id);

  for (let i = 0; i < tableList.length; i++) {
    const data = tableList[i];
    data.id = documentRefs[i];
  }

  return tableList;
};

const Put = async (data, table) => {
  const db = getFirestore(app);
  const docRef = doc(db, table, data.id);

  const response = await updateDoc(docRef, data);

  return response;
}

const Post = async (data, table) => {
  const db = getFirestore(app);
  const tableCollection = collection(db, table);

  const response = await addDoc(tableCollection, data);

  return response;
}

export { Get, Put, Post }