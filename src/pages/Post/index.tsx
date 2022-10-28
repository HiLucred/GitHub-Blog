import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gitHubApi } from "../../lib/axios";
import { IssueBody } from "./components/IssueBody";
import { IssueTitle } from "./components/IssueTitle";
import { IssueContainer, IssueContent } from "./styles";

export interface IssueData {
  title: string;
  login: string;
  created_at: string;
  comments: number;
  body: string;
  html_url: string;
}

export function Post() {
  const [issue, setIssue] = useState<IssueData>({} as IssueData);
  const { issueNumber } = useParams();

  const fetchDataIssues = useCallback(async () => {
    const response = await gitHubApi.get(
      `/repos/hilucred/github-blog/issues/${issueNumber}`
    );

    const issue = {
      title: response.data.title,
      login: response.data.user.login,
      created_at: response.data.created_at,
      comments: response.data.comments,
      body: response.data.body,
      html_url: response.data.html_url,
    };

    setIssue(issue);
  }, []);

  useEffect(() => {
    fetchDataIssues();
  }, []);

  return (
    <IssueContainer>
      <IssueContent>
        <IssueTitle issue={issue} />
        <IssueBody body={issue.body} />
      </IssueContent>
    </IssueContainer>
  );
}
