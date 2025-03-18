import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { filmsControllerFindAll } from "../6shared/api/generated";

export interface IMainProps {}

export function Main(props: IMainProps) {
  return (
    <div className="flex justify-between p-10 h-full">
      <div className="flex flex-col mt-20 ">
        <p className="text-4xl mb-3">
          Изучение английского по фильмам и сериалам
        </p>
        <p className="text-3xl">Учите английский вместе с нами!</p>
      </div>
      <div className="mr-10">
        <img src="https://puzzle-movies.com/assets/images/frame-2.png"></img>
      </div>
    </div>
  );
}
