import React, { useState } from "react";
import { MyProvider } from "./utility/Provider";
import FetchFirst from "./components/FetchFirst";
import FetchSame from "./components/FetchSame";

function App() {
  const [show, setShow] = useState(false)

  const handleRefetch = () => {
    setShow(true)
  }

  return (
    <MyProvider>
      <div className="flex flex-col container my-2">
        <p className="my-3">Posts</p>
        <div className="flex justify-between gap-2">
          <FetchFirst />
          <div className=" w-1/2">
            <button onClick={handleRefetch} className=" mb-2 border w-fit border-gray-500 p-2 rounded-md bg-gray-200">Fetch same Data</button>
            {show && <FetchSame />}
          </div>
        </div>
      </div>
    </MyProvider>
  );
}

export default App;
