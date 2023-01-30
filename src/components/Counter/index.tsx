import { BsFileMinus } from 'react-icons/bs';
import { GrFormAdd } from 'react-icons/gr';

import { CounterContainer, Button } from './styles';

interface CounterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}
export function Counter({ onIncrease, onDecrease, quantity }: CounterProps) {
  return (
    <CounterContainer>
      <Button onClick={onDecrease} disabled={quantity <= 1}>
        <BsFileMinus size={14} />
      </Button>
      <input type="text" pattern="[0-9]*" value={quantity} />
      <Button onClick={onIncrease}>
        <GrFormAdd size={14} />
      </Button>
    </CounterContainer>
  );
}
