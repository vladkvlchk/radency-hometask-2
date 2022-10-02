import React from "react";
import { Provider } from "react-redux";
import { store } from "./../redux/store";

import "./../App.css";
import Item from "./Item";
import { ForArchive, ForMain, ForSummary } from "./items";
import quoteUrl from "../assets/quote.svg";
import randomThoughtUrl from "../assets/randomThought.svg";

export default {
  title: "Examples/Item",
  component: Item,
};

export const MainItem = (args) => (
  <Provider store={store}>
    <ForMain {...args} />
  </Provider>
);

MainItem.args = {
  imageUrl: randomThoughtUrl,
  id: 3,
  name: "Cats",
  category: "Random Thought",
  created: "4/4/2022",
  content: "I love cats",
  dates: [],
};

export const SummaryItem = (args) => <ForSummary {...args} />;

SummaryItem.args = {
  imageUrl: quoteUrl,
  name: "Quote",
  active: 4,
  archived: 0,
};

export const ArchiveItem = (args) => (
  <Provider store={store}>
    <ForArchive {...args} />
  </Provider>
);

ArchiveItem.args = {
  imageUrl: randomThoughtUrl,
  id: 3,
  name: "Cats",
  category: "Random Thought",
  created: "4/4/2022",
  content: "I love cats",
  dates: [],
};
