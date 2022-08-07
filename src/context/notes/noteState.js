import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62d96dd852eaa2d0681c400a",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T15:16:40.629Z",
      __v: 0,
    },
    {
      _id: "62d979ac031c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac032c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac033c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac034c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac035c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac036c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac037c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac038c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
    {
      _id: "62d979ac039c5d70f0bb6b69",
      title: "my title",
      description: "plz wake up early",
      tag: "personal",
      Date: "2022-07-21T16:07:08.671Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
