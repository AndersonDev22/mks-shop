import * as Dialog from '@radix-ui/react-dialog';
import { keyframes, styled } from '@stitches/react';

import { defaultTheme } from '../../styles/themes/default';

const overlayShowLeft = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(100%)' }
});

const overlayShowRight = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(0)' }
});

const overlayShowTop = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(100%)' }
});

const overlayShowBottom = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0)' }
});

export const Trigger = styled(Dialog.Trigger, {
  backgroundColor: `${defaultTheme.white}`,
  borderRadius: 8,
  border: 'none',

  '&:hover': {
    backgroundColor: `${defaultTheme['gray-50']}`
  }
});

export const StyledOverlay = styled(Dialog.Overlay, {
  display: 'flex',
  width: '100%',
  height: '100%',
  position: 'fixed',
  inset: 0,
  background: 'rgb(0, 0, 0, 0.75)',
  opacity: 0.7
});

export const StyledContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  width: '26rem',
  height: '100%',
  background: `${defaultTheme['blue-700']}`,
  position: 'fixed',
  color: `${defaultTheme.black}`,
  justifyContent: 'space-between',
  alignItems: 'center',
  borderLeft: `${defaultTheme.white} solid 1px`,
  zIndex: 50,

  variants: {
    openingPosition: {
      left: {
        top: 0,
        left: '-25rem',
        animation: `${overlayShowLeft} 400ms linear forwards`
      },

      right: {
        top: 0,
        right: 0,
        animation: `${overlayShowRight} 400ms linear forwards`
      },

      top: {
        top: '-15rem',
        width: '100%',
        height: '15rem',
        animation: `${overlayShowTop} 400ms linear forwards`
      },

      bottom: {
        bottom: 0,
        width: '100%',
        height: '15rem',
        animation: `${overlayShowBottom} 400ms linear forwards`
      }
    }
  }
});

export const ProductsListContent = styled('div', {
  width: '100%',
  height: '100%',
  gap: '1.5rem',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: `${defaultTheme['blue-700']}`,
  padding: '15px',
  overflowX: 'hidden'
});

export const ButtonFinalize = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '20px',
  backgroundColor: `${defaultTheme.black}`
});

export const Total = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '18px',
  marginBottom: '10px'
});

export const ButtonClose = styled('button', {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  outline: 'none',
  marginLeft: '90%',
  marginTop: '10px',
  cursor: 'pointer'
});
