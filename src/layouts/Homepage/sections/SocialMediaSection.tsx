import { Link } from 'react-router-dom';
import LightWidget from '../components/Lighwidget';

export default function SocialMediaSection({ lang_code }: { lang_code: string }) {
  return (
    <section className="social-media w-11/12 mx-auto mt-[120px]">
      <div className="title-social-media">
        <h1 className="font-medium text-[40px] leading-[120%] text-center color-neutral-black-100 mb-2" style={{ fontFamily: 'Roboto Slab' }}>
          {lang_code === 'id' ? 'Galeri Media Sosial' : 'Social Media Gallery'}
        </h1>
      </div>

      <div className="subtitle-social-media">
        <h5 className="text-[18px] leading-[180%] text-center color-neutral-black-60 font-normal">
          {lang_code === 'id' ? 'Ikuti Instagram kami' : 'Follow our Instagram'}
          <Link to="https://www.instagram.com/ihubcoid/" target="_blank" rel="noopener noreferrer" className="color-primary-blue-100">
            @ihubcoid
          </Link>
        </h5>
      </div>

      <LightWidget />
    </section>
  );
}
