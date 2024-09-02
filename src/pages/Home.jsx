import { WrapperPage } from "../Styles";

import CardContainer from "../components/CardContainer";

// eslint-disable-next-line react/prop-types
const Home = ({ products }) => {
  return (
    <WrapperPage>
      <CardContainer products={products} />
    </WrapperPage>
  );
};

export default Home;
