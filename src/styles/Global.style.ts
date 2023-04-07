import tw from 'twin.macro';

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
