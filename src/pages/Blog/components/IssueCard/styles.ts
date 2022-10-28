import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BaseSpan } from "../../../../components/Typography";

export const IssueCardContainer = styled.article`
  max-width: 26rem;
  width: 100%;
  height: 16.25rem;
  padding: 2rem 2rem 1.8rem 2rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.4s;
  background: ${(props) => props.theme.colors["base-post"]};

  &:hover {
    border: 2px solid ${(props) => props.theme.colors["base-label"]};
  }
`;

export const HeaderIssueCard = styled.div`
  min-height: 3.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.8rem;
`;

export const PostedAt = styled(BaseSpan)`
  width: 5.1rem;
  text-align: center;
`;

export const TitleLink = styled.a`
  color: ${(props) => props.theme.colors["base-title"]};
`;
