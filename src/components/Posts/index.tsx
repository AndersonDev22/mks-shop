import 'react-loading-skeleton/dist/skeleton.css';

import { Card } from '..';

import { UseQueryProducts } from '../../hooks/useQueryProducts';
import { CardSkeleton } from '../CardSkeleton';
import * as S from './styles';

export function Posts() {
  const { isLoading, data } = UseQueryProducts();
  const loadingState = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <S.PostContainer>
      <S.PostContent>
        {isLoading
          ? loadingState.map((index) => <CardSkeleton key={index} />)
          : data?.products?.map((item) => (
              <Card key={item.id} product={item} />
            ))}
      </S.PostContent>
    </S.PostContainer>
  );
}
