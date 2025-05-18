import React from "react";
import ButtonGral from "../core/ButtonGral";

export const SplitPurchaseForm = ({ friendsName = "Anna Oh" }) => {
  function handleSpilTheBill(e) {
    e.preventDefault();
    console.log("You've clicked Split the bill funtion");
  }
  return (
    <form onSubmit={handleSpilTheBill} id="container-SplitPurchaseForm">
      <h1>{`Spill a bill with ${friendsName}`}</h1>
      <div className="container-input-style">
        <label>💸 Bill Value</label>
        <input type="text" />
      </div>

      <div className="container-input-style">
        <label>🧍‍♀️ Your Expense</label>
        <input type="text" />
      </div>

      <div className="container-input-style">
        <label> {`${friendsName}'s expense`}</label>
        <input placeholder="none" type="text" disabled />
      </div>
      <div className="container-input-style">
        <label>🤑 Who is paying the bill?</label>
        <select>
          <option value={"friend"}>You</option>
          <option value={"you"}>{friendsName}</option>
        </select>
      </div>
      <div className="btn-split-containere">
        <ButtonGral txt={"split"} />
      </div>
    </form>
  );
};

export default SplitPurchaseForm;
