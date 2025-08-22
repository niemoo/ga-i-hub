import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import HomePageLayout from '../../../layouts/Homepage';

export default function HomepageEN() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub Homepage EN',
    });
  }, []);

  return <HomePageLayout lang_code="en" />;
}
