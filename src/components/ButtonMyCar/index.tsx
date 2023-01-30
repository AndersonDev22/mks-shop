import { BsCartCheckFill } from 'react-icons/bs';

import { GeneralText } from '..';

import { useCart } from '../../hooks/useCart';
import * as S from './styles';

export function MyCar() {
  const { cartQuantity } = useCart();
  return (
    <S.ButtonMyCar>
      <BsCartCheckFill size={20} />
      {cartQuantity >= 1 ? (
        <GeneralText text={cartQuantity} fontWeight={700} fontSize="20px" />
      ) : (
        <GeneralText text="0" fontWeight={700} fontSize="20px" />
      )}
    </S.ButtonMyCar>
  );
}
