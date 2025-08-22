import FAQSection from './sections/FAQSection';

export default function FAQPageLayout({ lang_code }: { lang_code: string }) {
  return (
    <>
      <FAQSection lang_code={lang_code} />
    </>
  );
}
