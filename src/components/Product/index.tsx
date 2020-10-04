import React from "react";

import SellerInfo from "../Sellerinfo";
import tshirtImage from '../../assets/tshirt.png';
import ProductAction from "../ProductAction";
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

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

          <Info />
        </Column>
        <Column>

          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};
const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra con garantia</p>
        <p className="description">
          Recibe el producto con la mejor garantia del año, somo empresa seria
          entregamos 1 año de garantia por el producto.       </p>
      </span>
      <span>
        <p className="title">Garantia del vendedor</p>
        <p className="description">Sin garantia</p>
      </span>
    </div>
    <a href="#">Saber mas sobre la garantia</a>
  </Section>
)
const Info = () => (
  <Description>
    <h2>Descriccion</h2>
    <p>
      Probando describir un producto y ver que tal queda despues en la panatalla.
    <br />
      <br />
    Items Iclusos: <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
      <br />
    Remera blanca con mangas cortas, que esperas para lucir esta hermosa remera, llevalo a todas partes ideal para el trabajo, para salir, o para ir a la playa.
    No esperes mas llamanos al 098342224.
    </p>
  </Description>
)

export default Product;
