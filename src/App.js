import styled from "styled-components";
import {Container, Row, Col, Card} from 'react-bootstrap';
import HeaderTop from "./components/headTop";
import FooterBox from "./components/footerBox";
import { HashRouter as Router } from 'react-router-dom'
import RouterLink from "./router/router";
import GloablStyle from "./GloablStyle";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const MainBox = styled.div`
    display: flex;
  flex-grow: 1;
`

const BgBox = styled(Container)`
  margin-top: 30px;
  display: flex;
  width: 100%;
  padding-right: 0;
`
const RowBox = styled(Row)`
  height: 100%;
  width: 100%;
  
`

const CardBox = styled.div`
  //border:0;
  //box-shadow: 0 0 5px #ccc;
  //border-radius: 6px;
  //height: 100%;
`

function App() {
  return (
      <Router>
      <MainContent>
        <HeaderTop />
        <MainBox>
          <BgBox>
            <RowBox>
              <Col md={12} xs={12}>
                  <CardBox>
                  <RouterLink />

              </CardBox></Col>
            </RowBox>
          </BgBox>
        </MainBox>
        <FooterBox />
        <GloablStyle />
      </MainContent>
      </Router>
  );
}

export default App;
