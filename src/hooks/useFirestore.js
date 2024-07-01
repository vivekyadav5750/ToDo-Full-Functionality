import { useEffect, useState } from 'react';
import { db } from '../Config/firebaseInit';
import { collection, onSnapshot } from 'firebase/firestore';

const useFirestore = (coll) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
   const unsubscribe = onSnapshot(collection(db, coll), (snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
        });
        console.log(documents);
        setDocs(documents);

    });

    return () => unsubscribe();
  }, [coll]);

  return { docs };
};

export default useFirestore;
