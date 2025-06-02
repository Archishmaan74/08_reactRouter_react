import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Archishmaan74")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className="flex items-center justify-center m-4 bg-gray-600 text-white p-4">
      <span>
        <img
          src={data.avatar_url}
          alt="Git picture"
          className="rounded size-1/2"
        />
      </span>
      <span className="text-1xl mr-6">Github followers: {data.followers}</span>
    </div>
  );
}

export default Github;
