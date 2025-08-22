import { Link } from 'react-router-dom';
import { listBenefitId, listBenefitEn } from '../../../data/Benefit';

export default function AboutSection({ lang_code }: { lang_code: string }) {
  return (
    <section
      className="about-wrapper mt-32 w-full md:w-11/12 mx-auto relative"
      style={{
        background: 'linear-gradient(180deg, #eceff4 0%, rgba(236, 239, 244, 0) 100%)',
        borderRadius: '24px 24px 0px 0px',
      }}
    >
      <img src="/images/decoration/decoration-about.png" width={156} height={156} className="absolute right-0" alt="Decoration" />

      <div className="p-[48px] md:p-[72px] flex flex-col gap-14">
        {/* Top */}
        {lang_code === 'id' ? (
          <div>
            <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-12 gap-6 md:gap-0">
              <div className="md:col-span-6">
                <h1 className="text-[40px] font-semibold leading-[120%] color-neutral-black-100" style={{ fontFamily: 'Roboto Slab' }}>
                  Tentang i-Hub
                </h1>
                <p className="text-base font-normal leading-[160%] color-neutral-black-60 mt-2 text-justify">
                  Kehadiran i-Hub menjawab kebutuhan perusahaan maupun perorangan akan ruang kerja yang luas dengan lokasi strategis. Tiga keunggulan kami (3P): Lokasi Strategis, Kemudahan Akses, dan Fasilitas Premium.
                </p>
              </div>
              <div className="md:col-span-6 md:flex md:items-end md:justify-end">
                <Link to="/id/tentang" className="primary-gradient-100 rounded-[6px] py-3 px-6 font-medium text-white">
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-12 gap-6 md:gap-0">
              <div className="md:col-span-6">
                <h1 className="text-[40px] font-semibold leading-[120%] color-neutral-black-100" style={{ fontFamily: 'Roboto Slab' }}>
                  About i-Hub
                </h1>
                <p className="text-base font-normal leading-[160%] color-neutral-black-60 mt-2 text-justify">
                  The presence of i-Hub answers the needs of companies and individuals who need a modern and inspiring shared work space with various advantages of our 3P, namely Prominent Location, Pleasant Access and Premium Facilities.
                </p>
              </div>
              <div className="md:col-span-6 md:flex md:items-end md:justify-end">
                <Link to="/id/tentang" className="primary-gradient-100 rounded-[6px] py-3 px-6 font-medium text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* About Card */}
        <div>
          <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 gap-10">
            {(lang_code === 'id' ? listBenefitId : listBenefitEn).map((item) => (
              <div key={item.id} className="p-6 rounded-[10px] shadow-card bg-neutral-white-100">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt="icons" />
                  <h3 className="color-neutral-black-100 font-medium text-[18px] leading-[160%] uppercase">{item.title}</h3>
                </div>
                <p className="color-neutral-black-60 font-normal text-[14px] leading-[1.6] mt-3 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
