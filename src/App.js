import ExtraTimeIcon from '@material-ui/icons/AlarmAdd';
import VacationIcon from '@material-ui/icons/BeachAccess';
import ExpensesIcon from '@material-ui/icons/Euro';
import UserIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import WorktimeIcon from '@material-ui/icons/Timer';
import { createBrowserHistory as createHistory } from 'history';
import jsonServerProvider from 'ra-data-json-server';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import frenchMessages from 'ra-language-french';
import React from 'react';
import { Admin, EditGuesser, fetchUtils, ListGuesser, Resource, Login } from 'react-admin';
import { ActivityList } from './activities';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import englishMessagesCustom from './en';
import frenchMessagesCustom from './fr';
import theme from './theme';
import { UserGroupCreate, UserGroupEdit, UserGroupList } from './user-groups';
import { UserCreate, UserEdit, UserList } from './users';
import { WorktimeCreate, WorktimeEdit, WorktimeList } from './work-times';
const history = createHistory();

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

const MyLoginPage = () => (
    <Login
        // A random image that changes everyday
        backgroundImage="https://source.unsplash.com/1600x900/?construction"
    />
);

const App = () => (
    <Admin
        loginPage={MyLoginPage}
        history={history}
        title='Tech building'
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
            <Resource name="extraTime" list={ListGuesser} icon={ExtraTimeIcon} />,
            <Resource name="expenses" list={ListGuesser} icon={ExpensesIcon} />,
            <Resource name="vacationRequests" list={ListGuesser} icon={VacationIcon} />,
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
                icon={SettingsIcon}
            />,
            <Resource
                name="userGroups"
                list={permissions === 'admin' ? UserGroupList : null}
                edit={permissions === 'admin' ? UserGroupEdit : null}
                create={permissions === 'admin' ? UserGroupCreate : null}
                icon={SettingsIcon}
            />,
        ]}
    </Admin>
);
export default App;
