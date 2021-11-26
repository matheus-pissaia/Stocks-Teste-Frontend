import styled from 'styled-components';

export const Nav = styled.nav`
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