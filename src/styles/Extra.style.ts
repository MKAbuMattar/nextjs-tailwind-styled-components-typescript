import styled from 'styled-components';
import tw from 'twin.macro';

// types
type ButtonProps = {
  danger?: boolean;
  outline?: boolean;
  disabled?: boolean;
};

export const Title = tw.h1`
  text-6xl
  font-bold
`;

export const SubTitle = tw.h2`
  text-4xl
  font-bold
`;

export const ButtonGroup = tw.div`
  flex
  gap-2
  flex-wrap
  justify-center
  p-1
`;

export const Button = styled.button<ButtonProps>(
  ({ danger = false, outline = false, disabled = false }) => [
    danger
      ? tw`
        bg-red-500 
        hover:bg-red-700 
        text-white
      `
      : tw`
        bg-blue-500 
        hover:bg-blue-700 
        text-white
      `,
    outline
      ? danger
        ? tw`
          bg-transparent
          border
          border-red-500
          hover:border-transparent
          hover:bg-red-500
          text-red-700
          hover:text-white
        `
        : tw`
          bg-transparent
          border
          border-blue-500
          hover:border-transparent
          hover:bg-blue-500
          text-blue-700
          hover:text-white
        `
      : tw``,
    disabled ? tw`opacity-50 cursor-not-allowed` : tw`cursor-pointer`,
    tw`
      font-bold
      py-2
      px-4
      rounded
    `,
  ],
);