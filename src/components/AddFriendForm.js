import { useState } from "react";
import ButtonGral from "../core/ButtonGral";

export const AddFriendForm = ({ handleAddFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [urlPic, setUrlPic] = useState("");
  const [showFormAddFriend, setShowFormAddFriend] = useState(false);
  const handleShowFriendForm = () => {
    setShowFormAddFriend((prev) => !prev);
  };
  function handleSubmitNewFriend(e) {
    e.preventDefault();
    if (!friendName || !urlPic) return;
    const id = Date.now().toString().slice(-8);
    const newFriend = {
      id,
      name: friendName,
      profilePic: urlPic,
      balance: 0,
    };

    //funFaltante para agregar un nuevo FriendItem a Friends
    handleAddFriend(newFriend);
    setFriendName("");
    setUrlPic("");
    handleShowFriendForm();
  }
  return (
    <div className="container-friend-popup">
      {showFormAddFriend ? (
        <>
          <div className="overly-friend-form"></div>
          <form onSubmit={handleSubmitNewFriend} id="container-AddFriendForm">
            <div className="container-input-style">
              <label>👯‍♀️ Friend Name</label>
              <input
                onChange={(e) => setFriendName(e.target.value)}
                value={friendName}
                type="text"
              />
            </div>
            <div className="container-input-style">
              <label>📸 Image URL:</label>
              <input
                value={urlPic}
                onChange={(e) => setUrlPic(e.target.value)}
                type="text"
              />
            </div>
            <div className="btn-split-containere btn-extra-style">
              <ButtonGral txt={"Add"} />
            </div>
          </form>

          {/* 👉 Este es el otro botón adicional */}
          <div className="btn-split-containere btn-extra-style">
            <ButtonGral onClick={handleShowFriendForm} txt={"Cancel"} />
          </div>
        </>
      ) : (
        <div className="btn-split-containere btn-extra-style">
          <ButtonGral onClick={handleShowFriendForm} txt={"New Friend"} />
        </div>
      )}
    </div>
  );
};

export default AddFriendForm;
