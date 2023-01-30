import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 6.31rem;
  background: ${defaultTheme['blue-700']};
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 90rem;
  align-items: center;
  justify-content: space-between;
  max-width: 90rem;
  padding: 0 60px;
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;
