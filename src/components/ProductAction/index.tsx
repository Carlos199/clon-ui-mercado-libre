import React from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta Blanca de Marca desconocida</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">Gs.</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>en 3x de Gs. 25.000</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estock disponible</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="Title">Envios Gratis</span>
          <span className="details">Beneficio Lorem Ipsum</span>
          <a href="#" className="more">
            Ver mas opciones
                  </a>
        </div>
      </MethodCard>
      <Actions>
        <Button solid>Comprar Ahora</Button>
        <Button>Adicionar al carrito</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra Garantizada, recibe el producto que estas esperando o le devolvemos su dinero.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;