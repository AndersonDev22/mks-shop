import { Drawer, Logo, MyCar, ProductsList } from '..';

import * as S from './styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Logo />
        <Drawer
          card={<MyCar />}
          content={<ProductsList />}
          openingPosition="right"
        />
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
