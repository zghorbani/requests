import { useState } from "react";
import AComp from "./components/AComp";
import CComp from "./components/CComp";
import { MyProvider } from "./utility/Provider";

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
          <AComp />
          <div className=" w-1/2">
            <button onClick={handleRefetch} className=" mb-2 border w-fit border-gray-500 p-2 rounded-md bg-gray-200">Fetch same Data</button>
            {show && <CComp />}
          </div>
        </div>
      </div>
    </MyProvider>
  );
}

export default App;
