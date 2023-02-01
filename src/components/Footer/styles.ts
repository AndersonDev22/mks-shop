import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${defaultTheme['gray-50']};
  padding: 15px;
  bottom: 0;
  flex-shrink: 0;
  margin: auto;
  position: absolute;
  left: 0;
`;

export const FooterLink = styled.a`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-decoration: none;
`;
