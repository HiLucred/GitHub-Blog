import { IssueBodyContainer } from "./styles";
import ReactMarkDown from "react-markdown";

interface IssueBodyProps {
  body: string;
}

export function IssueBody({ body }: IssueBodyProps) {
  return (
    <IssueBodyContainer>
      <ReactMarkDown children={body} />
    </IssueBodyContainer>
  );
}
