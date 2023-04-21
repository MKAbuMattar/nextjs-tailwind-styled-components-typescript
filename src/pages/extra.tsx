import type { NextPage } from 'next';

//styles
import { Container, Main } from '@/styles/Global.style';
import { Title, SubTitle, ButtonGroup, Button } from '@/styles/Extra.style';
import { Navbar, NavListItem } from '@/styles/Navbar.style';

const ExtraPage: NextPage = () => {
  return (
    <Container>
      <Navbar>
        <NavListItem href="/">Go to Home Page</NavListItem>
        <NavListItem href="/extra">Go to Extra Page</NavListItem>
      </Navbar>
      <Main>
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
      </Main>
    </Container>
  );
};

export default ExtraPage;
