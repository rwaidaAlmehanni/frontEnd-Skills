import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store from './store/store';
import Main from './screens/Main';

const locale = getCurrentLocale();
addLocaleData(en);
let messages;
try {
  messages = require(`./i18n/${locale}`);
} catch (e) {
  messages = require('./i18n/en-US');
}
const localeData = getLocaleData(messages, locale);


export default () => (
  <Provider store={store().store}>
    <PersistGate loading={null} persistor={store().persistor}>
      <IntlProvider locale={localeData.locale} messages={localeData.messages}>
        <Main />
      </IntlProvider>
    </PersistGate>
  </Provider>
);