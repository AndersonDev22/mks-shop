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
  padding: 7.25rem 0;
`;

export const PostContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65rem;
  /* height: 30rem; */
  gap: 22px;
  justify-content: center;
`;
