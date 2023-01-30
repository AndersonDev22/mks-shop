import { defaultTheme } from '../../styles/themes/default';
import { GeneralText } from '../Text';
import * as S from './styles';

export function Logo() {
  return (
    <S.LogoLogo>
      <GeneralText
        color={defaultTheme.white}
        text="MKS"
        fontSize="40px"
        fontWeight={600}
        lineHeigh="19px"
      />
      <GeneralText
        color={defaultTheme.white}
        text="Sistemas"
        fontSize="20px"
        fontWeight={300}
        lineHeigh="19px"
        margin="0 0 4px 0"
      />
    </S.LogoLogo>
  );
}
