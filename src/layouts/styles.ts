import styled from "styled-components"

export const DefaultLayoutContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;

  background: ${props=>props.theme.colors['base-background']};
`