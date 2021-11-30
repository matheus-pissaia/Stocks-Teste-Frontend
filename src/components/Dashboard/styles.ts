import styled from 'styled-components';

export const Container = styled.main`
  max-width: 960px;
  margin: -3rem auto 3rem;

  padding: 0 0 3rem 0;

  background: var(--gray-900);
  border-radius: 1rem;

  box-shadow: 0px 10px 60px rgba(113, 41, 204, 0.4);
`;

export const Content = styled.div`
  max-width: 508px;
  margin: 0 auto;
`;

export const LabelLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 324px;

  margin: 1.5rem 1.5rem 0.6rem auto;

  span {
    color: var(--gray-500);
    font-size: 0.7rem;
  }
`;

export const StockList = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;