import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserdata = <h3 className="text-gray-300">loading...</h3>;
  if (userData.length > 0) {
    printUserdata = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className=" bg-black h-full lg:h-screen text-white p-5 ">
      <h1 className="flex justify-center   flex-wrap gap-4 ">
        {printUserdata}
      </h1>
      <div className="flex justify-center items-center gap-3 mt-5 ">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className="bg-amber-400 px-6 py-2 font-bold text-xl rounded-lg active:scale-97 cursor-pointer text-black  "
        >
          Prev
        </button>
        <h3 className="text-lg font-bold "> Page{index} </h3>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="bg-amber-400 px-6 py-2 font-bold text-xl rounded-lg active:scale-97 cursor-pointer text-black  "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
