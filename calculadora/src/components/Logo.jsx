import React from "react";

function Logo(props) {
  return (
    <img  
    src={require(`../images/${props.imagen}`)}
    className={props.clase}
    alt={props.alt} />
  );
}

export default Logo;