import { GeneralText } from '..';

import { RiShoppingBag3Line } from 'react-icons/ri';

import { defaultTheme } from '../../styles/themes/default';
import { priceFormatter } from '../../types/formatter';
import * as S from './styles';

import { useState } from 'react';

import { useCart } from '../../hooks/useCart';

export interface IProducts {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
}

interface ICardProps {
  product: IProducts;
}

export function Card({ product }: ICardProps) {
  const [quantity] = useState(1);

  const { addProductToCart } = useCart();

  function handleAddToCart() {
    const productToAdd = {
      ...product,
      quantity
    };
    addProductToCart(productToAdd);
  }
  return (
    <S.CardContainer>
      <S.Image>
        <img src={product.photo} alt="" width={150} height={150} />
      </S.Image>
      <S.CardContent>
        <S.CardPrice>
          {priceFormatter.format(Number(product.price))}
        </S.CardPrice>
        <GeneralText
          text={product.name}
          fontWeight={700}
          color={defaultTheme['gray-700']}
          margin="0 0 8px 0"
          lineHeigh="16px"
        />
        <GeneralText
          text={product.brand}
          fontWeight={600}
          color={defaultTheme['blue-700']}
          margin="0 0 10px 0"
          fontSize="14px"
        />
        <GeneralText
          text={product.description}
          fontWeight={600}
          color={defaultTheme['gray-700']}
          margin="0 0 8px 0"
          fontSize="10px"
          lineHeigh="12px"
        />
      </S.CardContent>

      <S.CardButton onClick={handleAddToCart}>
        <RiShoppingBag3Line size={16} />
        Comprar
      </S.CardButton>
    </S.CardContainer>
  );
}
