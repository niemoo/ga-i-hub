import { useEffect, useState } from 'react';
import ImageBanner from '../../components/ImageBanner';
import ListPromoSection from './sections/ListPromoSection';
import PromoCardSkeleton from '../../components/Skeletons/PromoCardSkeleton';

interface PromoPageProps {
  id: string;
  language_code: string;
  title: string;
  description: string;
  promo_code: string;
  discount: string;
  start_date: string;
  end_date: string;
}

export default function PromoPageLayout({ lang_code }: { lang_code: string }) {
  const [imageBanner, setImageBanner] = useState<string>('');
  const [promo, setPromo] = useState<PromoPageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchDataImage() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/get-theme-image`);
        if (!response.ok) {
          throw new Error(`${response.statusText}`);
        }
        const data = await response.json();
        setImageBanner(data.data.theme_image_path);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    async function fetchDataPromo() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/get-theme-promo?language_code=${lang_code}`);

        if (!response.ok) {
          throw new Error(`${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.data.promo);
        setPromo(data.data.promo);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataImage();
    fetchDataPromo();
  }, [lang_code]);

  return (
    <div className="w-11/12 mx-auto px-[24px] md:px-[72px]">
      <div className="mt-[80px] flex flex-col gap-6">
        <div>
          <h1 className="text-[40px] font-medium leading-[120%] text-center color-neutral-black-100 mb-8" style={{ fontFamily: 'Roboto Slab' }}>
            Promo
          </h1>
        </div>
      </div>

      {/* Image Banner */}
      {isLoading ? (
        <div className="block mx-auto mb-10 w-full">
          <div className="w-full h-[200px] md:h-[300px] bg-gray-200 animate-pulse rounded-[6px] md:rounded-[12px]" />
        </div>
      ) : (
        <ImageBanner imageUrl={imageBanner} className="mb-10 w-full" />
      )}

      {/* Promo Section */}
      {isLoading ? <PromoCardSkeleton /> : <ListPromoSection promos={promo} />}
    </div>
  );
}
