import styled from "styled-components";

export const IssueTitleContainer = styled.div`
  height: 10.5rem;
  padding: 2rem;
  border-radius: 10px;
  margin-top: -10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  background: ${(props) => props.theme.colors["base-profile"]};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

export const IssueTitleHeader = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
