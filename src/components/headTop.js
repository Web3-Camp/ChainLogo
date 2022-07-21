import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";

const Alink = styled.a`
    text-decoration: none;
  color: #666666;
`


export default function HeaderTop() {
    return <div className="header">
        <Container>
            <Row>
                <Col className="headerTxt" md={8} xs={12}>
                    <Alink href="/">Logo Collection</Alink></Col>
                <Col className="headetRht" md={4} xs={12}>&copy; Web3 Camp</Col>
            </Row>
        </Container>
    </div>
}
