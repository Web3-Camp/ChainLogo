import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import LogoImg from "../assets/web3camp.png";

const Alink = styled.a`
    text-decoration: none;
  color: #666666;
`


export default function HeaderTop() {
    return <div className="header">
        <Container>
            <Row>
                <Col className="headerTxt" md={12}>
                    <a href="https://web3camp.us" target="_blank" rel="noreferrer">
                        <img src={LogoImg} alt=""/>
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
}
