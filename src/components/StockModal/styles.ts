import styled from 'styled-components';

export const Container = styled.div`
  div + div {
    width: 100%;

    border: 1px solid var(--gray-700);

    margin-top: 0.5rem;
  }

  img {
    height: 100%;
    width: 100%;
    margin-top: 3rem;
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

export const SubscribeButton = styled.button`
  background: var(--purple);
  border: 0;
  border-radius: 0.5rem;

  color: var(--gray-100);
  
  width: 100%;
  padding: 1rem;

  margin-top: 3rem;

  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.7);
  }

  strong {
    font-size: 1rem;
    text-transform: uppercase;
  }
`;