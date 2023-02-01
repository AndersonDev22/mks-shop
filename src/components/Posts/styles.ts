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

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14.6rem;
  padding: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background: white;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${defaultTheme.white};
  position: relative;
`;

export const Image = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;
