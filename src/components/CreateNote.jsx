import React, {useState} from 'react';

function CreateNote(props) {
  let [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  let [notesArray, setNotesArray] = useState([])

  function handlechange(event) {
    let {name, value} = event.target;
    setNewNote((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function submit(event){
    event.preventDefault();
    props.add(newNote);
    setNewNote({
      title: "",
      content: ""
    });
  }

  return(
    <div>
      <form>
        <input onChange={handlechange} value= {newNote.title} name= "title" placeholder= "Title" />
        <textarea onChange={handlechange} value= {newNote.content} name="content" placeholder= "Content" />
        <button onClick= {submit}>Add</button>
      </form>
    </div>
  )

}

export default CreateNote;
