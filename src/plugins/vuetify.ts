// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
  // default special colors in light and dark mode
  theme: {
    themes: {
      light: {
        colors: {
          alarmColor: '#df1b1b',
          preAlarmColor: '#f69400',
          faultColor: '#fad900',
          normalColor: '#228722',
        },
        // other colors...
      },
      dark: {
        colors: {
          alarmColor: '#ac1515',
          preAlarmColor: '#a16100',
          faultColor: '#968200',
          normalColor: '#0c5900',
        },
      },
    },
  },
});
