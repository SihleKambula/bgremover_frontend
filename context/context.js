import { createContext, useState } from "react";
import router from "next/router";
import axios from "axios";

//Create context
export const ImageContext = createContext();

const ImageContextProvider = (props) => {
  // Context state
  const [noBGpicture, setNoBGPicture] = useState(null);
  const [originalPicture, setOriginalPicture] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // HANDLE SUBMITION TO THE SERVER
  function handleSubmition(file) {
    if (file.type === "image/jpeg" || file.type === "image/png") {
      // sending file to the server
      const formData = new FormData();
      formData.append("image", file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      //use localhost for testing
      // "http://localhost:8000"
      axios
        .post("https://background-r.herokuapp.com/upload", formData, config)
        .then((res) => {
          const { originalPic, noBGPicture } = res.data;

          // setting state
          setOriginalPicture(originalPic);
          setNoBGPicture(noBGPicture);
        });
      //route to upload page
      router.push("/upload");
      return true;
    } else {
      setErrorMsg("Please select an image");
      return true;
    }
  }
  return (
    <ImageContext.Provider
      value={{ noBGpicture, originalPicture, handleSubmition, errorMsg }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
