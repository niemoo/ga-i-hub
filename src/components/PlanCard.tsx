import { Link } from 'react-router-dom';

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

interface PlanCardProps {
  plan: Plan;
  lang_code: string;
  isPlans: boolean;
}

export default function PlanCard({ plan, lang_code, isPlans }: PlanCardProps) {
  return (
    <div className="plan w-full md:w-1/5 flex flex-col" key={plan.id}>
      <Link to={`/id/plans/${plan.slug}`}>
        <div className="image-plan relative">
          <img src={plan.image} className="w-full rounded-t-[8px] md:h-[150px] 2xl:h-[150px] hover:scale-125 cursor-pointer transition duration-700 object-cover" alt="plan-1" />
          <span className="material-icons p-[12px] absolute bottom-[-25px] ms-3 outer border-neutral-white-100 bg-secondary-cyan-100 bg-white rounded-[40px] color-neutral-white-100">{plan.icon}</span>
        </div>
        <div className="pt-10 flex flex-col bg-white">
          <div>
            <div className="title-plan px-4">
              <h1 className="font-medium text-[14px] 2xl:text-[16px] leading-[120%] color-[#21243A]">{plan.title}</h1>
            </div>
            <div className="description-plan px-4 pb-5 md:pb-0 h-full md:h-[120px] 2xl:h-[90px] mt-[4px]">
              <p className="text-[12px] color-neutral-black-60 text-justify">{lang_code === 'id' ? plan.desc_id : plan.desc_en}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-col">
        {isPlans && (
          <Link to={`/plans/${plan.slug}`} className="list-benefit pb-6 bg-primary-soft-blue-100">
            <div className="list flex flex-col gap-4">
              {plan.benefits.map((benefit, idx) => (
                <div className="benefit" key={idx}>
                  <div className={`flex flex-row gap-4 items-center px-4 ${benefit.status ? 'active' : ''}`}>
                    <span className="material-icons">{benefit.materialicon}</span>
                    <span className="font-semibold text-[14px] leading-[160%] color-neutral-black-100">{benefit.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        )}
        <Link
          to="https://api.whatsapp.com/send?phone=6281511180600"
          target="_blank"
          rel="noopener noreferrer"
          className="button-plan primary-gradient-100 text-white py-3 flex flex-col items-center rounded-b-[14px] gap-1 h-[120px] justify-center"
        >
          {plan.start && <p className="text-[14px] color-neutral-white-60">{lang_code === 'id' ? 'Mulai dari' : 'Start from'}</p>}
          {plan.title === 'Event Space' && <p className="font-medium text-[14px] xl:text-[18px] 2xl:text-[20px] leading-[120%] text-center">{lang_code === 'id' ? 'Hubungi Kami' : 'Contact Us'}</p>}
          {plan.title !== 'Event Space' && <p className="font-medium text-[14px] xl:text-[18px] 2xl:text-[20px] leading-[120%] text-center">{plan.price}</p>}
          {plan.title !== 'Event Space' && <p>{lang_code === 'id' ? plan.pax_id : plan.pax_en}</p>}
          {plan.title === 'Event Space' && <p className="opacity-0">Pax</p>}
        </Link>
      </div>
    </div>
  );
}
