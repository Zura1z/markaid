import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Sidebar } from "./Sidebar/Sidebar";

type Props = JSX.IntrinsicElements["div"];

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <Container fluid={true}>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col className="px-4">{props.children}</Col>
        {/* <Col md={2}></Col> */}
      </Row>
    </Container>
  );
};

export default Layout;
