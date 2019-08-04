import styled from 'styled-components';
import { elevation, transition, purple } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 320px;
  margin: 0 auto;
  color: ${purple};
  ${elevation[3]};
  ${transition({
      property: 'box-shadow'
  })};
  &:hover {
    ${elevation[5]}
  }
`;
