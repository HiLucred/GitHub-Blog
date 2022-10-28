import { Post } from "../..";
import { IssueCard } from "../IssueCard";
import { IssuesSectionContainer } from "./styles";

interface IssuesSectionProps {
  posts: Post[];
}

export function IssuesSection({ posts }: IssuesSectionProps) {
  return (
    <IssuesSectionContainer>
      {posts.map((item) => {
        return (
          <IssueCard
            key={item.title}
            title={item.title}
            body={item.body}
            created_at={item.created_at}
            number={item.number}
          />
        );
      })}
    </IssuesSectionContainer>
  );
}
