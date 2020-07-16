import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import es from 'vuetify/es5/locale/es'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#0076BE ',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5A5A',
        info: '#51BFE4',
        success: '#AFD063 ',
        warning: '#FF952D '
      },
    },
  },
});
