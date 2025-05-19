import React from "react";
import ImagenFit from "./ImagenFit";
import ButtonGral from "./ButtonGral";

export const FriendItem = ({ onSelectFriend, friendObject }) => {
  const handleClick = () => onSelectFriend(friendObject);

  return (
    <>
      <div className="friend-item">
        <div className="profile-pi">
          <ImagenFit
            src={friendObject.profilePic}
            width={"48px"}
            height={"48px"}
            alt={"profile-pic"}
          />
        </div>
        <div className="friend-detail">
          <p className="name">{friendObject.name}</p>
          <span>{`You owe Ros $7 MXN`}</span>
        </div>
        <div>
          <ButtonGral onClick={handleClick} txt={"select"} />
        </div>
      </div>
    </>
  );
};

export default FriendItem;
