import { useState, useEffect } from "react";

import { projectFirestore } from "../backend/firebase-config";

const useDatabase = (collection: string, limit: boolean) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collection)
      .onSnapshot((snap) => {
        let documents: any = [];
        snap.forEach((doc: any) => {
          documents.push({ ...doc.data() });
        });
        if (limit) {
          documents = documents.filter((doc: any) => doc.forShowcase === true);
        }
        setImages(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return images;
};

export default useDatabase;
