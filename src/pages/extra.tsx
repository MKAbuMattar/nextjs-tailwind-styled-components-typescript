import type { NextPage } from 'next';

//styles
import { Container, Main, Section } from '@/styles/Global.style';
import { Title, SubTitle, ButtonGroup, Button } from '@/styles/Extra.style';
import { Nav, NavListItem } from '@/styles/Nav.style';

const ExtraPage: NextPage = () => {
  return (
    <Container>
      <Nav>
        <NavListItem href="/">Go to Home Page</NavListItem>
        <NavListItem href="/extra">Go to Extra Page</NavListItem>
      </Nav>
      <Main>
        <Section>
          <Title>Extra Page</Title>
          <SubTitle>Conditional Button</SubTitle>
          <ButtonGroup>
            <Button>Primary</Button>
            <Button outline>Primary Outline</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>Primary Disabled</Button>
            <Button outline disabled>
              Primary Outline Disabled
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button danger>Danger</Button>
            <Button danger outline>
              Danger Outline
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button danger disabled>
              Danger Disabled
            </Button>
            <Button danger outline disabled>
              Danger Outline Disabled
            </Button>
          </ButtonGroup>
        </Section>
      </Main>
    </Container>
  );
};

export default ExtraPage;
