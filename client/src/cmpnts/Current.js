import React, {useState, useEffect} from 'react';
import CurrentForm from "./CurrentForm"
import CurrentView from "./CurrentView"

function Current({authUser}) {
  const [cuCards, setCuCards] = useState([])
  
  useEffect(()=>{
    fetch('/categories/3/cards')
    .then(r=>r.json())
    .then(
    function (handleCuCards){
      if (handleCuCards.errors){
        console.log('notLoggedIn')
      } else {
        setCuCards(handleCuCards)
      }
    })
  }, [])
    return (
      <div className="Cat">
          <div>Current Co-Workers</div>
          <div>
              <CurrentForm authUser={authUser} cuCards={cuCards} setCuCards={setCuCards}/>
          </div>
          <div>
              <CurrentView authUser={authUser} cuCards={cuCards} setCuCards={setCuCards}/>
          </div>
      </div>
    );
  }
  
  export default Current;