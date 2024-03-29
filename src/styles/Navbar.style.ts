import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';

// types
import type { StyledLinkProps } from '@/types/styled';

export const Navbar = tw.nav`
  flex
  h-full
  w-full
  flex-wrap
  flex-row
  items-center
  justify-center
  gap-2
  border-b
`;

export const NavListItem = styled(Link)<StyledLinkProps>(
  tw`
  rounded-3xl
  px-4
  py-2
  font-bold
  hover:text-blue-500
  `,
);
