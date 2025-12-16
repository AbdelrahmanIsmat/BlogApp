import { useParams } from "react-router-dom";
import { blogData } from "../blogData";

const SinglePostPage = () => {
  const { id } = useParams();
  const blog = blogData.find((p) => p.id === Number(id));
  return (
    <div className="flex justify-center  items-center w-full mx-auto">
      <div className="px-5 py-4 max-w-[800px]">
        <span className="bg-blue-600 text-blue-100 rounded-md px-3 py-1.5 text-sm font-medium">
          Technology
        </span>
        <h3 className="font-semibold text-2xl md:text-4xl leading-tight mt-4 ">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h3>
        <div className="flex items-center mt-5 mb-8">
          <img
            src={blog.authorImage}
            alt="author"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-gray-500 text-sm font-medium pl-3 pr-5">
            {blog.authorName}
          </p>
          <p className="text-gray-400 text-sm">August 20, 2022</p>
        </div>
        <div className=" mb-10">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className="mt-4 text-gray-700">
                    {block.text}
                  </p>
                );
              case "heading":
                return (
                  <h4 key={index} className="mt-6 text-xl font-semibold">
                    {block.text}
                  </h4>
                );
              case "image":
                return (
                  <img
                    key={index}
                    src={block.src}
                    alt={block.alt}
                    className="my-6 rounded-xl w-full"
                  />
                );
              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="my-6 p-6 text-[18px] md:text-2xl text-center rounded-xl border-l-4 border-gray-200 bg-gray-100 pl-4 italic text-gray-600"
                  >
                    {block.text}
                  </blockquote>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
