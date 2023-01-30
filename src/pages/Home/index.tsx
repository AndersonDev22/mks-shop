import { Footer, Header, Posts } from '../../components';
import * as S from './styles';

export function HomePage() {
  return (
    <S.HomeContainer>
      <Header />
      <Posts />
      <Footer />
    </S.HomeContainer>
  );
}
