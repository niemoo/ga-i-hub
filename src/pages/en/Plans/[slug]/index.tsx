import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import PlanDetailsLayout from '../../../../layouts/Plans/[slug]';

export default function PlanDetailspageEN() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub Plan Details EN',
    });
  }, []);

  return <PlanDetailsLayout lang_code="en" />;
}
