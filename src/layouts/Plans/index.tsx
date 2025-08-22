import AddOnsSection from './sections/AddOnsSection';
import PlansSection from './sections/PlansSection';

export default function PlansPageLayout({ lang_code }: { lang_code: string }) {
  return (
    <>
      <PlansSection lang_code={lang_code} />
      <AddOnsSection lang_code={lang_code} />
    </>
  );
}
