import { CardSelect } from '..';

import { useCart } from '../../hooks/useCart';
import { defaultTheme } from '../../styles/themes/default';
import * as S from './styles';

export function ProductsList() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  return (
    <S.ProductsListContainer>
      <S.ProductsListContent>
        {cartItems?.map((item) => (
          <CardSelect key={item.id} product={item} />
        ))}
        <p>{cartItemsTotal}</p>
      </S.ProductsListContent>
    </S.ProductsListContainer>
  );
}
