import styled from 'styled-components';

export const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  margin-top: -3rem;

  padding: 0 0 3rem 0;

  background: var(--gray-900);
  border-radius: 1rem;

  box-shadow: 0px 10px 60px rgba(113, 41, 204, 0.4);
`;

export const Content = styled.div`
  max-width: 608px;
  margin: 0 auto;
`;

export const TabNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  padding: 3rem;
`;

interface TabButtonProps {
  isActive: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  border: none;
  border-bottom: ${(props) => props.isActive
    ? '2px solid var(--purple)'
    : 'none'
  };
  background: transparent;

  width: fit-content;
  height: 2rem;

  span {
    color: ${(props) => props.isActive
      ? 'var(--gray-100)'
      : 'var(--gray-500)'
    };

    font-size: 1rem;
    font-weight: ${(props) => props.isActive
      ? '600'
      : '400'
    };
  }

  &:hover {
    border-bottom: ${(props) => props.isActive
      ? ''
      : '1px solid var(--gray-500)'
    };
  }
`;

export const LabelLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 424px;

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