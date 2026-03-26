import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

const Header = ({ search, setSearch }) => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 container max-w-5xl mx-auto p-4 mb-6 bg-white">
      <Logo />
      <Link to={"/"}>Home</Link>
      <SearchInput search={search} setSearch={setSearch} />
    </header>
  );
};
export default Header;
