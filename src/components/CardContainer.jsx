import { WrapperContainer } from "../Styles";

import Card from "./Card";

// eslint-disable-next-line react/prop-types
const CardContainer = ({ products }) => {
  return (
    <WrapperContainer>
      {/* eslint-disable-next-line react/prop-types */}
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </WrapperContainer>
  );
};

export default CardContainer;
