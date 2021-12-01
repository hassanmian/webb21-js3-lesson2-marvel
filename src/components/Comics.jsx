import React, {useState} from "react";

export default function Comics({comics}) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button 
        onClick={e => setShow(!show)} 
        class="btn btn-secondary">
          {show ? "Hide comics" : "Show comics"}
      </button>
      {show && (
        <ul>
          {comics && comics.map((item, index) => {
            return <p>{item.name}</p>
          })}
        </ul>
      )}
    </div>
  );
}
