import React from "react";

export const ImagenFit = ({ width, height, src, alt }) => {
  const containerStyle = {
    width,
    height,
    borderRadius: "100%",
    overflow: "hidden",
  };
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };
  return (
    <div style={containerStyle}>
      <img src={src} alt={alt} style={imageStyle} />
    </div>
  );
};

export default ImagenFit;
