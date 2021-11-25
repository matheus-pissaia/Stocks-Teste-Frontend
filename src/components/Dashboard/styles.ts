import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: -3rem;

  background: var(--gray-900);
  border-radius: 1rem;

  box-shadow: 0px 10px 60px rgba(113, 41, 204, 0.4);
`;

export const StockList = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;