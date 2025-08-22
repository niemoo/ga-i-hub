import { useEffect, useState } from 'react';
import { plans } from '../data/Plans';
import PlanCard from './PlanCard';

interface Plan {
  id: number;
  slug: string;
  image: string;
  icon: string;
  title: string;
  desc_en: string;
  desc_id: string;
  benefits: { title: string; materialicon: string; status: boolean }[];
  price: string;
  pax_en: string;
  pax_id: string;
  start: boolean;
}

export default function PlanList({ lang_code }: { lang_code: string }) {
  const [isPlans, setIsPlans] = useState(false);

  useEffect(() => {
    setIsPlans(window.location.href.includes('/plans'));
  }, []);

  return (
    <div>
      {/* Plans Lists */}
      <div className={`list-plan flex flex-col md:flex-row gap-6 mt-10 mx-auto ${isPlans ? 'w-11/12' : ''}`}>
        {plans.map((item: Plan) => (
          <PlanCard key={item.id} plan={item} lang_code={lang_code} isPlans={isPlans} />
        ))}
      </div>

      {/* Additional Information */}
      {isPlans && <p className="text-[14px] italic color-neutral-black-60 mt-4 mx-auto w-11/12">{lang_code === 'id' ? '*harga belum termasuk PPN' : '*prices do not include VAT'}</p>}
    </div>
  );
}
