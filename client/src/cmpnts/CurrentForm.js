import React, {useState} from 'react';

function CurrentForm({authUser,cuCards,setCuCards}) {
  const [cuFile, setCuFile] = useState("")
  const [cuOwner, setCuOwner] = useState("")
  const [cuNotes, setCuNotes] = useState("") 
  
  function handleCuFile(e){
    setCuFile(e.target.files[0])
  }
  function handleCuOwner(e){
    setCuOwner(e.target.value)
  }
  function handleCuNotes(e){
    setCuNotes(e.target.value)
  }

  function handleCuSubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', cuFile)
    formData.append('owner', cuOwner)
    formData.append('notes', cuNotes)
    formData.append('user_id', authUser.id)
    // formData.append('category_id', cuCards )

    fetch('/categories/3/cards',{
        method:'POST',
        // headers:{'Content-Type': 'application/json'},
        body: formData
        })
        .then(r => r.json())
        .then(data => setCuCards([...cuCards, data]))
        setCuFile('')
        setCuOwner('')
        setCuNotes('')
    }

    return (
      <div className="CardForm">
        <form>
        <p>Add Business Card</p>
        <input onChange={handleCuFile} type="file" accept="image/*" name="file"></input>
        <input onChange={handleCuOwner} type='text' name='Owner' placeholder="Enter Owner's Name"/>
        <textarea onChange={handleCuNotes} type='text' name='notes' placeholder="Notes"/>
        <input onClick={(e) => handleCuSubmit(e)} type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
  
  export default CurrentForm;