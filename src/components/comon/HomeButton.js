import { Button } from "@material-ui/core";
import HomeButtonSvg from '../../assets/icons/Home.svg'
import BackButtonSvg from "../../assets/icons/Back.svg";

function HomeButton() {
  return (
    <div style={{ marginTop: 18 }}>
      <a href="/">
        <img
          width={70}
          height={35}
          src={HomeButtonSvg}
          alt=""
          className="imgHomeLogo"
        ></img>
      </a>
      <img width={70} height={35} src={BackButtonSvg} alt=""></img>
    </div>
  );
}

export default HomeButton;
