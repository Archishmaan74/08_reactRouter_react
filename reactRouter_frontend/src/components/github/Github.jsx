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
    <div className="flex items-center justify-center m-4 bg-gray-600 text-white p-16 rounded-lg shadow-lg gap-6">
      <div>
        <img
          src={data.avatar_url}
          alt="Git picture"
          className="rounded-full w-56 h-56 object-cover"
        />
      </div>
      <div className="text-lg flex flex-col gap-1">
        <div>
          <strong>Name:</strong> {data.name}
        </div>
        <div>
          <strong>Github followers:</strong> {data.followers}
        </div>
        <div>
          <strong>Company:</strong> {data.company}
        </div>
        <div>
          <strong>Location:</strong> {data.location}
        </div>
      </div>
    </div>
  );
}

export default Github;
