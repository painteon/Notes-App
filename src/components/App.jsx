import React, {useState} from 'react';
import Header from './header.jsx';
import CreateNote from './CreateNote.jsx';
import Footer from './footer.jsx';
import Note from './Note.jsx';

function App() {
  let [notesArray, setNotesArray] = useState([]);

  function addNote(notes) {
    return setNotesArray((prev) => {
      return [
        ...prev,
        notes
      ]
    })
  }
  function remove (id){
    setNotesArray((prev) => {
      return prev.filter((page, index) => {
        return id !== index
      })
    })
  }

  return (<div>
    <Header/>
    <CreateNote add={addNote}/> {
      notesArray.map((page, index) => {
        return <Note
          key={index}
          id={index}
          title={page.title}
          content={page.content}
          collection={notesArray}
          delete={remove}/>
      })
    }
    <Footer/>
  </div>)
}
export default App;
