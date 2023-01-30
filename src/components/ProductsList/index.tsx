import { CardSelect } from '..';

import { useCart } from '../../hooks/useCart';
import * as S from './styles';

export function ProductsList() {
  const { cartItems } = useCart();
  return (
    <S.ProductsListContainer>
      <S.ProductsListContent>
        {cartItems?.map((item) => (
          <CardSelect key={item.id} product={item} />
        ))}
      </S.ProductsListContent>
    </S.ProductsListContainer>
  );
}
