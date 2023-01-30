import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 7rem;
  padding: 0.4rem;
  border: 1px solid ${defaultTheme['gray-100']};
  border-radius: 6px;
`;

export const Quantity = styled.input`
  width: 100%;
  text-align: center;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button.attrs({ type: 'button' })`
  width: 0.875rem;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  color: ${defaultTheme.black};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${defaultTheme['gray-800']};
  }
`;
