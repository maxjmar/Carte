import React, {useState, useEffect} from 'react';
import MineForm from "./MineForm"
import MineView from "./MineView"

function Mine({authUser}) {
  const [myCards, setMyCards] = useState([])

  useEffect(()=>{
    fetch('/categories/1/cards')
    .then(r=>r.json())
    .then(setMyCards)
  }, [])
    return (
      <div className="Cat">
        <div>My Cards</div>
          <div>
            <div>
                <MineForm authUser={authUser} myCards={myCards} setMyCards={setMyCards}/>
            </div>
            <div>
                <MineView authUser={authUser} myCards={myCards} setMyCards={setMyCards}/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Mine;