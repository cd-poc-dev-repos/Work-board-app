import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCTo-E63fsDz3Go0B5znOch6iYiu67IbxQ",
  authDomain: "work-board-15dcf.firebaseapp.com",
  projectId: "work-board-15dcf",
  storageBucket: "work-board-15dcf.appspot.com",
  messagingSenderId: "903327978958",
  appId: "1:903327978958:web:741f24cb1027fb7c10079f"
};

const app = initializeApp(firebaseConfig);

// Get a list of cities from your database
const GetTickets = async () => {
  const db = getFirestore(app);
console.log('db', db);
  const ticketsCollection = collection(db, 'tickets');
  console.log('ticketCol', ticketsCollection);
  const ticketsSnapshot = await getDocs(ticketsCollection);

  console.log('ticketsSnapshot', ticketsSnapshot);

  const ticketsList = ticketsSnapshot.docs.map(doc => doc.data());
  console.log('ticketsList', ticketsList);
  
  return ticketsList;
};


export { GetTickets }