import React from "react";
import ButtonGral from "../core/ButtonGral";
import ImagenFit from "../core/ImagenFit";
import FriendItem from "../core/FriendItem";

export const FriendList = ({ friendsMainArr, onSelectFriend }) => {
  return (
    <div id="container-friends">
      {friendsMainArr.map((friend) => (
        <FriendItem
          onSelectFriend={onSelectFriend}
          key={friend.id}
          friendObject={friend}
        />
      ))}
    </div>
  );
};

export default FriendList;
