import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

export const CardSelectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 6rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background: white;
  border-radius: 8px;
  background-color: ${defaultTheme.white};
  padding: 10px;
  position: relative;
  z-index: 0;
`;

export const CardContent = styled.div`
  background: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 10rem;
  margin-bottom: 10px;
`;

export const CardPrice = styled.span`
  font-size: 18px;
  color: ${defaultTheme['gray-800']};
  font-weight: 700;
`;

export const ActionsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
  gap: 8px;
`;

export const groupCounter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
`;

export const ButtonRemove = styled.button`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  border: 0;
  border-radius: 100%;
  font-size: 12px;
  margin-left: 0.5rem;
  background-color: ${defaultTheme.black};
  position: absolute;
  right: -12px;
  top: -15px;
  z-index: 1;

  &:hover {
    background: ${defaultTheme['gray-500']};
    transition: background-color 0.2s;

    svg {
      color: ${defaultTheme.black};
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px ${defaultTheme['gray-700']};
  }

  svg {
    color: ${defaultTheme.white};
  }
`;
