import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5rem;
  padding: 0.4rem;
  border: 1px solid ${defaultTheme['gray-100']};
  gap: 4px;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: ${defaultTheme.white};
    border: ${defaultTheme['red-400']};
    color: ${defaultTheme.black};

    &:focus {
      outline: none;
    }
  }
`;

export const Button = styled.button.attrs({ type: 'button' })`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
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
