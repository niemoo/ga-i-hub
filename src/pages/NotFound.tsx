import { Link, useLocation } from 'react-router-dom';

export default function NotFoundPage() {
  const location = useLocation();
  const isEnglishRoute = location.pathname.startsWith('/en');

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
      <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
      <p className="text-2xl mt-2 font-semibold">Page Not Found</p>
      <p className="text-gray-400 mt-2 max-w-md">The page you're looking for doesn't exist.</p>
      <Link to={isEnglishRoute ? '/en' : '/'} className="mt-6 px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-medium transition-all duration-300">
        Go Home
      </Link>
    </div>
  );
}
