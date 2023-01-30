import { BsCartCheckFill } from 'react-icons/bs';

import { useCart } from '../../hooks/useCart';
import * as S from './styles';

export function MyCar() {
  const { cartQuantity } = useCart();
  return (
    <S.ButtonMyCar>
      <BsCartCheckFill size={20} />
      {/* <GeneralText text="0" fontSize="18px" fontWeight={700} lineHeigh="22px" /> */}
      {cartQuantity >= 1 && <span>{cartQuantity}</span>}
    </S.ButtonMyCar>
  );
}
