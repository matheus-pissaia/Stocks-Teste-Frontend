import styled from 'styled-components';

export const Container = styled.div`
  div + div {
    width: 100%;

    border: 1px solid var(--gray-700);

    margin-top: 0.5rem;
  }
`;

export const StockInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  strong {
    font-size: 3rem;
    color: var(--gray-100);
  }

  p, span {
    color: var(--gray-500);
  }

  span {
    font-size: 0.8rem;
    font-style: italic;
  }
`;
