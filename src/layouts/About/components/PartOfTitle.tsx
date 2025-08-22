interface TitleProps {
  alt: string;
  src: string;
}

export default function PartOfTitle({ alt, src }: TitleProps) {
  return (
    <div className="flex flex-row items-center">
      <h1 className="font-semibold leading-[120%] color-neutral-black-100 text-[28px]">Bagian dari</h1>
      <img alt={alt} src={src} className="ml-4" />
    </div>
  );
}
