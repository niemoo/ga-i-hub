interface DescriptionProps {
  description: string;
}

export default function PartOfDescription({ description }: DescriptionProps) {
  return (
    <>
      <p className="font-normal text-base leading-[160%] text-center color-neutral-black-60">{description}</p>
    </>
  );
}
