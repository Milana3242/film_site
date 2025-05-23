import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { filmsControllerFindSubtitlesByFilmId } from "../../shared/api/generated";

const queryKey = ["subtitles-by-film-id"];

export function useSubtitlesByFilmIdQuery(filmId: string) {
  return useQuery({
    queryKey: [queryKey, filmId],
    queryFn: () => filmsControllerFindSubtitlesByFilmId(filmId),
  });
}
