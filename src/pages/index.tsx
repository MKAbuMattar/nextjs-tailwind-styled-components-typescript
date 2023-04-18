import type { NextPage } from 'next';
import Image from 'next/image';

// font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// style
import {
  Main,
  Nav,
  CodeContainer,
  Code,
  LogoContainer,
  LogoLink,
  Logo,
  Content,
  ContentInnerImage,
  Cards,
  Card,
  CardTitle,
  CardTitleIcon,
  CardDescription,
} from '@/styles/Home.style';

const HomePage: NextPage = () => {
  return (
    <Main>
      <Nav>
        <CodeContainer>
          Get started by editing&nbsp;
          <Code>src/pages/index.tsx</Code>
        </CodeContainer>
        <LogoContainer>
          <LogoLink
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Logo
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </LogoLink>
        </LogoContainer>
      </Nav>

      <Content>
        <ContentInnerImage
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </Content>

      <Cards>
        <Card
          className={'group'}
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardTitle className={`${inter.className}`}>
            Docs <CardTitleIcon>-&gt;</CardTitleIcon>
          </CardTitle>
          <CardDescription className={`${inter.className}`}>
            Find in-depth information about Next.js features and API.
          </CardDescription>
        </Card>

        <Card
          className={'group'}
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardTitle className={`${inter.className}`}>
            Learn <CardTitleIcon>-&gt;</CardTitleIcon>
          </CardTitle>
          <CardDescription className={`${inter.className}`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </CardDescription>
        </Card>

        <Card
          className={'group'}
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardTitle className={`${inter.className}`}>
            Templates <CardTitleIcon>-&gt;</CardTitleIcon>
          </CardTitle>
          <CardDescription className={`${inter.className}`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </CardDescription>
        </Card>

        <Card
          className={'group'}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardTitle className={`${inter.className}`}>
            Deploy <CardTitleIcon>-&gt;</CardTitleIcon>
          </CardTitle>
          <CardDescription className={`${inter.className}`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </CardDescription>
        </Card>
      </Cards>
    </Main>
  );
};

export default HomePage;
