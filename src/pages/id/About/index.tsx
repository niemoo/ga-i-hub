import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import AboutPageLayout from '../../../layouts/About';

export default function AboutPageID() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub About ID',
    });
  }, []);

  return <AboutPageLayout lang_code="id" />;
}
