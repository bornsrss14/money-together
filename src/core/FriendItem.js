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

          <span>
            {friendObject.balance < 0 && (
              <p className="red">
                You owe {friendObject.name} {Math.abs(friendObject.balance)}€
              </p>
            )}
            {friendObject.balance > 0 && (
              <p className="green">
                {friendObject.name} owes you {Math.abs(friendObject.balance)}€
              </p>
            )}
            {friendObject.balance === 0 && (
              <p>You and {friendObject.name} are even</p>
            )}
          </span>
        </div>
        <div>
          <ButtonGral onClick={handleClick} txt={"select"} />
        </div>
      </div>
    </>
  );
};

export default FriendItem;
