import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`}>
      <div className="cursor-pointer mb-6 shadow-lg rounded-2xl border border-gray-200 bg-white max-w-sm w-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="w-full h-56 overflow-hidden p-3">
          <img
            className="w-full h-full object-cover"
            src={blog.thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="px-5 py-4">
          <span className="text-blue-600 bg-blue-100 rounded-md px-3 py-1.5 text-sm font-medium">
            {blog.category}
          </span>
          <h3 className="font-semibold md:text-2xl sm:text-[18px] leading-tight mt-4">
            {blog.title}
          </h3>
          <div className="flex items-center mt-5">
            <img
              src={blog.authorImage}
              alt="author name"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-gray-500 text-sm font-medium pl-3 pr-5">
              {blog.authorName}
            </p>
            <p className="text-gray-400 text-sm">{blog.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
