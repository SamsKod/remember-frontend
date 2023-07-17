import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import imageCompression from 'browser-image-compression';

function ImageCompressor() {
  const [ uploadImage, setUploadImage ] = useState(false);
  const [ clicked, setClicked ] = useState("");
  const [ compressedLink, setCompressedLink] = useState("http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png");
  const [ imageDetails, setImageDetails] = useState({
    originalImage: "",
    originalLink: "",
    outputFileName: ""
  });

  function handleClick(e) {
    const [ imageFile ] = e.target.files;
    
    setUploadImage(true);
    setImageDetails({
      originalImage: imageFile,
      originalLink: URL.createObjectURL(imageFile),
      outputFileName: imageFile.name
    });
  }

  async function handleCompress(e) {
    e.preventDefault();

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
      useWebWorker: true
    };

    if (options.maxSizeMB >= imageDetails.originalImage.size / 1024) {
      alert("Image is too small, can't be Compressed!");
      return 0;
    }

    const output = await imageCompression(imageDetails.originalImage, options);
    const downloadLink = URL.createObjectURL(output);
    setCompressedLink(downloadLink);
    setClicked(true);

    return 1;
  }

  return (
    <div className="m-5">
      <div className="text-light text-center">
        <h1>Three Simple Steps</h1>
        <h3>1. Upload Image</h3>
        <h3>2. Click on Compress</h3>
        <h3>3. Download Compressed Image</h3>
      </div>
      <div className="row mt-5">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          {uploadImage ? (
            <Card.Img
              className="ht"
              variant="top"
              src={imageDetails.originalLink}
            ></Card.Img>
          ) : (
            <Card.Img 
              className="ht"
              variant="top"
              src="http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png"
            />
          )}
          <div className="d-flex justify-content-center">
            <input
              type="file"
              accept="image/*"
              className="mt-2 btn btn-dark w-75"
              onChange={handleClick}
              style={{display: 'block'}}
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 mb-5 mt-5 col-sm-12 d-flex justify-content-center align-items-baseline">
          <br />
          {imageDetails.outputFileName && (
            <button
              type="button"
              className=" btn btn-dark"
              onClick={handleCompress}
            >
              Compress
            </button>
          )}
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3">
          <Card.Img variant="top" src={compressedLink}></Card.Img>
          {clicked && (
            <div className="d-flex justify-content-center">
              <a
                href={compressedLink}
                download={imageDetails.outputFileName}
                className="mt-2 btn btn-dark w-75"
              >
                Download
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageCompressor;