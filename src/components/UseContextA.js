import React from "react";
import { UserContext, LevelContext } from "../App";

const UseContextA = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => (
          <LevelContext.Consumer>
            {(level) => (
              <div>
               <h1> User May Be {user} On the Level of {level}</h1>
              </div>
            )}
          </LevelContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
};

export default UseContextA;
