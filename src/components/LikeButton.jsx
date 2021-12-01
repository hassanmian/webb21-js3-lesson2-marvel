import React, {useState} from "react";

export default function LikeButton({name}) {
  const [like, setLike] = useState(0)
  
  function handleOnClick() {
    setLike(like + 1)
  }
  return (
    <button className="btn btn-primary" onClick={handleOnClick}>
      Like {name} ({like})
    </button>
  );
}
