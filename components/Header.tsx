import { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="w-full flex justify-center items-center pt-6 pb-6 bg-green-800 mb-7">
      <h1 className="font-medium text-3xl text-white">Todos</h1>
    </nav>
  );
};

export default Header;
