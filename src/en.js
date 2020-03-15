module.exports = {
    ra: {
        dashboard: 'Dashboard'
    },
    dashboard: {
        welcome: 'Welcome',
    },
    localeSwitcher: {
        chooseLanguage: 'Choose your language',
    },
    user: {
        list: {
            search: 'Search',
        }
    },
    resources: {
        users: {
            name: 'User |||| Users',
            fields: {
                id: 'Identifier',
                name: 'Name',
                password: 'Password',
                email: 'Email address',
                address: {
                    street: 'Address'
                },
                mobile: 'Mobile phone',
                phone: 'Landline phone',
                fax: 'Fax',
                userGroups: 'Groups',
            }
        },
        workTimes: {
            name: 'Hours worked',
            fields: {
                id: 'Identifier',
                userId: 'User',
                workName: 'Site',
                analyticReference: 'Analytical reference',
                date: 'Date',
                activityId: 'Activity',
                workHours: 'Hours worked',
                projectManagers: 'Project managers',
            }
        },
        activities: {
            name: 'Activities',
            fields: {
                id: 'Identifier',
                name: 'Name',
            }
        },
        userGroups: {
            name: 'User groups',
            fields: {
                id: 'Identifier',
                name: 'Name',
            }
        }
    }
};