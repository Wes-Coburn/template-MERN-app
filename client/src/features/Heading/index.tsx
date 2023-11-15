import { Helmet } from 'react-helmet';
import * as appInfo from '../../../manifest.json';

type Props = {
  pageUrl: string;
  pageTitle?: string;
  appDescription?: string;
  themeColor?: string;
  iconUrl?: string;
  iconAlt?: string;
};

export default function Heading({
  pageUrl,
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
      <link rel="canonical" href={pageUrl} />
      <meta name="description" content={appDescription} />
      <meta name="theme-color" content={themeColor} />

      {/* Schema.org Microdata */}
      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={appDescription} />
      <meta itemProp="image" content={iconUrl} />

      {/* Facebook Open Graph Meta Info */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={appDescription} />
      <meta property="og:image" content={iconUrl} />

      {/* Twitter Meta Info */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={appDescription} />
      <meta name="twitter:image" content={iconUrl} />
      <meta name="twitter:image:alt" content={iconAlt} />
    </Helmet>
  );
}

Heading.defaultProps = {
  pageTitle: appInfo.name,
  appDescription: appInfo.description,
  themeColor: appInfo.theme_color,
  iconUrl: appInfo.icons[0].src,
  iconAlt: 'app icon alt text',
};
