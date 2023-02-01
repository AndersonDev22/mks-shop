import styled from 'styled-components';

import { defaultTheme } from '../../styles/themes/default';

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
  margin-bottom: 10px;
`;
