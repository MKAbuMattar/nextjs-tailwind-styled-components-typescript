import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';

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
