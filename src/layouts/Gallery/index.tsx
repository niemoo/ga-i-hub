import ImageSection from './sections/ImageSection';

export default function GalleryPageLayout({ lang_code }: { lang_code: string }) {
  return (
    <>
      <ImageSection lang_code={lang_code} />
    </>
  );
}
