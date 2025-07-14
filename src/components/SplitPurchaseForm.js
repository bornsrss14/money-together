import React, { use, useState } from "react";

import ButtonGral from "../core/ButtonGral";

export const SplitPurchaseForm = ({
  onSplitTheBill,
  selectedFriend,
  categoriesArr,
}) => {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("");
  const [category, setCategory] = useState("");
  const [concept, setConcept] = useState("");
  const paidByFriend = bill ? bill - yourExpense : "";

  function handleSpilTheBill(e) {
    e.preventDefault();
    if (!bill || !yourExpense) return;
    const deudor =
      whoIsPaying === "me"
        ? `Your friend owes you ${paidByFriend}`
        : `You owe to ${whoIsPaying} $${yourExpense}`;
    console.log(
      `The bill: ${bill}, you expensed ${yourExpense} and your friend expesnsed ${paidByFriend}, the bill was paieed by ${whoIsPaying}
      and ${deudor}; Details: You expensed in ${category} for ${concept}`
    );
    onSplitTheBill(whoIsPaying === "me" ? paidByFriend : -yourExpense);

    setYourExpense("");
    setBill("");
  }
  return (
    <form onSubmit={handleSpilTheBill} id="container-SplitPurchaseForm">
      <h1>{`Split a bill with  ${selectedFriend.name ?? "... (・・ ) ?"}`}</h1>
      <div className="container-input-style">
        <label>💸 Bill Value</label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          type="text"
        />
      </div>

      <div className="container-input-style">
        <label>🧍‍♀️ Your Expense</label>
        <input
          onChange={(e) => setYourExpense(Number(e.target.value))}
          value={yourExpense}
          type="text"
        />
      </div>

      <div className="container-input-style">
        <label> {`${selectedFriend.name}'s expense`}</label>
        <input value={paidByFriend} placeholder="none" type="text" disabled />
      </div>
      <div className="container-input-style">
        <label>🤑 Who is paying the bill?</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value={"me"}>You</option>
          <option value={"friend"}>{selectedFriend.name}</option>
        </select>
      </div>

      <div className="container-input-style">
        <div style={{ display: "flex", gap: "1.4rem", alignItems: "center" }}>
          <label>Category</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value={category} disabled>
              {" "}
              pick one...
            </option>
            {categoriesArr.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="container-input-style">
          <input
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            placeholder="concept"
            type="text"
          />
        </div>
      </div>
      <div className="btn-split-containere">
        <ButtonGral txt={"split"} />
      </div>
    </form>
  );
};

export default SplitPurchaseForm;
