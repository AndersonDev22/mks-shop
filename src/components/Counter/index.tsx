import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';

import * as S from './styles';

interface CounterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}
export function Counter({ onIncrease, onDecrease, quantity }: CounterProps) {
  return (
    <S.CounterContainer>
      <S.Button onClick={onDecrease} disabled={quantity <= 1}>
        <GrFormSubtract size={18} />
      </S.Button>
      <S.Quantity type="text" pattern="[0-9]*" value={quantity} />
      <S.Button onClick={onIncrease}>
        <GrFormAdd size={18} />
      </S.Button>
    </S.CounterContainer>
  );
}
