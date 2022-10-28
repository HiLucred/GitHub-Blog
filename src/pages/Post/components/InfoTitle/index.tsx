import { faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLogo } from "phosphor-react";
import { useTheme } from "styled-components";
import { InfoBox } from "../../../../components/InfoBox";
import { BaseSpan } from "../../../../components/Typography";
import { relativeDateFormatter } from "../../../../utils/formatter";

interface InfoTitleProps {
  login: string;
  created_at: string;
  comments: number;
}

export function InfoTitle({ login, created_at, comments }: InfoTitleProps) {
  const { colors } = useTheme();
  const formattedCreatedAt = relativeDateFormatter(created_at);

  return (
    <InfoBox>
      <li>
        <GithubLogo color={colors["base-label"]} />
        <BaseSpan>{login}</BaseSpan>
      </li>

      <li>
        <FontAwesomeIcon icon={faCalendarDay} color={colors["base-label"]} />
        <BaseSpan>{formattedCreatedAt}</BaseSpan>
      </li>

      <li>
        <FontAwesomeIcon icon={faComment} color={colors["base-label"]} />
        <BaseSpan>
          {comments} {comments > 1 ? "comentários" : "comentário"}
        </BaseSpan>
      </li>
    </InfoBox>
  );
}
