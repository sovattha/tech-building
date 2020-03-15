import React from 'react';
import { required, Filter, ChipField, Create, Datagrid, DateField, DateInput, Edit, List, NumberField, NumberInput, ReferenceArrayField, ReferenceArrayInput, ReferenceField, ReferenceInput, SelectArrayInput, SelectInput, SimpleForm, SingleFieldList, TextField, TextInput } from 'react-admin';

const UserFilter = ({ permissions, ...props }) =>
    <Filter {...props}>
        <TextInput
            label="user.list.search"
            source="q"
            alwaysOn
        />
        <ReferenceInput  source="activityId" reference="activities" validate={[required()]}>
            <SelectInput optionText="name" />
        </ReferenceInput>
        {permissions === 'admin' ? <TextInput source="analyticReference" /> : null}
    </Filter>;

export const WorktimeList = ({ permissions, ...props }) => (
    <List {...props}
    filters={<UserFilter permissions={permissions} {...props} />}
    sort={{ field: 'name', order: 'ASC' }}>
        <Datagrid rowClick="edit">
            {permissions === 'admin' && <TextField source="id" />}
            <TextField source="workName" />
            <ReferenceField reference="activities" source="activityId" link={false}>
                <TextField source="name" />
            </ReferenceField>
            <TextField source="analyticReference" />
            <ReferenceArrayField reference="users" source="projectManagers">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <DateField source="date" locales="fr-FR" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
            <NumberField source="workHours" />
        </Datagrid>
    </List>
);

const defaultValue = {
    userId: localStorage.getItem('username'),
    workName: 'test'
};
export const WorktimeEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <SimpleForm initialValues={defaultValue}>
            {permissions === 'admin' && <TextInput disabled source="id" />}
            <ReferenceInput source="userId" reference="users" disabled>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="workName" validate={[required()]} />
            <TextInput source="analyticReference" validate={[required()]} />
            <DateInput source="date" validate={[required()]} />
            <ReferenceInput  source="activityId" reference="activities" validate={[required()]}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="workHours" validate={[required()]} />
            <ReferenceArrayInput reference="users" source="projectManagers" validate={[required()]}>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export const WorktimeCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm initialValues={defaultValue}>
            <ReferenceInput source="userId" reference="users" disabled={permissions !== 'admin'}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="workName" validate={[required()]} />
            <TextInput source="analyticReference" validate={[required()]} />
            <DateInput source="date" validate={[required()]} />
            <ReferenceInput  source="activityId" reference="activities" validate={[required()]}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="workHours" validate={[required()]} />
            <ReferenceArrayInput reference="users" source="projectManagers" validate={[required()]}>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);

