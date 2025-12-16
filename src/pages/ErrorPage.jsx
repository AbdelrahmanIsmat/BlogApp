import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Page not found
        </h2>
        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
