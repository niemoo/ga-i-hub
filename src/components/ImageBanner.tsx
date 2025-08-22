import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ImageBannerProps {
  imageUrl: string;
  className?: string;
}

export default function ImageBanner({ imageUrl, className }: ImageBannerProps) {
  return (
    <div className={clsx('block mx-auto', className)}>
      <Link to="/id/promo">
        <img className={clsx('w-full rounded-[6px] md:rounded-[12px]')} src={imageUrl} alt="Promo" />
      </Link>
    </div>
  );
}
