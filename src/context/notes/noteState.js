import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62d96dd852eaa2d01681c400a",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T15:16:40.629Z",
      __v: 0,
    },
    {
      _id: "62d9792ac031c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac0432c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac033c5d705f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac034c5d70f60bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac035c5d70f70bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac036c5d70f70bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac037c5d870f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979a8c038c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac039c5d70f90bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  //Add a note
  const addNote = (title, description, tag) => {
    //TODO: API call
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
  //delete a note
  const deleteNote = () => {};
  //Edit a note
  const editNote = () => {};
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, setNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
