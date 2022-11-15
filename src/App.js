import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import BannerName from "./Components/BannerName";
import Header from "./Components/Header";
import MenuCard from "./Components/MenuCard";
import MenuContainer from "./Components/MenuContainer";
import SubMenuContainer from "./Components/SubMenuContainer";
import { MenuItems, Items } from "./Components/Data";
import ItemCard from "./Components/ItemCard";

function App() {
  //!  Main Dish State

  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    //! MenuCard Active Toggle

    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  //! Set main dish items or filter

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      {/* Header section */}
      <Header />

      {/* Main Container */}

      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Shakhzod"} discount={"20"} link={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>

          {/* dishContainer */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map(({ id, itemId, imgSrc, name }) => (
                  <div key={id} onClick={() => setData(itemId)}>
                    <MenuCard imgSrc={imgSrc} name={name} isActive={id === 1} />
                  </div>
                ))}
            </div>
            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map(
                  ({ id, itemId, imgSrc, name, ratings, price }) => (
                    <ItemCard
                      key={id}
                      itemId={id}
                      imgSrc={imgSrc}
                      name={name}
                      ratings={ratings}
                      price={price}
                    />
                  )
                )}
            </div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>

      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          {/* prettier-ignory */}
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          {/* prettier-ignory */}
          <MenuContainer link={"#"} icon={<Chat />} />
          {/* prettier-ignory */}
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          {/* prettier-ignory */}
          <MenuContainer link={"#"} icon={<Favorite />} />
          {/* prettier-ignory */}
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          {/* prettier-ignory */}
          <MenuContainer link={"#"} icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
