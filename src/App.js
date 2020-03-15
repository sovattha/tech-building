import WorktimeIcon from '@material-ui/icons/AccessAlarm';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import frenchMessages from 'ra-language-french';
import React from 'react';
import { Admin, fetchUtils, Resource, EditGuesser } from 'react-admin';
import { ActivityList } from './activities';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import englishMessagesCustom from './en';
import frenchMessagesCustom from './fr';
import theme from './theme';
import { UserCreate, UserEdit, UserList } from './users';
import { UserGroupList, UserGroupEdit, UserGroupCreate } from './user-groups';
import { WorktimeCreate, WorktimeEdit, WorktimeList } from './work-times';

const messages = {
    fr: {...frenchMessages, ...frenchMessagesCustom},
    en: {...englishMessages, ...englishMessagesCustom},
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'fr');

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const App = () => (
    <Admin
        locale="fr"
        theme={theme}
        dataProvider={jsonServerProvider(
            'http://localhost:3001',
            httpClient
        )}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
    >
        {permissions => [
            <Resource
                name="workTimes"
                list={WorktimeList}
                edit={WorktimeEdit}
                create={WorktimeCreate}
                icon={WorktimeIcon}
            />,
            <Resource
                name="users"
                icon={UserIcon}
                list={UserList}
                edit={permissions === 'admin' ? UserEdit : null}
                create={permissions === 'admin' ? UserCreate : null}
            />,
            <Resource
                name="activities"
                list={permissions === 'admin' ? ActivityList : null}
                edit={permissions === 'admin' ? EditGuesser : null}
                create={permissions === 'admin' ? EditGuesser : null}
            />,
            <Resource
                name="userGroups"
                list={permissions === 'admin' ? UserGroupList : null}
                edit={permissions === 'admin' ? UserGroupEdit : null}
                create={permissions === 'admin' ? UserGroupCreate : null}
            />,
        ]}
    </Admin>
);
export default App;
