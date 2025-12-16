import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

const Header = ({ search, setSearch }) => {
  return (
    <header className="px-4  mb-6 bg-white  md:mb-12 max-w-5xl m-auto ">
      <div className="container mx-auto px-5 md:px-0 ">
        <div className="flex h-20 items-center justify-between flex-wrap">
          <Logo />
          <Link to={"/"}>Home</Link>
          <SearchInput search={search} setSearch={setSearch} />
        </div>
      </div>
    </header>
  );
};
export default Header;
