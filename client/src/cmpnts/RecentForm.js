import React, {useState} from 'react';

function RecentForm({authUser,reCards,setReCards}) {
  const [reFile, setReFile] = useState("")
  const [reOwner, setReOwner] = useState("")
  const [reNotes, setReNotes] = useState("") 
  
  function handleReFile(e){
    setReFile(e.target.files[0])
  }
  function handleReOwner(e){
    setReOwner(e.target.value)
  }
  function handleReNotes(e){
    setReNotes(e.target.value)
  }

  function handleReSubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', reFile)
    formData.append('owner', reOwner)
    formData.append('notes', reNotes)
    formData.append('user_id', authUser.id)
    // formData.append('category_id', reCards )

    fetch('/categories/2/cards',{
        method:'POST',
        // headers:{'Content-Type': 'application/json'},
        body: formData
        })
        .then(r => r.json())
        .then(data => setReCards([...reCards, data]))
        setReFile('')
        setReOwner('')
        setReNotes('')
    }

    return (
      <div className="CardForm">
        <form>
        <p>Add Business Card</p>
        <input onChange={handleReFile} type="file" accept="image/*" name="file"></input>
        <input onChange={handleReOwner} type='text' name='Owner' placeholder="Enter Owner's Name"/>
        <textarea onChange={handleReNotes} type='text' name='notes' placeholder="Notes"/>
        <input onClick={(e) => handleReSubmit(e)} type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
  
  export default RecentForm;