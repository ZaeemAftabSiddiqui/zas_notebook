import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //Add a note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkN2M4MTU2NjQzZDA1MmFmZDg2ODMwIn0sImlhdCI6MTY1ODMwODYyOX0.TpgQJSyBlE0H61JZKTP86DjNw1PpeyIUfee7GRAu-DA",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    console.log("Adding new note");
    const note = {
      _id: "62d979ac039c5d70f90bb6b69",
      title: title,
      description: description,
      tag: tag,
      " Date": "2022-07-21T16:07:08.671Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Get all notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkN2M4MTU2NjQzZDA1MmFmZDg2ODMwIn0sImlhdCI6MTY1ODMwODYyOX0.TpgQJSyBlE0H61JZKTP86DjNw1PpeyIUfee7GRAu-DA",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //delete a note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkN2M4MTU2NjQzZDA1MmFmZDg2ODMwIn0sImlhdCI6MTY1ODMwODYyOX0.TpgQJSyBlE0H61JZKTP86DjNw1PpeyIUfee7GRAu-DA",
      },
    });
    const json = response.json();
    console.log(json);
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkN2M4MTU2NjQzZDA1MmFmZDg2ODMwIn0sImlhdCI6MTY1ODMwODYyOX0.TpgQJSyBlE0H61JZKTP86DjNw1PpeyIUfee7GRAu-DA",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    console.log(notes);
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, setNotes, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
