import styled from "styled-components";
import { BaseLink } from "../../../../components/Typography";

export const ProfileContainer = styled.section`
  height: 13.25rem;
  padding: 2rem;
  border-radius: 10px;
  margin-top: -10%;
  margin-bottom: 4.5rem;

  display: flex;

  background: ${(props) => props.theme.colors["base-profile"]};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const ProfileAvatar = styled.div`
  padding-left: 0.5rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileText = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GitHubLink = styled(BaseLink)`
  position: absolute;
  top: 2.5rem;
  right: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 1rem;
`
