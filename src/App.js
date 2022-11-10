import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect } from "react";
import "./App.css";
import BannerName from "./Components/BannerName";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";

function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

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
