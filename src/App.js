import logo from "./logo.svg";
import "./App.css";
import FriendList from "./components/FriendList";
import SplitPurchaseForm from "./components/SplitPurchaseForm";
import AddFriendForm from "./components/AddFriendForm";
import { useState } from "react";

function App() {
  const [selectedFriend, setSelectedFriend] = useState("null");
  const handleSelectFriend = (friend) => setSelectedFriend(friend);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  console.log(selectedFriend);
  const friendsArray = [
    {
      id: 17849,
      name: "Anna Oh",
      profilePic:
        "https://i-d.co/wp-content/uploads/2024/05/untitled-article-1465358355-body-image-1465358689.jpg?w=640&quality=90",
      balance: 14,
    },
    {
      id: 14249,
      name: "Francess Cannon",
      profilePic:
        "https://i-d.co/wp-content/uploads/2024/05/woman-crush-wednesday-with-francescannon-body-image-1464747425.jpg?w=750&quality=90",
      balance: 94,
    },
    {
      id: 89658,
      name: "Elja O'Connor",
      profilePic:
        "https://i-d.co/wp-content/uploads/2024/05/untitled-article-1464746669-body-image-1464747079.jpg?quality=90&w=750",
      balance: 25,
    },
    {
      id: 8902632,
      name: "Jessica Blume",
      profilePic:
        "https://i-d.co/wp-content/uploads/2024/05/untitled-article-1464146842-body-image-1464147791.jpg?quality=90&w=602",
      balance: 44,
    },
  ];
  const [friendsMainArr, setFriendsMainArr] = useState(friendsArray);

  function handleAddFriend(friendItem) {
    setFriendsMainArr((friendsMainArr) => [...friendsArray, friendItem]);
  }
  return (
    <div className="main-container-app">
      <h1 style={{ textAlign: "center" }}>
        Fair splits, strong friendships (｡•̀ᴗ-)
      </h1>
      <div className="App">
        <div>
          <FriendList
            onSelectFriend={handleSelectFriend}
            friendsArray={friendsArray}
          />
          <AddFriendForm />
        </div>
        <SplitPurchaseForm selectedFriend={selectedFriend} />
      </div>
    </div>
  );
}

export default App;
