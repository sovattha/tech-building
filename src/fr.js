module.exports = {
    dashboard: {
        welcome: 'Bienvenue',
    },
    localeSwitcher: {
        chooseLanguage: 'Choisissez votre langue',
    },
    user: {
        list: {
            search: 'Rechercher',
        }
    },
    resources: {
        extraTime: {
            name: 'Heures supplémentaires',
        },
        expenses: {
            name: 'Note de frais',
        },
        vacationRequests: {
            name: 'Demande de congés',
        },
        users: {
            name: 'Utilisateur |||| Utilisateurs',
            fields: {
                id: 'Identifiant',
                name: 'Nom',
                password: 'Mot de passe',
                email: 'Adresse e-mail',
                address: {
                    street: 'Adresse'
                },
                mobile: 'Téléphone mobile',
                phone: 'Téléphone fixe',
                fax: 'Fax',
                userGroups: 'Groupes',
            }
        },
        workTimes: {
            name: 'Heures travaillées',
            fields: {
                id: 'Identifiant',
                userId: 'Utilisateur',
                workName: 'Chantier',
                analyticReference: 'Référence analytique',
                date: 'Date',
                activityId: 'Activité',
                workHours: 'Heures travaillées',
                projectManagers: 'Chefs de projets',
            }
        },
        activities: {
            name: 'Activités',
            fields: {
                id: 'Identifiant',
                name: 'Nom',
            }
        },
        userGroups: {
            name: 'Groupes d\'utilisateur',
            fields: {
                id: 'Identifiant',
                name: 'Nom',
            }
        }
    }
};
