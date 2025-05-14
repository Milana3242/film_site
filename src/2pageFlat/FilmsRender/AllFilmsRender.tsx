import { useQuery, useQueryClient } from '@tanstack/react-query';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { filmsControllerFindAll } from '../../6shared/api/generated';
import { useFilmsQuery } from '../../5entities/films/queries';

export interface IMainProps {}

export function AllFilmsRender(props: IMainProps) {
  const { data: films } = useFilmsQuery();
  console.log(films);

  return (
    <div className="flex flex-wrap justify-between gap-8 mt-12 p-8">
      {films?.map((film) => {
        return (
          <div className="w-1/3 bg-[#334872] p-2 pb-5 text-decoration-none transition duration-500">
            <Link to={`/film-open/${film.id}`}>
              <img
                className="cardImg"
                src="https://avatars.mds.yandex.net/i?id=c80878774f8e180c6f4b7993a008cd160794105c-5340565-images-thumbs&n=13"
              />
              <p className="text-[20px] uppercase text-center text-red-600 mt-5 ">
                {film.title}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
