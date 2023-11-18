export const isMobileDevice = () => {
  const { host } = window.location;
  const parts = host.split('.');
  return parts[0] === 'm';
};

export default function responsive() {
  const mobileDomain = 'm';
  const mobileQuery = '(max-width: 500px)';

  const { host, protocol } = window.location;
  const parts = host.split('.');

  type Device = 'desktop' | 'mobile';

  const switchDevice = (device: Device) => {
    let newURI = `${protocol}//`;
    switch (device) {
      case 'desktop':
        newURI += parts[1];
        break;
      case 'mobile':
        newURI += `${mobileDomain}.${parts[0]}`;
        break;
      default:
        break;
    }
    window.location.replace(encodeURI(`${newURI}${window.location.pathname}`));
  };

  const handler = (event: MediaQueryListEvent) => {
    switchDevice(event.matches ? 'mobile' : 'desktop');
  };

  window.matchMedia(mobileQuery).addEventListener('change', handler);
}
