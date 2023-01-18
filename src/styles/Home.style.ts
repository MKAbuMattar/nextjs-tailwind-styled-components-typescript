import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';

// types
type ButtonProps = {
  danger?: boolean;
  outline?: boolean;
  disabled?: boolean;
};

export const Container = tw.div`
  flex
  min-h-screen
  flex-col
  items-center
  justify-center
  py-2
`;

export const Main = tw.main`
  flex
  w-full
  flex-1
  flex-col
  items-center
  justify-center
  px-20
  text-center
`;

export const Section = tw.section`
  flex
  flex-col
  items-center
  justify-center
  w-full
  p-3
`;

export const Title = tw.h1`
  text-6xl
  font-bold
`;

export const TitleLink = styled(Link)(
  tw`
  text-blue-500
  hover:text-blue-700
  focus:text-blue-700
  `,
);

export const Description = tw.p`
  mt-3
  text-2xl
`;

export const DescriptionCodeHighlight = tw.code`
  rounded-md
  bg-gray-100
  p-3
  font-mono 
  text-lg
`;

export const Cards = tw.div`
  mt-6 flex
  max-w-4xl
  flex-wrap
  items-center
  justify-around
  sm:w-full
`;

export const Card = styled(Link)(
  tw`
  mt-6
  w-96
  rounded-xl
  border
  p-6
  text-left
  hover:text-blue-600
  focus:text-blue-600
  `,
);

export const CardTitle = tw.h3`
  text-2xl
  font-bold
`;

export const CardDescription = tw.p`
  mt-4
  text-xl
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

export const Footer = tw.footer`
  flex
  h-24
  w-full
  items-center
  justify-center
  border-t
`;

export const FooterCopyRight = tw.a`
  flex
  items-center
  justify-center
  gap-2
`;
