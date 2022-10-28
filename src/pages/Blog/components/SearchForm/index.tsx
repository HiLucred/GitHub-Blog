import { BaseSpan } from "../../../../components/Typography";
import { HeaderForm, SearchFormContainer, SearchFormInput } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type searchFormData = z.infer<typeof searchFormSchema>;

interface PostsSectionProps {
  posts: number;
  fetchDataFromIssues: (query: string) => Promise<void>;
}

export function SearchForm({ posts, fetchDataFromIssues }: PostsSectionProps) {
  const { register, handleSubmit } = useForm<searchFormData>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchIssue(event: searchFormData) {
    await fetchDataFromIssues(event.query);
  }

  return (
    <SearchFormContainer>
      <HeaderForm>
        <h3>Publicações</h3>

        <BaseSpan>
          {posts} {posts > 1 ? "publicações" : "publicação"}
        </BaseSpan>
      </HeaderForm>

      <SearchFormInput onSubmit={handleSubmit(handleSearchIssue)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </SearchFormInput>
    </SearchFormContainer>
  );
}
