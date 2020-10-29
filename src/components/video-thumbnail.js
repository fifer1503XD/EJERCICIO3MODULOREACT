import React from "react";
export default function VideoThumbnail(props) {
  console.log(typeof props.image)
  return (
   
    <div className="thumbnail">
      <img src={props.image}></img>
    </div>
  );
}
