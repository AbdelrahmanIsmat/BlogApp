import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

const Layout = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Outlet context={{ search }} />
    </>
  );
};
export default Layout;
