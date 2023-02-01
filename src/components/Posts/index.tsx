import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Card } from '..';

import { UseQueryProducts } from '../../hooks/useQueryProducts';
import * as S from './styles';

export function Posts() {
  const { isLoading, data } = UseQueryProducts();
  const loadingState = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <S.PostContainer>
      <S.PostContent>
        {isLoading
          ? loadingState.map((index) => (
              <S.PostCardContainer key={index}>
                <S.Image>
                  <Skeleton width={150} height={150} />
                </S.Image>
                <Skeleton count={1} width={70} />
                <Skeleton count={1} />
                <Skeleton count={1} width={50} />
                <Skeleton count={4} />
              </S.PostCardContainer>
            ))
          : data?.products?.map((item) => (
              <Card key={item.id} product={item} />
            ))}
      </S.PostContent>
    </S.PostContainer>
  );
}
