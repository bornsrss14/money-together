import React from "react";
import ButtonGral from "../core/ButtonGral";
import ImagenFit from "../core/ImagenFit";
import FriendItem from "../core/FriendItem";

export const FriendList = ({ friendsArray, onSelectFriend }) => {
  return (
    <div id="container-friends">
      {friendsArray.map((friend) => (
        <FriendItem
          onSelectFriend={onSelectFriend}
          key={friendsArray.id}
          friendObject={friend}
        />
      ))}
    </div>
  );
};

export default FriendList;
