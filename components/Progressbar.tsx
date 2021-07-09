import * as React from "react";
import { useEffect } from "react";

import useStorage from "../hooks/useStorage";

export interface ProgressbarProps {
  image: File;
  setImage: Function;
}

export const Progressbar: React.SFC<ProgressbarProps> = (props) => {
  const { url, progress } = useStorage(props.image);

  //remove progress bar after file has finished uploading
  useEffect(() => {
    if (url) {
      props.setImage(null);
    }
  }, [url, props]);

  return (
    <div
      className="progress h-4 bg-gray-500"
      style={{ width: progress + "%" }}
    ></div>
  );
};
