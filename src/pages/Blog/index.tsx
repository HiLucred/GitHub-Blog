import { Profile } from "./components/Profile";
import { IssuesSection } from "./components/IssuesSection";
import { SearchForm } from "./components/SearchForm";
import { BlogContainer, BlogContent } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { gitHubApi } from "../../lib/axios";

export interface Post {
  title: string;
  body: string;
  created_at: string;
  url?: string;
  number: number;
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const numberOfPosts = posts.length;

  const fetchDataFromIssues = useCallback(async (query?: string) => {
    const user = "hilucred";
    const repositoryName = "github-blog";

    const response = await gitHubApi.get("search/issues", {
      params: {
        q: `${query ? query : ""} repo:${user}/${repositoryName}`,
      },
    });

    setPosts(response.data.items);
  }, []);

  useEffect(() => {
    fetchDataFromIssues();
  }, []);

  return (
    <BlogContainer>
      <BlogContent>
        <Profile />

        <SearchForm
          posts={numberOfPosts}
          fetchDataFromIssues={fetchDataFromIssues}
        />

        <IssuesSection posts={posts} />
      </BlogContent>
    </BlogContainer>
  );
}
