import React from "react";
//import  '../comon/TouchPad'
function SignInOut(props) {
  return (
    <div className="divSignInOut">
      <span className="spanDescription">{props.name} </span>
      <img width={35} height={35} src={props.icon} alt="" style={{marginTop:-10}}></img>
    </div>
  );
}

export default SignInOut;
