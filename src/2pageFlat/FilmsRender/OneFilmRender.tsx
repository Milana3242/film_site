import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useOneFilmQuery } from '../../5entities/films/queries';
import MultiRangeSlider from 'multi-range-slider-react';
export interface IOneFilmRenderProps {}

export function OneFilmRender(props: IOneFilmRenderProps) {
  const [minValue, set_minValue] = React.useState(1);
  const [maxValue, set_maxValue] = React.useState(100);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const { id } = useParams();

  const { data: film, isLoading } = useOneFilmQuery(id);

  if (isLoading) {
    return <div>...</div>;
  } else {
    return (
      <div>
        {[film]?.map((item, i) => {
          return (
            <div className="flex justify-between gap-10">
              <div className="img-card">
                <img src="https://avatars.mds.yandex.net/i?id=c80878774f8e180c6f4b7993a008cd160794105c-5340565-images-thumbs&n=13" />
                <p className="mt-3 uppercase text-center">{item?.title}</p>
              </div>
              <div className="card-desk">
                <h1 className="text-[30px]">Описание к фильму</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                et eum? Quia, tempore iste vitae fugiat cumque neque nisi,
                repudiandae nesciunt necessitatibus minus accusamus consequuntur
                fuga soluta. Dignissimos, consectetur nam!
                <br></br>
                {item?.description}
              </div>
            </div>
          );
        })}
        <hr className="mt-10 mb-5" />{' '}
        {/* <ul className="flex justify-between mt-3">
        <li className="list-check__item">
          <label className="list-check__label">
            <input type="radio" name="min" value="5" />
            <span className="label-text">5 минут</span>
          </label>
        </li>
        <li className="list- check__item">
          <label className="list-check__label">
            <input type="radio" name="min" value="10" />
            <span className="label-text">10 минут</span>
          </label>
        </li>
        <li className="list- check__item">
          <label className="list-check__label">
            <input type="radio" name="min" value="20" />
            <span className="label-text">20 минут</span>
          </label>
        </li>
        <li className="list- check__item">
          <label className="list-check__label">
            <input type="radio" name="min" value="30" />
            <span className="label-text">30 минут</span>
          </label>
        </li>
      </ul> */}
        <div className="flex justify-between ">
          <div>
            <label>Выберите субтитры:</label>
            <select className="text-black ml-5" name="select">
              <option value="Russian">Russian</option>
              <option value="English">English</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
          <div>
            <label>Выберите субтитры:</label>
            <select className="text-black ml-5" name="select">
              <option value="Russian">Russian</option>
              <option value="English">English</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
        </div>
        <hr className="mt-10 mb-5" />{' '}
        <h2 className="time">Выберите длительность:</h2>
        <MultiRangeSlider
          min={1}
          max={100}
          step={5}
          stepOnly={true}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
        <div className="text-center mb-10">
          Длительность:{maxValue - minValue} минут
        </div>
        <hr className="mt-10 mb-5" /> <h2 className="time">Выберите режим:</h2>
        <ul className="flex justify-between mt-3">
          <li className="list-check__item">
            <label className="list-check__label">
              <input type="radio" name="trans" value="1" />
              <span className="label-text">Перевод по словам</span>
            </label>
          </li>
          <li className="list- check__item">
            <label className="list-check__label">
              <input type="radio" name="trans" value="2" />
              <span className="label-text">Перевод по предложениям</span>
            </label>
          </li>
        </ul>
        <div className="flex justify-center">
          <button className="pt-5 pb-5 pr-12 pl-12 bg-[#5f7ebe]">Нажать</button>
        </div>
      </div>
    );
  }
}
