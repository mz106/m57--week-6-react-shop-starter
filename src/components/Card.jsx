import { WrapperCard, CardPara } from "../Styles";

// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {
  return (
    <WrapperCard>
      <CardPara>{product.title}</CardPara>
      <CardPara color="red">£{product.price}</CardPara>
      <CardPara>Category: {product.category}</CardPara>
    </WrapperCard>
  );
};

export default Card;
