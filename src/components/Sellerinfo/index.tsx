import React from "react";
import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informacion sobre el vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localizacion</p>
          <strong>Villarrica, Paraguay</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta un buen servicio</span>
          </div>

          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Ventas de ultimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mas datos del vendedor<More />
    </Container>
  );
};
export default SellerInfo;