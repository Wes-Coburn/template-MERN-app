import { Helmet } from 'react-helmet-async';
import { CANONICAL } from '../../app/routes';
// import QUERIES from '../../styles/queries';
import LINKS from '../../styles/sources';
import ASSETS from '../../assets';
import * as appInfo from '../../../appInfo.json';

type Props = {
  pageURL: string;
  pageTitle?: string;
  appDescription?: string;
  themeColor?: string;
  iconUrl?: string;
  iconAlt?: string;
};

export default function Heading({
  pageURL,
  pageTitle,
  appDescription,
  themeColor,
  iconUrl,
  iconAlt,
}: Props) {
  return (
    <Helmet>
      {/* Basic Meta Info */}
      <title>{pageTitle}</title>
      <link rel="canonical" href={CANONICAL.desktop(pageURL)} />
      {/* 
      <link
        rel="alternate"
        media={QUERIES.mobile}
        href={`${CANONICAL.mobile(pageURL)}`}
      />
      */}
      <meta name="description" content={appDescription} />
      <meta name="theme-color" content={themeColor} />

      {/* Schema.org Microdata */}
      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={appDescription} />
      <meta itemProp="image" content={iconUrl} />

      {/* Facebook Open Graph Meta Info */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageURL} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={appDescription} />
      <meta property="og:image" content={iconUrl} />

      {/* Twitter Meta Info */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={pageURL} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={appDescription} />
      <meta name="twitter:image" content={iconUrl} />
      <meta name="twitter:image:alt" content={iconAlt} />

      {/* Critical Style Resources */}
      {LINKS.map((link) => {
        const { rel, href, crossOrigin } = link;

        return (
          <link
            key={rel + link.href}
            rel={rel}
            href={href}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...(crossOrigin ? { crossOrigin } : {})}
          />
        );
      })}
    </Helmet>
  );
}

Heading.defaultProps = {
  pageTitle: appInfo.titleDefault,
  appDescription: appInfo.descriptionDefault,
  themeColor: appInfo.themeColor,
  iconUrl: ASSETS.images.logos.favIcon.src,
  iconAlt: ASSETS.images.logos.favIcon.alt,
};
