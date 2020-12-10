import React from "react";
import user from "../user.json"
import Profile from "./profile"
import statistical from "../statistical-data.json";
import Panel from "./section";
import Statistic from "./statistic";
import FrendList from "./frendList"
import friends from "../friends.json"
import TansactionHistiry from "./TransactionHistory "
import transaction from "../transaction.json"


export default function App() {
  return (
    <>
     
{/* ЗАВДАННЯ НОМЕР ОДИН */}
     <Profile
     name={user.name}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     />
   
    {/* завдання номер 2 */}
      <Panel title="Upload stats">
         <Statistic statistic={statistical} />
      </Panel>

      {/* ЗАВДАННЯ НОМЕР 3 */}
      <FrendList frends={friends}/>

      {/* ЗАВДАННЯ НОМЕР 4 */}
<TansactionHistiry transaction={transaction}/>
    </>
  );
}

