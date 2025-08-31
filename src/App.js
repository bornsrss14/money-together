import "./App.css";
import "./MobileStyles.css";
import FriendList from "./components/FriendList";
import SplitPurchaseForm from "./components/SplitPurchaseForm";
import AddFriendForm from "./components/AddFriendForm";
import { useEffect, useState } from "react";

function App() {
  const [selectedFriend, setSelectedFriend] = useState("null");
  const [isHidden, setIsHidden] = useState(true);
  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
    document.title = `Let's split the bill - ${friend.name.split(" ")[0]}`;
  };

  function toggleHidden() {
    setIsHidden((prev) => !prev);
  }
  console.log(selectedFriend);

  const categories = [
    "Food 🍖",
    "Home 🏡",
    "Medicinas ❤️‍🩹",
    "Gardening 🌼",
    "Skin Care 💆",
    "Gym 🏋️‍♀️",
    "Fun 🎢",
    "Education 📖",
    "Pets 🐈",
    "Other...",
  ];
  const friendsArray = [
    {
      id: 17849,
      name: "Anna Oh",
      profilePic:
        "https://i-d.co/wp-content/uploads/2024/05/untitled-article-1465358355-body-image-1465358689.jpg?w=640&quality=90",
      balance: 0,
      expenses: [
        {
          id_exp: "e1",
          bill: 100,
          yourExpense: 60,
          paidBy: "me",
          concept: "Pago CFE",
          category: "Servicios",
          date: "2025-05-18T20:10:00Z",
        },
        {
          id_exp: "e2",
          bill: 300,
          yourExpense: 150,
          paidBy: "friend",
          concept: "Compra de víveres",
          category: "Comida",
          date: "2025-05-10T17:20:00Z",
        },
      ],
    },
    {
      id: 14249,
      name: "Francess Cannon",
      profilePic:
        "https://i-d.co/wp-content/uploads/2024/05/woman-crush-wednesday-with-francescannon-body-image-1464747425.jpg?w=750&quality=90",
      balance: 0,
      expenses: [
        {
          id_exp: "e4",
          bill: 500,
          yourExpense: 48,
          paidBy: "friend",
          concept: "Botiquín de emergencias",
          category: "Salud",
          date: "2025-04-11T17:20:00Z",
        },
      ],
    },
    {
      id: 89658,
      name: "Elja O'Connor",
      profilePic:
        "https://i-d.co/wp-content/uploads/2024/05/untitled-article-1464746669-body-image-1464747079.jpg?quality=90&w=750",
      balance: 0,
      expenses: [],
    },
    {
      id: 8902632,
      name: "Jessica Blume",
      profilePic:
        "https://i-d.co/wp-content/uploads/2024/05/untitled-article-1464146842-body-image-1464147791.jpg?quality=90&w=602",
      balance: 0,
      expenses: [],
    },
  ];

  const [friendsMainArr, setFriendsMainArr] = useState(() => {
    const saved = localStorage.getItem("friendsMainArr");
    return saved ? JSON.parse(saved) : friendsArray;
  });
  useEffect(() => {
    localStorage.setItem("friendsMainArr", JSON.stringify(friendsMainArr));
  }, [friendsMainArr]);

  function handleAddFriend(friendItem) {
    setFriendsMainArr((prevFriends) => [...prevFriends, friendItem]);
  }

  function handleSplitTheBill(value) {
    setFriendsMainArr((friendsMainArr) =>
      friendsMainArr.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="main-container-app">
      <div>
        <h1 className="title-main">(｡•̀ᴗ-) Fair splits, strong friendships.</h1>
      </div>
      <div className="App">
        <div className="relative-main">
          <FriendList
            setIsHidden={setIsHidden}
            onSelectFriend={handleSelectFriend}
            friendsMainArr={friendsMainArr}
          />
          <AddFriendForm
            friendsMainArr={friendsMainArr}
            handleAddFriend={handleAddFriend}
          />
        </div>
        <SplitPurchaseForm
          isHidden={isHidden}
          onClickHidden={toggleHidden}
          categoriesArr={categories}
          onSplitTheBill={handleSplitTheBill}
          selectedFriend={selectedFriend}
        />
      </div>
    </div>
  );
}

export default App;
