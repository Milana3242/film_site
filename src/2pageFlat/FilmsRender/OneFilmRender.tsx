import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useAuthRegisterQuery,
  useLessonQuery,
  useOneFilmQuery,
} from '../../5entities/films/queries';
import MultiRangeSlider from 'multi-range-slider-react';
import { useForm } from 'react-hook-form';

export interface IOneFilmRenderProps {}

export function OneFilmRender(props: IOneFilmRenderProps) {
  //   const [minValue, set_minValue] = React.useState(1);
  //   const [maxValue, set_maxValue] = React.useState(100);
  //   const handleInput = (e) => {
  //     set_minValue(e.minValue);
  //     set_maxValue(e.maxValue);
  //   };

  const { id } = useParams();

  const { data: film, isLoading } = useOneFilmQuery(id);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'onBlur',
  });

  //   const minValue = watch('minValue');
  //   const maxValue = watch('maxValue');

  let mutation = useLessonQuery();

  function onSubmit(item: any) {
    console.log(item);
    mutation.mutate(item);
  }

  //   function hangleSliderChange(min, max) {
  //     setValue('minValue', min);
  //     setValue('maxValue', max);
  //   }

  const myref = React.useRef('');
  console.log(myref.current);

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
        <hr className="mt-10 mb-5" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between ">
            <div>
              <label htmlFor="select1">Выберите субтитры:</label>
              <select
                {...register('targetSubtitleId')}
                className="text-black ml-5"
                id="select1"
              >
                <option value="1">Russian</option>
                <option value="2">English</option>
                <option value="3">Germany</option>
              </select>
            </div>
            <div>
              <label htmlFor="select2">Выберите субтитры:</label>
              <select
                {...register('sourceSubtitleId')}
                className="text-black ml-5"
                id="select2"
              >
                <option value="1">Russian</option>
                <option value="2">English</option>
                <option value="3">Germany</option>
              </select>
            </div>
          </div>
          <hr className="mt-10 mb-5" />
          {/* <label htmlFor="slider" className="time">
            Выберите длительность:
          </label> */}
          {/* <MultiRangeSlider
            id="slider"
            min={1}
            max={100}
            step={5}
            stepOnly={true}
            minValue={minValue}
            maxValue={maxValue}
            onChange={({ min, max }) => hangleSliderChange(min, max)}
          />        <div className="text-center mb-10">
          Длительность:{maxValue - minValue} минут
        </div> */}
          {/* <label htmlFor="type" className="mt-10 mb-5" />{' '} */}
          <h2 className="time">Выберите режим:</h2>
          <ul className="flex justify-between mt-3">
            <li className="list-check__item">
              <label htmlFor="type1" className="list-check__label">
                <input
                  id="type1"
                  {...register('type')}
                  type="radio"
                  name="trans"
                  value="1"
                />
                <span className="label-text">Перевод по словам</span>
              </label>
            </li>
            <li className="list- check__item">
              <label htmlFor="type2" className="list-check__label">
                <input
                  id="type2"
                  {...register('type')}
                  type="radio"
                  name="trans"
                  value="2"
                />
                <span className="label-text">Перевод по предложениям</span>
              </label>
            </li>
          </ul>
          <div className="flex justify-center">
            <button className="pt-5 pb-5 pr-12 pl-12 bg-[#5f7ebe]">
              Нажать
            </button>
          </div>
        </form>
      </div>
    );
  }
}
