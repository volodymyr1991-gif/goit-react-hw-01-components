import React from "react";
// import Profile from "./Prifile"
import user from "../user.json"
import Profile from "./profile"
// import statistical from "../statistical-data.json";
// import Panel from "./section";
// import Statistic from "./statistic";

// console.log(user.name);
export default function App() {
  return (
    <>
     

     <Profile
     name={user.name}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     />
     {/* <Profile stats={user.stats}/>  */}
    {/* завдання номер 2 */}
      {/* <Panel title="Upload stats">
         <Statistic statistic={statistical} />
      </Panel> */}
    </>
  );
}

