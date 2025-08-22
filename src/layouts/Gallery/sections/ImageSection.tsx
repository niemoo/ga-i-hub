import { useState } from 'react';
import { imageAll, imageCoworking, imageEvent, imageMeeting, imagePrivate } from '../../../data/Gallery';
import { GalleryMenuID, GalleryMenuEN } from '../../../data/Menu';
import ImageLists from '../components/ImageLists';

export default function ImageSection({ lang_code }: { lang_code: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const images = [imageAll, imageCoworking, imagePrivate, imageMeeting, imageEvent];

  return (
    <section className="w-11/12 mx-auto">
      <div className="mt-[80px] flex flex-col gap-6">
        <h1 className="text-[40px] font-medium leading-[120%] text-center color-neutral-black-100 mb-8" style={{ fontFamily: 'Roboto Slab' }}>
          {lang_code === 'id' ? 'Galeri' : 'Gallery'}
        </h1>

        {/* Navigation Menu */}
        <div>
          <div className="flex flex-row gap-4 justify-center cursor-pointer">
            {(lang_code === 'id' ? GalleryMenuID : GalleryMenuEN).map((item, index) => (
              <div key={index} className={`border border-b rounded-[6px] text-center ${activeTab === index ? 'bg-primary-gradient-100 text-white' : ''}`} onClick={() => setActiveTab(index)}>
                <h1 className="px-4 py-[3px]">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lists */}
      <ImageLists activeTab={activeTab} images={images} />
    </section>
  );
}
