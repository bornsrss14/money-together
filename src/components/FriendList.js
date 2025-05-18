import React from "react";
import ButtonGral from "../core/ButtonGral";
import ImagenFit from "../core/ImagenFit";
import FriendItem from "../core/FriendItem";

export const FriendList = ({ friendsArray }) => {
  return (
    <div id="container-friends">
      {friendsArray.map((friend) => (
        <FriendItem friendObject={friend} />
      ))}
    </div>
  );
};

export default FriendList;
