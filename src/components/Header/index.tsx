import { Drawer, Logo, MyCar } from '..';

import * as S from './styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Logo />
        <Drawer card={<MyCar />} openingPosition="right" />
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
