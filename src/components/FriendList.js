import React from "react";
import FriendItem from "../core/FriendItem";

export const FriendList = ({ setIsHidden, friendsMainArr, onSelectFriend }) => {
  return (
    <div id="container-friends">
      {friendsMainArr.map((friend) => (
        <FriendItem
          setIsHidden={setIsHidden}
          onSelectFriend={onSelectFriend}
          key={friend.id}
          friendObject={friend}
        />
      ))}
    </div>
  );
};

export default FriendList;
