import type { NextPage } from 'next';
import Image from 'next/image';

//styles
import {
  Container,
  Main,
  Section,
  Footer,
  FooterCopyRight,
} from '@/styles/Global.style';

import {
  Title,
  TitleLink,
  Description,
  DescriptionCodeHighlight,
  Cards,
  Card,
  CardTitle,
  CardDescription,
} from '@/styles/Home.style';

import { Nav, NavListItem } from '@/styles/Nav.style';

const HomePage: NextPage = () => {
  return (
    <Container>
      <Nav>
        <NavListItem href="/">Go to Home Page</NavListItem>
        <NavListItem href="/extra">Go to Extra Page</NavListItem>
      </Nav>
      <Main>
        <Section>
          <Title>
            Welcome to <TitleLink href="https://nextjs.org">Next.js!</TitleLink>
          </Title>

          <Description>
            Get started by editing{' '}
            <DescriptionCodeHighlight>pages/index.tsx</DescriptionCodeHighlight>
          </Description>

          <Cards>
            <Card href="https://nextjs.org/docs">
              <CardTitle>Documentation &rarr;</CardTitle>
              <CardDescription>
                Find in-depth information about Next.js features and API.
              </CardDescription>
            </Card>

            <Card href="https://nextjs.org/learn">
              <CardTitle>Learn &rarr;</CardTitle>
              <CardDescription>
                Learn about Next.js in an interactive course with quizzes!
              </CardDescription>
            </Card>

            <Card href="https://github.com/vercel/next.js/tree/canary/examples">
              <CardTitle>Examples &rarr;</CardTitle>
              <CardDescription>
                Discover and deploy boilerplate example Next.js projects.
              </CardDescription>
            </Card>

            <Card
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardTitle>Deploy &rarr;</CardTitle>
              <CardDescription>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </CardDescription>
            </Card>
          </Cards>
        </Section>
      </Main>

      <Footer>
        <FooterCopyRight
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </FooterCopyRight>
      </Footer>
    </Container>
  );
};

export default HomePage;
