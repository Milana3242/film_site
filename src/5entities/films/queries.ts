import { useQuery } from "@tanstack/react-query";
import { filmsControllerFindAll, filmsControllerFindOne } from "../../6shared/api/generated";

export function useFilmsQuery() {
  return useQuery({
    queryKey: ["films"],
    queryFn: () => filmsControllerFindAll(),
  });
}

export function useOneFilmQuery(id:string) {
  return useQuery({
    queryKey: ["onefilm"],
    queryFn: () => filmsControllerFindOne(id),
  });
}
