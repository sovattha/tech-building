import React from 'react';
import { ChipField, Create, Datagrid, Edit, EmailField, List, PasswordInput, ReferenceArrayField, ReferenceArrayInput, required, SelectArrayInput, SimpleForm, SingleFieldList, TextField, TextInput } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceArrayField label="Groupes" reference="userGroups" source="userGroups">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <EmailField source="email" />
            <TextField source="phone" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" validate={[required()]} disabled />
            <TextInput source="name" validate={[required()]} />
            <PasswordInput source="password" validate={[required()]} />
            <ReferenceArrayInput reference="userGroups" source="userGroups" validate={[required()]}>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <TextInput source="email" validate={[required()]} />
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
            <TextInput source="name" validate={[required()]} />
            <PasswordInput source="password" validate={[required()]} />
            <ReferenceArrayInput reference="userGroups" source="userGroups" validate={[required()]}>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <TextInput source="email" validate={[required()]} />
            <TextInput source="address.street" />
            <TextInput source="mobile" />
            <TextInput source="phone" />
            <TextInput source="fax" />
        </SimpleForm>
    </Create>
);