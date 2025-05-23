import * as React from "react";
import { Link } from "@tanstack/react-router";

export interface IAppProps {}

export function Header(props: IAppProps) {
  return (
    <div className="flex justify-between items-center p-5 bg-gray-800">
      <div>
        <Link className="flex items-center gap-2 font-bold" to={"/"}>
          <img
            src="../../public/logoFilm.png"
            className="w-[55px]"
            alt="logo"
          />
          <span>MovieLearns</span>
        </Link>
      </div>
      <div className="flex gap-3">
        <Link to={"."}>О нас</Link>
        <Link to={"."}>Вопросы</Link>
        <Link to={"/auth/signup"}>Авторизация</Link>
      </div>
    </div>
  );
}
