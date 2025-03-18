import * as React from 'react';
import { Header } from '../../3widgets/Header';
import { Outlet } from 'react-router-dom';

export interface IAppProps {
}

export function DefaultLayout (props: IAppProps) {
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
         <Header></Header>
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet/>
            </div>
          </main>
        </div>
  );
}
