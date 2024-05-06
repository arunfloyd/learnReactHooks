import React, { useEffect, useState } from "react";
import axios from "axios";
const DataFetching = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Click To Change
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {post.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataFetching;
