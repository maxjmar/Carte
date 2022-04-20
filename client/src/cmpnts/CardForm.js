import React from 'react';

function CardForm() {
    return (
      <div className="CardForm">
        <form>
        <p>Add Business Card</p>
        <input type="file" accept="image/*" name="file"></input>
        <input type='text' name='Owner' placeholder="Enter Owner's Name"/>
        <textarea type='text' name='notes' placeholder="Notes"/>
        <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
  
  export default CardForm;