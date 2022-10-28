import { BaseText, BaseTitle } from "../../../../components/Typography";
import { Post } from "../..";
import {
  HeaderIssueCard,
  IssueCardContainer,
  PostedAt,
  TitleLink,
} from "./styles";
import { relativeDateFormatter } from "../../../../utils/formatter";

export function IssueCard({ title, body, created_at, number }: Post) {
  const createdAtFormatted = relativeDateFormatter(created_at);

  return (
    <IssueCardContainer>
      <HeaderIssueCard>
        <BaseTitle level="medium" pointer="pointer">
          <TitleLink href={`/post/${number}`}>{title}</TitleLink>
        </BaseTitle>

        <PostedAt>{createdAtFormatted}</PostedAt>
      </HeaderIssueCard>

      <BaseText>{body}</BaseText>
    </IssueCardContainer>
  );
}
