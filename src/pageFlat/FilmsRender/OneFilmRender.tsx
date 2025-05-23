import * as React from "react";
import { useParams } from "@tanstack/react-router";
import { useOneFilmQuery } from "@/entities/film";
import { useForm } from "react-hook-form";
import { useSubtitlesByFilmIdQuery } from "@/entities/subtitle";
import { useCreateLesson } from "@/features/lesson";
export interface IOneFilmRenderProps {}
import { Range } from "react-range";

export function OneFilmRender(props: IOneFilmRenderProps) {
  //   const [minValue, set_minValue] = React.useState(1);
  //   const [maxValue, set_maxValue] = React.useState(100);
  //   const handleInput = (e) => {
  //     set_minValue(e.minValue);
  //     set_maxValue(e.maxValue);
  //   };

  const { filmId } = useParams({ strict: false });

  if (!filmId) {
    return <div>Film ID not found</div>;
  }
  const { data: film, isLoading } = useOneFilmQuery(filmId);
  const { data: subtitles, isLoading: isSubtitlesLoading } =
    useSubtitlesByFilmIdQuery(filmId);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useCreateLesson({
    filmId: +filmId,
  });

  const [values, setValues] = React.useState([0, 25]);

  // Синхронизация значений Range с формой (в миллисекундах)
  React.useEffect(() => {
    setValue("startTime", values[0] * 60 * 1000); // минуты в миллисекунды
    setValue("endTime", values[1] * 60 * 1000); // минуты в миллисекунды
  }, [values, setValue]);

  //   const minValue = watch('minValue');
  //   const maxValue = watch('maxValue');

  //let mutation = useLessonQuery();

  function onSubmit(item: any) {
    console.log(item);
    //mutation.mutate(item);
  }

  //   function hangleSliderChange(min, max) {
  //     setValue('minValue', min);
  //     setValue('maxValue', max);
  //   }

  const myref = React.useRef("");
  console.log(myref.current);

  if (isLoading) {
    return <div>...</div>;
  } else {
    return (
      <div>
        <div className="flex justify-between gap-10">
          <div className="img-card">
            <img src="https://avatars.mds.yandex.net/i?id=c80878774f8e180c6f4b7993a008cd160794105c-5340565-images-thumbs&n=13" />
            <p className="mt-3 uppercase text-center">{film?.title}</p>
          </div>
          <div className="card-desk">
            <h1 className="text-[30px]">{film?.title}</h1>
            <br></br>
            {film?.description}
          </div>
        </div>

        <hr className="mt-10 mb-5" />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between ">
            <div>
              <label htmlFor="select1">Выберите родной язык:</label>
              <select
                {...register("targetSubtitleId", {
                  required: "Выберите субтитры",
                })}
                className="text-black ml-5"
                id="select1"
              >
                <option value="">Выберите субтитры</option>
                {subtitles?.map((item) => (
                  <option value={item.id}>{item.language}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="select2">Выберите изучаемый язык:</label>
              <select
                {...register("sourceSubtitleId", {
                  required: "Выберите субтитры",
                })}
                disabled={!watch("targetSubtitleId")}
                className="text-black ml-5"
                id="select2"
              >
                <option value="">Выберите субтитры</option>
                {subtitles
                  ?.filter((item) => item.id !== +watch("targetSubtitleId"))
                  .map((item) => (
                    <option value={item.id}>{item.language}</option>
                  ))}
              </select>
            </div>
          </div>
          <hr className="mt-10 mb-5" />
          <label htmlFor="slider" className="time">
            Выберите длительность:
          </label>

          <Range
            step={1}
            min={0}
            max={200}
            values={values}
            onChange={(newValues) => {
              setValues(newValues);
            }}
            renderTrack={({ props, children }) => (
              <div {...props} className="h-2 bg-gray-200 rounded w-full">
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div {...props} className="h-6 w-6 bg-blue-500 rounded-full" />
            )}
          />

          <div className="text-center mt-2">
            Диапазон: {values[0]} - {values[1]} минут (Длительность:{" "}
            {values[1] - values[0]} мин)
          </div>
          {/* <label htmlFor="type" className="mt-10 mb-5" />{' '} */}
          <h2 className="time">Выберите режим:</h2>
          <ul className="flex justify-between mt-3">
            <li className="list-check__item">
              <label htmlFor="type1" className="list-check__label">
                <input
                  id="type1"
                  {...register("type", {
                    required: "Выберите режим",
                  })}
                  type="radio"
                  name="type"
                  value="WORD"
                />
                <span className="label-text">Перевод по словам</span>
              </label>
            </li>
            <li className="list-check__item">
              <label htmlFor="type2" className="list-check__label">
                <input
                  id="type2"
                  {...register("type", {
                    required: "Выберите режим",
                  })}
                  type="radio"
                  name="type"
                  value="SENTENCE"
                />
                <span className="label-text">Перевод по предложениям</span>
              </label>
            </li>
          </ul>
          <div className="flex justify-center mb-5">
            {Object.keys(errors).length > 0 && (
              <div className="text-red-500">
                {Object.values(errors).map((error) => (
                  <p key={error.message}>{error.message}</p>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button className="pt-5 pb-5 pr-12 pl-12 bg-[#5f7ebe]">
              Создать урок
            </button>
          </div>
        </form>
      </div>
    );
  }
}
