import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import FAQPageLayout from '../../../layouts/FAQ';

export default function FAQPageEN() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub FAQ EN',
    });
  }, []);

  return <FAQPageLayout lang_code="en" />;
}
