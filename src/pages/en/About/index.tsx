import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import AboutPageLayout from '../../../layouts/About';

export default function AboutPageEN() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub About EN',
    });
  }, []);

  return <AboutPageLayout lang_code="en" />;
}
