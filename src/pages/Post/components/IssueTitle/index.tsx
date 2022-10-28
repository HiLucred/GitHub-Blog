import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IssueTitleContainer, IssueTitleHeader } from "./styles";
import { BaseLink, BaseTitle } from "../../../../components/Typography";
import { InfoTitle } from "../InfoTitle";
import { IssueData } from "../..";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

interface IssueTitleProps {
  issue: IssueData;
}

export function IssueTitle({ issue }: IssueTitleProps) {
  return (
    <IssueTitleContainer>
      <IssueTitleHeader>
        <BaseLink href="/">
          <FontAwesomeIcon icon={faChevronLeft} /> <span>VOLTAR</span>
        </BaseLink>

        <BaseLink href={issue.html_url}>
          <span>VER NO GITHUB</span>{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </BaseLink>
      </IssueTitleHeader>

      <BaseTitle level="large">{issue.title}</BaseTitle>

      <InfoTitle
        login={issue.login}
        created_at={issue.created_at}
        comments={issue.comments}
      />
    </IssueTitleContainer>
  );
}
