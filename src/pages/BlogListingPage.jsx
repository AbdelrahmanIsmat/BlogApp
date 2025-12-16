import Card from "../components/Card";
import { blogData } from "../blogData";
import { useOutletContext } from "react-router-dom";

const BlogListingPage = () => {
  const { search } = useOutletContext();
  const term = search.toLowerCase();

  const filtered = blogData.filter(
    (post) =>
      post.title.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term) ||
      post.authorName.toLowerCase().includes(term)
  );
  return (
    <>
      <div className="md:m-auto gap-x-5 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl">
        {filtered.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center w-full my-8">
        <button className="rounded-md cursor-pointer text-gray-500 border border-gray-200 shadow-lg hover:shadow-xl py-3 px-5 w-max">
          Load More
        </button>
      </div>
    </>
  );
};
export default BlogListingPage;
