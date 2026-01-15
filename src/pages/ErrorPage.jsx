import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center my-60 px-4">
      <h1 className="text-5xl sm:text-7xl font-extrabold text-blue-600">404</h1>
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
    </section>
  );
};

export default ErrorPage;
