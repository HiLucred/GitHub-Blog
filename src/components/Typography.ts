import styled from "styled-components";

interface BaseTitleProps {
  level: "large" | "medium";
  pointer?: "pointer";
}

export const BaseTitle = styled.h2<BaseTitleProps>`
  color: ${(props) => props.theme.colors["base-title"]};
  line-height: 2rem;
  cursor: ${(props) => props.pointer === "pointer" && "pointer"};
  font-weight: 700;
  font-size: ${({ level, theme }) =>
    `${
      level === "large"
        ? theme.fontsSizes["title-name"]
        : theme.fontsSizes["title"]
    }`};
`;

export const BaseText = styled.p`
  font-size: ${(props) => props.theme.fontsSizes["text-regular"]};
  line-height: 1.6rem;

  color: ${(props) => props.theme.colors["base-text"]};

  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 4; // Quantidade de linhas
  -webkit-box-orient: vertical;
`;

export const BaseSpan = styled.span`
  color: ${(props) => props.theme.colors["base-span"]};
  font-size: ${(props) => props.theme.fontsSizes["text-span"]};
  font-weight: 400;
`;

export const BaseLink = styled.a`
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.colors["blue"]};
  border-bottom: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors["blue"]};
  }
`;
