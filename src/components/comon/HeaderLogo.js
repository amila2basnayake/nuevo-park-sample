import { Button } from "@material-ui/core";

function HeaderLogo(props) {
  return (
    <div style={{ marginTop: -10 }}>
      <img
        width={200}
        height={100}
        src={props.icon}
        alt=""
        style={{ alignItems: "end" }}
      ></img>
    </div>
  );
}

export default HeaderLogo;
