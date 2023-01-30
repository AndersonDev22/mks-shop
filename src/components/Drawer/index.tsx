import { ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import type * as Stitches from '@stitches/react';

import { defaultTheme } from '../../styles/themes/default';
import * as S from './styles';

import { GeneralText } from '..';

type StyledContentVariants = Stitches.VariantProps<typeof S.StyledContent>;

interface IContentProps {
  openingPosition?: 'left' | 'right' | 'top' | 'bottom';
  card: ReactNode;
  content: ReactNode;
}

export function Drawer({
  openingPosition = 'left',
  card,
  content
}: IContentProps & StyledContentVariants) {
  return (
    <Dialog.Root>
      <S.Trigger>{card}</S.Trigger>
      {/* <S.StyledOverlay /> */}
      <S.StyledContent openingPosition={openingPosition}>
        {content}
        <S.ButtonFinalize>
          <GeneralText
            text="Finalizar Compra"
            fontSize="28px"
            fontWeight={700}
            color={defaultTheme.white}
          />
        </S.ButtonFinalize>
      </S.StyledContent>
    </Dialog.Root>
  );
}
