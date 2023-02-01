import Skeleton from 'react-loading-skeleton';

import * as S from './styles';

export function CardSkeleton() {
  return (
    <S.PostCardContainer>
      <S.Image>
        <Skeleton width={150} height={150} />
      </S.Image>
      <Skeleton count={1} width={70} />
      <Skeleton count={1} />
      <Skeleton count={1} width={50} />
      <Skeleton count={4} />
    </S.PostCardContainer>
  );
}
