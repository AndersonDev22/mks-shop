import * as S from './styles';

export interface ITextProps {
  text: string | number | undefined;
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

export function GeneralText({
  text = '',
  padding = '',
  margin = '',
  width = '',
  color = '',
  fontSize = '16px',
  backgroundColor = '',
  borderRadius = '',
  fontWeight = 0,
  lineHeigh = ''
}: ITextProps) {
  return (
    <S.Text
      padding={padding}
      color={color}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      margin={margin}
      lineHeigh={lineHeigh}
      width={width}
    >
      {text}
    </S.Text>
  );
}
