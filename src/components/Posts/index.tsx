import { Card } from '..';

import { UseQueryProducts } from '../../hooks/useQueryProducts';
import * as S from './styles';

export function Posts() {
  const { isLoading, error, data } = UseQueryProducts();

  if (isLoading) {
    return <p>Carregando dados...</p>;
  }

  if (error) {
    return <p>Erro ao buscar dados!</p>;
  }

  return (
    <S.PostContainer>
      <S.PostContent>
        {data?.products?.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </S.PostContent>
    </S.PostContainer>
  );
}
