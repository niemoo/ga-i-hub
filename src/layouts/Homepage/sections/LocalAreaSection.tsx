import ImageBanner from '../../../components/ImageBanner';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slider from '../components/Slider';

export default function LocalAreaSection({ imageBanner }: { imageBanner: string }) {
  return (
    <section className="area-wrapper w-full mx-auto mt-32" style={{ background: "url('/images/home/local-area-background.svg') no-repeat", backgroundSize: '100%' }}>
      <div className="title-area mt-[80px] flex flex-col gap-6 py-[48px]">
        <h1 className="text-[40px] font-medium leading-[120%] text-center text-neutral-black-100" style={{ fontFamily: 'Roboto Slab' }}>
          Local Area
        </h1>
      </div>

      {/* Swiper Carousel */}
      <Slider />

      {/* Promo Image */}
      {imageBanner ? (
        <ImageBanner imageUrl={imageBanner} className="w-11/12 my-[120px] overflow-hidden" />
      ) : (
        <div className="block mx-auto w-11/12 my-[120px] overflow-hidden">
          <div className="w-full h-[200px] md:h-[300px] bg-gray-200 animate-pulse rounded-[6px] md:rounded-[12px]" />
        </div>
      )}
    </section>
  );
}
