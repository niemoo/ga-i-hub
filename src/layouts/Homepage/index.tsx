import { useEffect, useState } from 'react';
import AboutSection from './sections/AboutSection';
import HeroSection from './sections/HeroSection';
import LocalAreaSection from './sections/LocalAreaSection';
import PlanSection from './sections/PlanSection';
import SocialMediaSection from './sections/SocialMediaSection';

export default function HomePageLayout({ lang_code }: { lang_code: string }) {
  const [imageBanner, setImageBanner] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/get-theme-image`);
        if (!response.ok) {
          throw new Error(`${response.statusText}`);
        }
        const data = await response.json();
        setImageBanner(data.data.theme_image_path);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <HeroSection lang_code={lang_code} />
      <AboutSection lang_code={lang_code} />
      <PlanSection lang_code={lang_code} />
      <LocalAreaSection imageBanner={imageBanner} />
      <SocialMediaSection lang_code={lang_code} />
    </>
  );
}
