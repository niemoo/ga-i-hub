import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import FAQPageLayout from '../../../layouts/FAQ';

export default function FAQPageID() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub FAQ ID',
    });
  }, []);

  return <FAQPageLayout lang_code="id" />;
}
