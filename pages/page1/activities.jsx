import { useState } from "react";

const url = "http://localhost:8000/api/figures/figure/"
const activities = () => {

  const [data, setData] = useState({});
  const handleOnclick = async () => {
    console.log('heads')
    const res = await fetch(url,{method:'GET'})
    const myData = await res.json()
    // console.log(myData)
    setData(myData)
  }

  return (
    <div>
      <button onClick={() => handleOnclick()}>Fetch</button>{" "}
      {JSON.stringify(data)}
    </div>
  );
};

export default activities;
