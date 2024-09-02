import { WrapperHeader } from "../Styles";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <WrapperHeader>
        <h1>Michaels Shop</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </WrapperHeader>
    </>
  );
};

export default Header;
