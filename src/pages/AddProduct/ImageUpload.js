import React, { useState } from 'react';
import axios from 'axios';
import { API } from '../../config';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState([]);

  const handleFileChange = e => {
    e.preventDefault();
    setSelectedFile(e.target.files);
  };

  const handleFileUpload = () => {
    const formData = new FormData();

    for (let i = 0; i < selectedFile.length; i++) {
      formData.append('image_url', selectedFile[i]);
    }

    // fetch('http://10.58.7.108:8080/product/2/host/1/image_upload', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: formData,
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res));

    axios
      .post(`${API}/product/621/image_upload`, formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />
      <button onClick={handleFileUpload}>업로드</button>
    </div>
  );
};

export default ImageUpload;
