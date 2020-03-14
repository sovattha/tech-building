import React from 'react';
import { Create, Edit, SimpleForm, TextInput, List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="password" />
            <TextInput source="groups" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="mobile" />
            <TextInput source="phone" />
            <TextInput source="fax" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" allowEmpty />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="password" />
            <TextInput source="groups" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="mobile" />
            <TextInput source="phone" />
            <TextInput source="fax" />
        </SimpleForm>
    </Create>
);