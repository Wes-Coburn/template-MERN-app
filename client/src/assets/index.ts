/* eslint-disable import/no-absolute-path */
import favIcon from '/assets/logo.svg';
import screenshot1 from '/assets/screenshot1.png';

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
