import React from "react";
import images from "../utils/images.js";
const Baner = () => {
  console.log(images);
  const selectedImage = images[0];
  const selectedImage2 = images[1];
  const selectedImage3 = images[1];
  return (
    <div>
      <img src={selectedImage} alt="" />
      <img src={selectedImage2} alt="" />
    </div>
  );
};

export default Baner;
