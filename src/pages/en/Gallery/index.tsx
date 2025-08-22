import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import GalleryPageLayout from '../../../layouts/Gallery';

export default function GalleryPageEN() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub Gallery EN',
    });
  }, []);

  return <GalleryPageLayout lang_code="en" />;
}
