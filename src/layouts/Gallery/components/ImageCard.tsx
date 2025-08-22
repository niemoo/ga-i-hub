interface Image {
  name: string;
  category: string;
}

interface ImageCardProps {
  item: Image;
}

export default function ImageCard({ item }: ImageCardProps) {
  return (
    <div className="area relative">
      <img src={item.name} className="w-full rounded-[14px] h-[450px] md:h-[300px] 2xl:h-[400px] object-cover" alt="gallery-item" />
      <h6 className="absolute m-4 px-4 py-[2px] top-0 bg-neutral-black-30 border-neutral-white-20 blur-4 rounded-md text-white">{item.category}</h6>
    </div>
  );
}
