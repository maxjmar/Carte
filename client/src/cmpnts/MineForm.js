import React, {useState} from 'react';

function MineForm({authUser,myCards,setMyCards}) {
  const [myFile, setMyFile] = useState("")
  const [myOwner, setMyOwner] = useState("")
  const [myNotes, setMyNotes] = useState("") 
  
  function handleMyFile(e){
    setMyFile(e.target.files[0])
  }
  function handleMyOwner(e){
    setMyOwner(e.target.value)
  }
  function handleMyNotes(e){
    setMyNotes(e.target.value)
  }

  function handleMySubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', myFile)
    formData.append('owner', myOwner)
    formData.append('notes', myNotes)
    formData.append('user_id', authUser.id)
    // formData.append('category_id', myCards )

    fetch('/categories/1/cards',{
        method:'POST',
        // headers:{'Content-Type': 'application/json'},
        body: formData
        })
        .then(r => r.json())
        .then(data => setMyCards([...myCards, data]))
        setMyFile('')
        setMyOwner('')
        setMyNotes('')
    }

    return (
      <div className="CardForm">
        <form>
        <p>Add Business Card</p>
        <input onChange={handleMyFile} type="file" accept="image/*" name="file"></input>
        <input onChange={handleMyOwner} type='text' name='Owner' placeholder="Enter Owner's Name"/>
        <textarea onChange={handleMyNotes} type='text' name='notes' placeholder="Notes"/>
        <input onClick={(e) => handleMySubmit(e)} type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
  
  export default MineForm;