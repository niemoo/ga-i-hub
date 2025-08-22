import ImageCard from './ImageCard';

interface ImageItem {
  name: string;
  category: string;
}

interface ImageListsProps {
  activeTab: number;
  images: ImageItem[][];
}

export default function ImageLists({ activeTab, images }: ImageListsProps) {
  return (
    <section className="grid grid-flow-row md:grid-cols-4 gap-6 mt-8">
      {images[activeTab]?.map((item: ImageItem, index: number) => (
        <ImageCard key={index} item={item} />
      ))}
    </section>
  );
}
