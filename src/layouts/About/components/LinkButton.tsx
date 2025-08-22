import { Link } from 'react-router-dom';

interface LinkButtonProps {
  url: string;
  text: string;
}

export default function LinkButton({ url, text }: LinkButtonProps) {
  return (
    <>
      <Link to={url} target="_blank" className="px-6 py-3 rounded-[6px] bg-primary-gradient-100 text-white">
        {text}
      </Link>
    </>
  );
}
