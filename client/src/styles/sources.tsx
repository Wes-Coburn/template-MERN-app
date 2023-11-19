type CrossOrigin = 'anonymous' | 'use-credentials' | '' | undefined;

type Link = {
  rel: 'preconnect' | 'stylesheet';
  href: string;
  crossOrigin?: CrossOrigin;
};

/** Used in <Heading /> to generate links to critical style resources */
const LINKS: Array<Link> = [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap',
  },
];

export default LINKS;
