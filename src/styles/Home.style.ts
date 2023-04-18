import styled from 'styled-components';
import tw from 'twin.macro';
import Image from 'next/image';

export const Main = tw.main`flex flex-col min-h-screen  items-center justify-between p-24`;

export const Nav = tw.nav`z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex`;

export const CodeContainer = tw.p`fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border  lg:p-4 lg:dark:bg-zinc-800/30`;

export const Code = tw.code`font-mono font-bold`;

export const LogoContainer = tw.div`fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none`;

export const LogoLink = tw.a`pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0`;

export const Logo = styled(Image)(tw`dark:invert`);

export const Content = tw.div`relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]`;

export const ContentInnerImage = styled(Image)(
  tw`relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert`,
);

export const Cards = tw.div`mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left`;

export const Card = tw.a`rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`;

export const CardTitle = tw.h2`mb-3 text-2xl font-semibold`;

export const CardTitleIcon = tw.span`inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none`;

export const CardDescription = tw.p`m-0 max-w-[30ch] text-sm opacity-50`;
