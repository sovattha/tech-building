import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

export const ActivityList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);