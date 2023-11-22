/* eslint-disable import/no-absolute-path */
import favIcon from '/logo.svg';
import screenshot1 from '/screenshot1.png';

const ASSETS = {
  images: {
    logos: {
      favIcon: {
        src: favIcon,
        alt: 'app logo',
      },
    },
    screenshots: {
      first: {
        src: screenshot1,
        alt: 'screenshot 1',
      },
    },
  },
};

export default ASSETS;
