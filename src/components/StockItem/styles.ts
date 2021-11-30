import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  max-width: 508px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.8rem;

  background: var(--gray-900);
  color: var(--gray-100);

  padding: 1.5rem 1.5rem;

  transition: all 0.3s ease;
  cursor: pointer;

  user-select: none;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      margin-left: 4rem;
    }
  }

  &:hover {
    filter: brightness(0.8);
    transform: translateY(-0.4rem);
  }
`;