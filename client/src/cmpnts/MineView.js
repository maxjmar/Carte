import React from 'react';

function MineView({myCards}) {
    
    const showMyCard = myCards.map(m =>{
        return(
            <div key={m.id}>
                <img className='img' src={m.image} alt={m.id}/>
                <p>Owner: {m.owner}</p>
                <p>Notes: {m.notes}</p>
            </div>
        )
    })

    return (
      <div className="CardView">
        <div>{showMyCard}</div>
      </div>
    );
  }
  
  export default MineView;