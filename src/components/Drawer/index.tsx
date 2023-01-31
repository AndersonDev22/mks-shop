import { ReactNode } from 'react';
import { BsXCircleFill } from 'react-icons/bs';

import * as Dialog from '@radix-ui/react-dialog';
import type * as Stitches from '@stitches/react';

import { useCart } from '../../hooks/useCart';
import { defaultTheme } from '../../styles/themes/default';
import { priceFormatter } from '../../types/formatter';
import * as S from './styles';

import { CardSelect, GeneralText } from '..';

type StyledContentVariants = Stitches.VariantProps<typeof S.StyledContent>;

interface IContentProps {
  openingPosition?: 'left' | 'right' | 'top' | 'bottom';
  card: ReactNode;
}

export function Drawer({
  openingPosition = 'left',
  card
}: IContentProps & StyledContentVariants) {
  const { cartItemsTotal, cartItems } = useCart();

  return (
    <Dialog.Root>
      <S.Trigger>{card}</S.Trigger>
      <S.StyledContent openingPosition={openingPosition}>
        <Dialog.DialogClose asChild>
          <S.ButtonClose>
            <BsXCircleFill size={30} />
          </S.ButtonClose>
        </Dialog.DialogClose>
        <GeneralText
          text="Carrinho de Compras:"
          color={defaultTheme.white}
          fontSize="28px"
          fontWeight={700}
          lineHeigh="15px"
          margin="10px 0"
        />
        <S.ProductsListContent>
          {cartItems?.map((item) => (
            <CardSelect key={item.id} product={item} />
          ))}
        </S.ProductsListContent>
        <S.Total>
          <GeneralText
            text="Valor Total:"
            color={defaultTheme.white}
            fontSize="28px"
            fontWeight={700}
            lineHeigh="15px"
          />
          <GeneralText
            text={priceFormatter.format(Number(cartItemsTotal))}
            color={defaultTheme.white}
            fontSize="28px"
            fontWeight={700}
            lineHeigh="15px"
          />
        </S.Total>

        <S.ButtonFinalize>
          <GeneralText
            text="Finalizar Compra"
            fontSize="28px"
            fontWeight={700}
            color={defaultTheme.white}
          />
        </S.ButtonFinalize>
      </S.StyledContent>
    </Dialog.Root>
  );
}
