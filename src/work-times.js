import React from 'react';
import { ChipField, Create, Datagrid, DateField, DateInput, Edit, List, NumberField, NumberInput, ReferenceArrayField, ReferenceArrayInput, ReferenceField, ReferenceInput, SelectArrayInput, SelectInput, SimpleForm, SingleFieldList, TextField, TextInput } from 'react-admin';

export const WorktimeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="date" />
            <NumberField source="workHours" />
            <ReferenceArrayField label="Chef de projet" reference="users" source="projectManagers">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <NumberField source="analyticReference" />
            <TextField source="workName" />
            <ReferenceField label="Activité" reference="activities" source="activityId">
                <TextField source="title" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const WorktimeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateInput source="date" />
            <NumberInput source="workHours" />
            <ReferenceArrayInput label="Project managers" reference="users" source="projectManagers">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="analyticReference" />
            <ReferenceInput label="Activité" source="activityId" reference="activities">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="workName" />
        </SimpleForm>
    </Edit>
);

export const WorktimeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DateInput source="date" />
            <NumberInput source="workHours" />
            <ReferenceArrayInput label="Project managers" reference="users" source="projectManagers">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="analyticReference" />
            <ReferenceInput label="Activité" source="activityId" reference="activities">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="workName" />
        </SimpleForm>
    </Create>
);

