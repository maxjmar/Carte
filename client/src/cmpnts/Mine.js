import React, {useState, useEffect} from 'react';
import MineForm from "./MineForm"
import MineView from "./MineView"

function Mine({authUser}) {
  
  const [myCards, setMyCards] = useState([])
  console.log(myCards)

  useEffect(()=>{
    fetch('/categories/1/cards')
    .then(r=>r.json())
    .then(
      // setMyCards
      function (handleMyCards){
        if (handleMyCards.errors){
          console.log('notLoggedIn')
        } else {
          setMyCards(handleMyCards)
        }
      }
      )
  }, [])
  if (authUser){
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
  } else
    return (
      <div>Test</div>
    );
  }
  
  export default Mine;