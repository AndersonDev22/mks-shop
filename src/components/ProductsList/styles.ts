import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

export const ProductsListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const ProductsListContent = styled.div`
  width: 100%;
  height: 100%;
  gap: 1.5rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: ${defaultTheme['blue-700']};
  padding: 2rem 0;
`;

export const Total = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  flex-shrink: 0;
  margin: auto;
`;
