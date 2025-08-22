import { Link } from 'react-router-dom';
import Video from '../components/Video';

export default function HeroSection({ lang_code }: { lang_code: string }) {
  return (
    <section className="w-full px-4 md:px-[72px] mx-auto mt-7">
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-12 space-x-4 gap-6">
        {/* Left Section */}
        {lang_code === 'id' ? (
          <div className="md:col-span-5 flex flex-col text-justify justify-between p-6 md:p-0 md:my-10 relative gap-4">
            <img src="/images/icons/decoration-hero.png" className="w-[120px] h-[120px] absolute left-[-20px] top-[-20px] md:left-[-62px] md:top-[-60px]" alt="Hero Section Decoration" />
            <div>
              <h1 className="font-bold text-[48px] leading-[1.1] text-black text-left" style={{ fontFamily: 'Roboto Slab' }}>
                The Most
                <span className="text-hero">{' Strategic & Spacious '}</span>
                Coworking Space in Jakarta
              </h1>
              <p className="mt-6 font-normal text-[18px] leading-[1.6] color-neutral-black-60">
                i-Hub adalah penyedia coworking space dan private office terkemuka di Kota Jakarta, yang memadukan modernitas, konektivitas, serta kenyamanan ruang kerja masa kini yang luas dan berlokasi strategis di pusat kota.
              </p>
            </div>
            <Link to="/id/plans">
              <button className="flex items-center flex-row gap-[10px] primary-gradient-100 rounded-[6px] py-3 px-6 font-medium text-white">Lihat Paket</button>
            </Link>
          </div>
        ) : (
          <div className="md:col-span-5 flex flex-col text-justify justify-between p-6 md:p-0 md:my-10 relative gap-4">
            <img src="/images/icons/decoration-hero.png" className="w-[120px] h-[120px] absolute left-[-20px] top-[-20px] md:left-[-62px] md:top-[-60px]" alt="Hero Section Decoration" />
            <div>
              <h1 className="font-bold text-[48px] leading-[1.1] text-black text-left" style={{ fontFamily: 'Roboto Slab' }}>
                The Most
                <span className="text-hero">{' Strategic & Spacious '}</span>
                Coworking Space in Jakarta
              </h1>
              <p className="mt-6 font-normal text-[18px] leading-[1.6] color-neutral-black-60">
                i-Hub is a leading provider of coworking space and private offices in the city of Jakarta, which combines modernity, connectivity and comfort of today's spacious work spaces and is strategically located in the city center.
              </p>
            </div>
            <Link to="/id/plans">
              <button className="flex items-center flex-row gap-[10px] primary-gradient-100 rounded-[6px] py-3 px-6 font-medium text-white">View Plans</button>
            </Link>
          </div>
        )}

        <Video />
      </div>
    </section>
  );
}
