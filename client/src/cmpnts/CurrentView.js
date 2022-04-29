import React from 'react';

function CurrentView({cuCards}) {
    
    const showCuCard = cuCards.map(c =>{
        return(
            <div cukey={c.id}>
                <img className='img' src={c.image} alt={c.id}/>
                <p>Owner: {c.owner}</p>
                <p>Notes: {c.notes}</p>
            </div>
        )
    })

    return (
      <div className="CardView">
        <div>{showCuCard}</div>
      </div>
    );
  }
  
  export default CurrentView;