import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import LoadingOverlay from "react-loading-overlay";

const FileUploader = () => {
  const [info, setInfo] = useState([]);
  const [showUploadOption, setShowUploadOption] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const sessionData =sessionStorage.getItem("loggedinUserData")
  console.log(sessionData);
  const userData = sessionData?.length>0 && JSON.parse(sessionData);


  const fileRef = useRef();
  const navigate = useNavigate();

  const uploadNewFile = (e) => {
    setShowLoader(true); 
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    // change this to userId to Current User Id
    formData.append("userId", userData._id);

    axios
      .post("http://localhost:9002/fileUploader", formData)
      .then((res) => {
        console.log(res.data);
        console.log("yesss");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setTimeout(() => {
          setShowLoader(false);
          fileRef.current.value = "";
        }, 1500);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <div>
          <h1>Welcome {userData?.username}</h1>
          <button
            className="btn btn-primary m-2"
            onClick={() => setShowUploadOption(true)}
          >
            Upload New Sheet
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => navigate("/birthdays")}
          >
            Check Existing Sheets
          </button>
        </div>
        {showUploadOption && (
          // <LoadingOverlay active={showLoader} spinner text="Loading...">
            <div className="pt-5">
              <h3>File Uploader</h3>
              <input ref={fileRef} type="file" onChange={uploadNewFile} />
            </div>
          // </LoadingOverlay>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
