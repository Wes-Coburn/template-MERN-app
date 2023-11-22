/*
import QUERIES from '../styles/queries';

export const isMobileDomain = () => {
  const { host } = window.location;
  const parts = host.split('.');
  return parts[0] === 'm';
};

export default function responsive() {
  const mobileDomain = 'm';
  type Device = 'desktop' | 'mobile';

  const { host, protocol } = window.location;
  const parts = host.split('.');
  const path = isMobileDomain() ? parts[1] : parts[0];

  const switchDevice = (device: Device) => {
    let newURI = `${protocol}//`;
    switch (device) {
      case 'desktop':
        newURI += path;
        break;
      case 'mobile':
        newURI += `${mobileDomain}.${path}`;
        break;
      default:
        break;
    }
    window.location.replace(encodeURI(`${newURI}${window.location.pathname}`));
  };

  const handler = (event: MediaQueryListEvent) => {
    switchDevice(event.matches ? 'mobile' : 'desktop');
  };

  const mobileWatch = window.matchMedia(QUERIES.mobile);
  mobileWatch.addEventListener('change', handler);

  if (isMobileDomain() !== mobileWatch.matches) {
    switchDevice(mobileWatch.matches ? 'mobile' : 'desktop');
  }
}
*/
