import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${defaultTheme.white};
  padding: 3rem 0;
`;

export const PostContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65rem;
  gap: 22px;
  justify-content: center;
  margin-bottom: 3rem;
`;
