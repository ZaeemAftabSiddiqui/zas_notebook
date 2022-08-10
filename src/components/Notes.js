import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
      <Addnote />
      <div className="row my-3">
        <h2>your notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
