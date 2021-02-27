import React from "react";
import Mains from "../Mains";
import Extras from "../Extras";
import './Menu.css'
import { Provider } from "../Context"
import { mains, sides, drinks } from "./data.json";


export default function App() {
  return (
    
    <Provider>
      <h2 className="h2-title">Menu</h2>
      <div className="menu">
        <Mains meals={mains} />
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
      
      </div>
    </Provider>
  );
}
