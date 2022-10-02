import React from "react";
import { Provider } from "react-redux";
import { store } from "./../../redux/store";

import './../../App.css'
import NewNoteModal from "./NewNoteModal";
import EditModal from "./EditModal";

export default {
  title: "Examples/Modal",
  component: NewNoteModal
};

export const NewNote = (args) => (
  <Provider store={store}>
    <NewNoteModal {...args} />
  </Provider>
);

NewNote.args = {
  isOpen: true,
};

export const Edit = (args) => (
  <Provider store={store}>
    <EditModal {...args} />
  </Provider>
)

Edit.args = {
  isOpen: true,
  note: {
      id: 432,
      name: 'About cats',
      created: 4/4/2022,
      category: 'Random Thought',
        content: 'I love cats',
        dates: []
    }
}