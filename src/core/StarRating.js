import { IconLineHeight, IconStar, IconStarFilled } from "@tabler/icons-react";

import React, { useState } from "react";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};
const starContainerStyle = {
  display: "flex",
  gap: ".2rem",
};
const textStyle = {
  IconLineHeight: ".8rem",
  margin: "0",
  color: "gray",
  fontSize: "1rem",
};

export const StarRating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  function handleRating(rating) {
    setRating(rating);
  }

  function inMouse(i) {
    setHoverRating(i);
  }
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span
            key={i}
            style={{ cursor: "pointer" }}
            onClick={() => handleRating(i + 1)}
            onMouseEnter={() => inMouse(i + 1)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {rating >= i + 1 || hoverRating >= i + 1 ? (
              <IconStarFilled fill="#ffdb10" />
            ) : (
              <IconStar color="#ffdb10" stroke={"2px"} />
            )}
          </span>
        ))}
        <p style={textStyle}>{rating || hoverRating || ""}</p>
      </div>
    </div>
  );
};
export default StarRating;
