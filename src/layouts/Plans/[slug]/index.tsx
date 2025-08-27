import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { plans } from '../../../data/Plans';
import PlanDetailSection from './sections/PlanDetailSection';

interface Benefit {
  materialicon: string;
  title: string;
  status: boolean;
}

interface FacilityDetail {
  id?: number;
  materialicon: string;
  title: string;
}

interface Plan {
  id?: number;
  image?: string;
  slug: string;
  icon: string;
  title: string;
  desc_en: string;
  desc_id: string;
  benefits: Benefit[];
  price: string;
  pax_en: string;
  pax_id: string;
  start: boolean;
  facilities_detail: FacilityDetail[];
}

export default function PlanDetailsLayout({ lang_code }: { lang_code: string }) {
  const { slug } = useParams<{ slug: string }>();
  const [plan, setPlan] = useState<Plan | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedPlan = plans.find((plan) => plan.slug === slug);

    if (!selectedPlan) {
      navigate('/not-found', { replace: true });
      return;
    }

    setPlan(selectedPlan || null);
  }, [slug, navigate]);

  return (
    <div className="header relative">
      {/* Header */}
      <img src={plan?.image} alt="" className="w-full h-[450px] object-cover" />

      <PlanDetailSection lang_code={lang_code} plan={plan} />
    </div>
  );
}
