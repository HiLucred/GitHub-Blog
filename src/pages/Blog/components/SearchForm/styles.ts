import styled from "styled-components";

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;

  input {
    width: 100%;
  }
`;

export const HeaderForm = styled.div`
  margin-bottom: 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const SearchFormInput = styled.form`
  input {
    height: 3.125rem;
    padding: 1rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors["base-border"]};
    background: ${(props) => props.theme.colors["base-input"]};

    font-size: 1rem;
    color: white;

    &::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme.colors["base-label"]};
    }
  }
`;
