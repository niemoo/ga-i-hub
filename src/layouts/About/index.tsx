import AboutSection from './sections/AboutSection';
import PartOfSection from './sections/PartOfSection';

export default function AboutPageLayout({ lang_code }: { lang_code: string }) {
  return (
    <>
      {/* Banner Image */}
      <div>
        <img alt="i-Hub Lounge" src="/images/about/banner_about.png" className="w-full h-[300px] md:h-[500px] aspect-video object-cover" />
      </div>

      <div className="my-[36px] md:my-[72px]">
        {/* First Section About i-Hub */}
        <AboutSection lang_code={lang_code} />

        {/* Second Section Part of i-Hub */}
        <PartOfSection lang_code={lang_code} />
      </div>
    </>
  );
}
