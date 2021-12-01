import React, {useState, useEffect} from "react";

export default function Pet() {
  const [pet, setPet] = useState(null)
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    fetch("https://aws.random.cat/meow")
    .then(res => res.json())
    .then(data => setPet(data.file))
  }, [])

  function handleOnClick() {
    setShow(!show)
  }

  return (
    <>
      <button 
        className="btn btn-secondary" 
        onClick={handleOnClick}>
          {show ? "Hide Pet": "Show Pet" }
      </button> 
      {show && (
        <img className="img-fluid" src={pet} alt="The heroes pet" />
      )}
    </>
  );
}
