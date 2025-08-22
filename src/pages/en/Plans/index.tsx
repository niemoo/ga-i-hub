import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import PlansPageLayout from '../../../layouts/Plans';

export default function PlansPageEN() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub Plans EN',
    });
  }, []);

  return <PlansPageLayout lang_code="en" />;
}
