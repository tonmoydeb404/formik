import React, { useEffect, useState } from "react";

const ImagePreview = ({ file }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const { result } = e.target;
      if (result) {
        setImage(result);
      }
    };

    reader.readAsDataURL(file);
  }, [file]);

  return (
    <div className="image_preview">
      {file && file.type?.includes("image") ? (
        image ? (
          <img src={image} alt="user image" />
        ) : (
          "loading..."
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default ImagePreview;
