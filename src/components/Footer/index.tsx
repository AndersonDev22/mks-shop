import { GeneralText } from '..';

import { defaultTheme } from '../../styles/themes/default';
import * as S from './styles';

export function Footer() {
  return (
    <S.FooterContainer>
      <GeneralText
        text="MKS sistemas © - Todos os direitos reservados - Desenvolvido por "
        fontWeight={600}
        fontSize="12px"
        lineHeigh="15px"
      />
      <S.FooterLink href="https://luizanderson.dev.br/" target="_blank">
        <GeneralText
          text=" anderson.dev22"
          fontWeight={600}
          fontSize="12px"
          lineHeigh="15px"
          color={defaultTheme['blue-700']}
        />
      </S.FooterLink>
    </S.FooterContainer>
  );
}
