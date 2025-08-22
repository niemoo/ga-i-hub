import { Link } from 'react-router-dom';

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

interface PlanDetailSectionProps {
  lang_code: string;
  plan: Plan | null;
}

export default function PlanDetailSection({ lang_code, plan }: PlanDetailSectionProps) {
  return (
    <section>
      <div className="w-[90%] md:w-[60%] mx-auto mt-[-180px] z-10 bg-white shadow-card relative p-[24px] md:pt-[48px] pb-[96px] md:px-[56px] rounded-[14px] flex flex-col gap-4 items-center">
        {/* Icon */}
        <div>
          <span className="material-icons p-[12px] outer border-neutral-white-100 bg-secondary-cyan-100 bg-white rounded-[40px] color-neutral-white-100">{plan?.icon}</span>
        </div>

        {/* Header */}
        <div className="w-full md:w-7/12 mx-auto text-center">
          <h3 className="font-semibold text-base leading-[1.6] color-neutral-black-100">{plan?.title}</h3>
          <p className="font-normal text-[14px] leading-[1.6] text-center color-neutral-black-60 mb-4">{lang_code === 'id' ? plan?.desc_id : plan?.desc_en}</p>
        </div>

        {/* Benefits Icons */}
        <div className="grid grid-flow-row md:grid-cols-2 bg-primary-soft-blue-100 w-full justify-items-center rounded-[10px]">
          <div className="w-full items-start justify-start flex flex-col gap-2 px-4 p-4 h-full">
            {plan?.benefits.slice(0, 8).map((benefit, index) => (
              <div key={index} className={`flex flex-row gap-4 items-center benefit-item ${benefit.status ? 'active' : ''}`}>
                <span className="material-icons text-[20px] color-primary-blue-100">{benefit.materialicon}</span>
                <h5 className="font-semibold text-[14px] leading-[1.6] color-neutral-black-100">{benefit.title}</h5>
              </div>
            ))}
          </div>

          <div className="w-full items-start justify-start flex flex-col gap-2 px-4 p-4 h-full">
            {plan?.benefits.slice(8, 16).map((benefit, index) => (
              <div key={index + 8} className={`flex flex-row gap-4 items-center benefit-item ${benefit.status ? 'active' : ''}`}>
                <span className="material-icons text-[20px] color-primary-blue-100">{benefit.materialicon}</span>
                <h5 className="font-semibold text-[14px] leading-[1.6] color-neutral-black-100">{benefit.title}</h5>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        {plan && (
          <div className="absolute bottom-[-50px] md:bottom-[-60px]">
            <Link to="https://api.whatsapp.com/send?phone=6281511180600" target="_blank" className="bg-primary-gradient-100 rounded-xl flex flex-col items-center py-3 px-14">
              {plan.title !== 'Event Space' ? (
                <p className="text-[14px] color-neutral-white-60">{lang_code === 'id' ? 'Mulai dari' : 'Start from'}</p>
              ) : (
                <h3 className="font-semibold text-[20px] leading-[1.6] text-center color-neutral-white-100">{lang_code === 'id' ? 'Hubungi Kami' : 'Contact Us'}</h3>
              )}

              {plan?.title !== 'Event Space' && <h3 className="font-semibold text-[20px] leading-[1.6] text-center color-neutral-white-100">{plan?.price}</h3>}

              {plan?.title !== 'Event Space' && <h5 className="font-medium text-[14px] leading-[1.6] color-neutral-white-100">{lang_code === 'id' ? plan?.pax_id : plan?.pax_en}</h5>}
            </Link>

            {plan?.title !== 'Event Space' && <p className="text-[12px] italic color-neutral-black-60 mt-4">{lang_code === 'id' ? '*harga belum termasuk PPN' : '*prices do not include VAT'}</p>}
          </div>
        )}
      </div>

      {/* Facilities */}
      <div className="mt-[200px] md:my-[120px]">
        <div>
          <h1 className="font-slab text-[20px] md:text-[40px] leading-[1.2] font-semibold text-center color-neutral-black-100">Facilities</h1>
        </div>
        <div>
          <p className="font-normal text-[14px] md:text-base leading-[1.6] text-center color-neutral-black-60 w-11/12 mt-2 mx-auto">
            {lang_code === 'id'
              ? 'i-Hub dirancang untuk menyediakan semua fasilitas dan kemudahan yang Anda butuhkan untuk bekerja secara produktif dan nyaman.'
              : 'i-Hub is designed to provide you with all the facilities and amenities you need to work productively and comfortably.'}
          </p>
        </div>
        <div className="w-10/12 mx-auto grid grid-flow-row md:grid-cols-4 gap-8 my-[56px]">
          {plan?.facilities_detail.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 gap-4 shadow-card rounded-[10px]">
              <div className="w-[56px] h-[56px] rounded-[40px] bg-secondary-cyan-100 flex flex-row items-center justify-center">
                <span className="material-icons text-[28px] text-white">{item.materialicon}</span>
              </div>
              <div>
                <h5 className="font-medium text-base leading-[1.6] color-neutral-black-100 text-center">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
