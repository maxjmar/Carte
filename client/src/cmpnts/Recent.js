import React, {useState, useEffect} from 'react';
import RecentForm from "./RecentForm"
import RecentView from "./RecentView"

function Recent({authUser}) {
  const [reCards, setReCards] = useState([])
  
  useEffect(()=>{
    fetch('/categories/2/cards')
    .then(r=>r.json())
    .then(
      function (handleReCards){
        if (handleReCards.errors){
          console.log('notLoggedIn')
        } else {
          setReCards(handleReCards)
        }
    }
    )
  }, [])
    return (
      <div className="Cat">
          <div>Recently Met</div>
          <div>
              <RecentForm authUser={authUser} reCards={reCards} setReCards={setReCards}/>
          </div>
          <div>
              <RecentView authUser={authUser} reCards={reCards} setReCards={setReCards}/>
          </div>
      </div>
    );
  }
  
  export default Recent;