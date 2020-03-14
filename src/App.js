import WorktimeIcon from '@material-ui/icons/AccessAlarm';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ActivityList } from './activities';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import { UserList } from './users';
import { WorktimeCreate, WorktimeEdit, WorktimeList } from './work-times';

const App = () => (
    <Admin
        dataProvider={jsonServerProvider(
            'http://localhost:3001'
        )}
        authProvider={authProvider}
        dashboard={Dashboard}
    >
        <Resource name="users" icon={UserIcon} list={UserList} />
        <Resource name="activities" list={ActivityList} />
        <Resource name="worktimes" list={WorktimeList} edit={WorktimeEdit} create={WorktimeCreate} icon={WorktimeIcon} />
    </Admin>
);
export default App;
