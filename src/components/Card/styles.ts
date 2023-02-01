import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14.6rem;
  padding: 15px 0 0 0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background: white;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${defaultTheme.white};
`;

export const CardContent = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 10rem;
  margin-bottom: 10px;
  padding: 15px;
`;

export const CardPrice = styled.span`
  font-size: 15px;
  padding: 4px 6px;
  background-color: ${defaultTheme['gray-800']};
  color: ${defaultTheme.white};
  font-weight: 700;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const CardButton = styled.button`
  width: 100%;
  height: 2rem;
  align-items: center;
  justify-content: center;
  background: ${defaultTheme['blue-700']};
  color: ${defaultTheme.white};
  border: none;
  padding: 4px;
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  opacity: 80%;
  margin-top: 10px;

  &:hover {
    opacity: 100%;
  }
`;

export const ButtonAddCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${defaultTheme.white};
  color: ${defaultTheme.black};
  border-radius: 6px;
  margin-left: 0.3rem;
  transition: 0.4s;
  &:hover {
    background: ${defaultTheme['gray-100']};
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;

  > div {
    display: flex;
    align-items: flex-end;
    gap: 4px;
  }
`;

export const Image = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`;
