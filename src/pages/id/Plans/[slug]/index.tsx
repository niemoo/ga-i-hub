import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import PlanDetailsLayout from '../../../../layouts/Plans/[slug]';

export default function PlanDetailspageID() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub Plan Details ID',
    });
  }, []);

  return <PlanDetailsLayout lang_code="id" />;
}
