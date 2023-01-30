import styled from 'styled-components';

export interface ITextStyleProps {
  padding?: string;
  margin?: string;
  width?: string;
  color?: string;
  fontSize?: string;
  backgroundColor?: string;
  borderRadius?: string;
  fontWeight?: number;
  lineHeigh?: string;
}

export const Text = styled.span<ITextStyleProps>`
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  line-height: ${({ margin }) => margin};
`;
