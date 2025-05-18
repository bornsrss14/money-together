import React from "react";
import ButtonGral from "../core/ButtonGral";

export const AddFriendForm = () => {
  function handleSubmitNewFriend(e) {
    e.preventDefault();
    console.log("You press add new friend function");
  }
  return (
    <form onSubmit={handleSubmitNewFriend} id="container-AddFriendForm">
      <div className="container-input-style">
        <label>👯‍♀️ Friend Name</label>
        <input type="text" />
      </div>
      <div className="container-input-style">
        <label>📸 Image URL:</label>
        <input type="text" />
      </div>
      <div>
        <ButtonGral txt={"Add"} />
      </div>
    </form>
  );
};

export default AddFriendForm;
