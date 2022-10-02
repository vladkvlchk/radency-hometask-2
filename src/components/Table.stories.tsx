import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import Table from './Table';

export default {
    title: "Examples/Table",
    component: Table,
  };

export const MainTable = (args) => (
    <Provider store={store}>
        <Table {...args} />
    </Provider>
)

MainTable.args = {
    type: 'main'
}

export const SummaryTable = () => (
    <Provider store={store}>
        <Table type='summary' />
    </Provider>
)

export const ArchiveTable = () => (
    <Provider store={store}>
        <Table type='archive' />
    </Provider>
)