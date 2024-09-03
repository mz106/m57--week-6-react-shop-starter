import { WrapperLayout, Heading } from "../Styles";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <WrapperLayout
        borderPosition="border-bottom"
        border="2px solid black"
        justify="space-between"
      >
        <Heading property="color" value="red">
          Michaels Shop
        </Heading>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </WrapperLayout>
    </>
  );
};

export default Header;
