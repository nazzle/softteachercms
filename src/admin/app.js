import LOGO from './extensions/img/st-blue.png'
import MENULOGO from './extensions/img/st-bluec.png'
import FAVICON from './extensions/img/favicon_io/favicon.ico'
const config = {
  locales: ['en', 'sw'],
  auth: {logo: LOGO},
  menu: {logo: MENULOGO},
  head: {
    favicon: FAVICON,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
