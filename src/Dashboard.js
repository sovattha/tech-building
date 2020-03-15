import { CardHeader } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import { Title, useTranslate } from 'react-admin';
import LocaleSwitcher from './locale-switcher';

export default ({ permissions }) => {
    const translate = useTranslate();
    return <Card>
        <Title title={translate('ra.page.dashboard')} />
        <CardHeader title={`${translate('dashboard.welcome')} ${localStorage.getItem('username')}`}></CardHeader>
        <CardContent>
            <LocaleSwitcher />
        </CardContent>
        {permissions === 'admin'
            ? <CardContent></CardContent>
            : null
        }
    </Card>;
};