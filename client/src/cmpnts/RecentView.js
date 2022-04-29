import React from 'react';

function RecentView({reCards}) {
    
    const showReCard = reCards.map(n =>{
        return(
            <div nukey={n.id}>
                <img className='img' src={n.image} alt={n.id}/>
                <p>Owner: {n.owner}</p>
                <p>Notes: {n.notes}</p>
            </div>
        )
    })

    return (
      <div className="CardView">
        <div>{showReCard}</div>
      </div>
    );
  }
  
  export default RecentView;