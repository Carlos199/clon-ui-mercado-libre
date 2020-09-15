import React from "react";

import tshirtImage from '../../assets/tshirt.png';
import { Container } from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartirla</a>
        <a href="#">Vender uno igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>
        </Column>
        <Column></Column>
      </Panel>
    </Container>
  );
};

export default Product;
