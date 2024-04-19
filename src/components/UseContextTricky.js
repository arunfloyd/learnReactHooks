import React, { useContext } from "react";

import { UserContext, LevelContext } from "../App";

const UseContextTricky = () => {
  const user = useContext(UserContext);
  const level = useContext(LevelContext);
  return (
    <div>
      <h2>
        {user} - {level}
      </h2>
    </div>
  );
};

export default UseContextTricky;
