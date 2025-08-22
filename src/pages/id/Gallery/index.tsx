import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import GalleryPageLayout from '../../../layouts/Gallery';

export default function GalleryPageID() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub Gallery ID',
    });
  }, []);

  return <GalleryPageLayout lang_code="id" />;
}
