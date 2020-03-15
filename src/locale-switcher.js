import Button from '@material-ui/core/Button';
import React from 'react';
import { useSetLocale, useTranslate } from 'react-admin';

const LocaleSwitcher = () => {
    const translate = useTranslate();
    const setLocale = useSetLocale();
    return (
        <div>
            <h3>{translate('localeSwitcher.chooseLanguage')}</h3>
            <div>
                <Button variant="contained" color="primary" onClick={() => setLocale('en')}>English</Button>
                &nbsp;
                <Button variant="contained" color="primary" onClick={() => setLocale('fr')}>Français</Button>
            </div>
        </div>
    );
};

export default LocaleSwitcher;