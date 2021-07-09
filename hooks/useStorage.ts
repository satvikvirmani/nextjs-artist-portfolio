import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from "../backend/firebase-config";

const useStorage = (file: any) => {
  const [progress, setProgress] = useState(0);
  const [uploadError, setUploadError] = useState<any | null>(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = projectStorage.ref(`${nanoid()}-${file.label}`);
    const collection = projectFirestore.collection("images");
    storageRef.put(file.image).on(
      "state_changed",
      (snap) => {
        let progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(progress);
        console.log(progress);
      },
      (error) => {
        setUploadError(error);
        console.log(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        collection.add({
          url: url,
          label: file.label,
          description: file.description,
          forShowcase: file.forShowcase,
          createdAt: timeStamp,
        });
        console.log(url);

        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, uploadError };
};

export default useStorage;
