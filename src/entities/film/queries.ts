import { useQuery } from "@tanstack/react-query";
import {
  filmsControllerFindAll,
  filmsControllerFindOne,
} from "../../shared/api/generated";

const queryKey = ["films"];

export function useFilmsQuery() {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => filmsControllerFindAll(),
  });
}

export function useOneFilmQuery(id: string) {
  return useQuery({
    queryKey: [queryKey, id],
    queryFn: () => filmsControllerFindOne(id),
  });
}
