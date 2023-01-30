import { BsFillTrashFill } from 'react-icons/bs';

import { Counter, GeneralText } from '..';

import { CartItem } from '../../contexts/CartContext';
import { useCart } from '../../hooks/useCart';
import { priceFormatter } from '../../types/formatter';
import * as S from './styles';

interface ProductCardSelectProps {
  product: CartItem;
}

export function CardSelect({ product }: ProductCardSelectProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(product.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(product.id, 'decrease');
  }

  function handleRemove() {
    removeCartItem(product.id);
  }

  const productsTotal = product.price * product.quantity;
  const formatPriceBR = priceFormatter.format(productsTotal);

  return (
    <S.CardSelectContainer>
      <img src={product.photo} alt="cafe" width={80} height={80} />
      <S.ActionsGroup>
        <GeneralText
          text={product.name}
          fontWeight={400}
          fontSize="16px"
          lineHeigh="17px"
        />
        <S.groupCounter>
          <Counter
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={product.quantity}
          />
          <S.CardPrice>{formatPriceBR}</S.CardPrice>
        </S.groupCounter>
      </S.ActionsGroup>

      <S.ButtonRemove onClick={handleRemove}>
        <BsFillTrashFill size={20} />
      </S.ButtonRemove>
    </S.CardSelectContainer>
  );
}
