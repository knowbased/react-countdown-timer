import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    cursor: 'pointer',
    color: 'black',
    width: '180px',
    padding: '0.6em 1.2em',
    border: '1px solid transparent',
    transition: 'border-color 0.25s',
    _hover: { borderColor: 'secondary' },
    _focus: { outline: '4px auto -webkit-focus-ring-color' },
  },
  variants: {
    visual: {
      primary: { backgroundColor: 'primary' },
      transparent: { backgroundColor: 'transparent', color: 'secondary' },
    },
    size: {
      sm: { fontSize: 'sm' },
      lg: { fontSize: 'xl' },
    },
    shape: {
      square: { borderRadius: '8px' },
      circle: { borderRadius: 'full' },
    },
  },
  defaultVariants: {
    visual: 'primary',
    size: 'sm',
    shape: 'square',
  },
});
