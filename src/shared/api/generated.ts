/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Films Subtitles API
 * API for films subtitles
 * OpenAPI spec version: 1.0
 */
import { createInstance } from './api-instance';
import type { BodyType } from './api-instance';
export interface CreateFilmDto {
  title: string;
  description: string;
  image: string;
  season: number;
  episode: number;
  type: string;
}

export interface FilmEntity {
  id: number;
  title: string;
  description: string;
  image: string;
  season: number;
  episode: number;
  createdAt: string;
  updatedAt: string;
}

export interface SubtitleDto {
  language: string;
  id: number;
  filmId: number;
  film: FilmEntity;
  createdAt: string;
  updatedAt: string;
  fileId: number;
}

export interface UpdateFilmDto { [key: string]: unknown }

export interface CreateSubtitleDto {
  language: string;
  filmId: number;
  fileId: number;
}

export interface SubtitleLineEntity {
  id: number;
  startTime: number;
  endTime: number;
  text: string;
  subtitleId: number;
}

export interface WordEntity {
  id: number;
  original: string;
  language: string;
}

export interface UpdateSubtitleDto {
  language?: string;
  filmId?: number;
  fileId?: number;
}

export interface CreateWordDto {
  original: string;
  language: string;
}

export interface UpdateWordDto {
  original?: string;
  language?: string;
}

export interface FileUploadDto {
  id: number;
  filename: string;
  path: string;
  mimetype: string;
  size: number;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateSubtitleLineDto {
  startTime?: number;
  endTime?: number;
  text?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthEntity {
  accessToken: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface UserEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
}

export interface CreateLessonDto {
  filmId: number;
  startTime: number;
  endTime: number;
  targetSubtitleId: number;
  sourceSubtitleId: number;
  type: string;
}

export type LessonEntityTargetSubtitle = { [key: string]: unknown };

export type LessonEntitySourceSubtitle = { [key: string]: unknown };

export type LessonEntityFilm = { [key: string]: unknown };

export interface LessonEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  startTime: number;
  endTime: number;
  targetSubtitle: LessonEntityTargetSubtitle;
  sourceSubtitle: LessonEntitySourceSubtitle;
  film: LessonEntityFilm;
}

export interface SubtitleLineDto {
  id: number;
  startTime: number;
  endTime: number;
  text: string;
  subtitleId: number;
}

export interface UpdateLessonDto {
  filmId?: number;
  startTime?: number;
  endTime?: number;
  targetSubtitleId?: number;
  sourceSubtitleId?: number;
  type?: string;
}

export type CreateProgressDtoQuality = typeof CreateProgressDtoQuality[keyof typeof CreateProgressDtoQuality];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CreateProgressDtoQuality = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;

export type CreateProgressDtoType = typeof CreateProgressDtoType[keyof typeof CreateProgressDtoType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CreateProgressDtoType = {
  WORD: 'WORD',
  SENTENCE: 'SENTENCE',
} as const;

export interface CreateProgressDto {
  subtitleLineId: number;
  wordId: number;
  quality: CreateProgressDtoQuality;
  type: CreateProgressDtoType;
}

export interface ProgressEntity {
  id: number;
  type: string;
  nextReview: string;
  word: WordEntity;
  subtitleLine: SubtitleLineEntity;
}

export type UpdateProgressDtoQuality = typeof UpdateProgressDtoQuality[keyof typeof UpdateProgressDtoQuality];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UpdateProgressDtoQuality = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;

export type UpdateProgressDtoType = typeof UpdateProgressDtoType[keyof typeof UpdateProgressDtoType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UpdateProgressDtoType = {
  WORD: 'WORD',
  SENTENCE: 'SENTENCE',
} as const;

export interface UpdateProgressDto {
  subtitleLineId?: number;
  wordId?: number;
  quality?: UpdateProgressDtoQuality;
  type?: UpdateProgressDtoType;
}

export type SubtitlesControllerFindLinesParams = {
endTime?: number;
startTime?: number;
};

export type SubtitlesControllerFindWordsParams = {
endTime?: number;
startTime?: number;
};

export type FileUploadControllerGetFilesParams = {
/**
 * Comma-separated list of file IDs (e.g., "1,2,3")
 */
fileIds?: string;
};

export type FileUploadControllerUploadFilesBody = {
  files?: Blob[];
};

export type SubtitleLinesControllerFindParams = {
subtitleId: number;
endTime?: number;
startTime?: number;
};

export type SubtitleLinesControllerFindWordsParams = {
subtitleId: number;
endTime?: number;
startTime?: number;
};

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];


  export const appControllerGetHello = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/`, method: 'GET'
    },
      options);
    }
  
export const filmsControllerCreate = (
    createFilmDto: BodyType<CreateFilmDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/films`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createFilmDto
    },
      options);
    }
  
export const filmsControllerFindAll = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<FilmEntity[]>(
      {url: `/films`, method: 'GET'
    },
      options);
    }
  
export const filmsControllerFindSubtitlesByFilmId = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<SubtitleDto[]>(
      {url: `/films/${id}/subtitles`, method: 'GET'
    },
      options);
    }
  
export const filmsControllerFindOne = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<FilmEntity>(
      {url: `/films/${id}`, method: 'GET'
    },
      options);
    }
  
export const filmsControllerUpdate = (
    id: string,
    updateFilmDto: BodyType<UpdateFilmDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/films/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateFilmDto
    },
      options);
    }
  
export const filmsControllerRemove = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/films/${id}`, method: 'DELETE'
    },
      options);
    }
  
export const subtitlesControllerCreate = (
    createSubtitleDto: BodyType<CreateSubtitleDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/subtitles`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createSubtitleDto
    },
      options);
    }
  
export const subtitlesControllerFindAll = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<SubtitleDto[]>(
      {url: `/subtitles`, method: 'GET'
    },
      options);
    }
  
export const subtitlesControllerFindLines = (
    id: string,
    params?: SubtitlesControllerFindLinesParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<SubtitleLineEntity[]>(
      {url: `/subtitles/${id}/lines`, method: 'GET',
        params
    },
      options);
    }
  
export const subtitlesControllerFindWords = (
    id: string,
    params?: SubtitlesControllerFindWordsParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<WordEntity[]>(
      {url: `/subtitles/${id}/words`, method: 'GET',
        params
    },
      options);
    }
  
export const subtitlesControllerFindOne = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<SubtitleDto>(
      {url: `/subtitles/${id}`, method: 'GET'
    },
      options);
    }
  
export const subtitlesControllerUpdate = (
    id: string,
    updateSubtitleDto: BodyType<UpdateSubtitleDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/subtitles/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateSubtitleDto
    },
      options);
    }
  
export const subtitlesControllerRemove = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/subtitles/${id}`, method: 'DELETE'
    },
      options);
    }
  
export const wordsControllerCreate = (
    createWordDto: BodyType<CreateWordDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/words`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createWordDto
    },
      options);
    }
  
export const wordsControllerFindAll = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/words`, method: 'GET'
    },
      options);
    }
  
export const wordsControllerFindOne = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/words/${id}`, method: 'GET'
    },
      options);
    }
  
export const wordsControllerUpdate = (
    id: string,
    updateWordDto: BodyType<UpdateWordDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/words/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateWordDto
    },
      options);
    }
  
export const wordsControllerRemove = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/words/${id}`, method: 'DELETE'
    },
      options);
    }
  
export const fileUploadControllerGetFiles = (
    params?: FileUploadControllerGetFilesParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<FileUploadDto[]>(
      {url: `/upload`, method: 'GET',
        params
    },
      options);
    }
  
export const fileUploadControllerUploadFiles = (
    fileUploadControllerUploadFilesBody: BodyType<FileUploadControllerUploadFilesBody>,
 options?: SecondParameter<typeof createInstance>,) => {const formData = new FormData();
if(fileUploadControllerUploadFilesBody.files !== undefined) {
 fileUploadControllerUploadFilesBody.files.forEach(value => formData.append('files', value));
 }

      return createInstance<FileUploadDto[]>(
      {url: `/upload`, method: 'POST',
      headers: {'Content-Type': 'multipart/form-data', },
       data: formData
    },
      options);
    }
  
export const subtitleLinesControllerFind = (
    params: SubtitleLinesControllerFindParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<SubtitleLineEntity[]>(
      {url: `/subtitle-lines`, method: 'GET',
        params
    },
      options);
    }
  
export const subtitleLinesControllerFindWords = (
    params: SubtitleLinesControllerFindWordsParams,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<WordEntity[]>(
      {url: `/subtitle-lines/words`, method: 'GET',
        params
    },
      options);
    }
  
export const subtitleLinesControllerUpdate = (
    id: string,
    updateSubtitleLineDto: BodyType<UpdateSubtitleLineDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/subtitle-lines/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateSubtitleLineDto
    },
      options);
    }
  
export const subtitleLinesControllerRemove = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<void>(
      {url: `/subtitle-lines/${id}`, method: 'DELETE'
    },
      options);
    }
  
export const authControllerLogin = (
    loginDto: BodyType<LoginDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<AuthEntity>(
      {url: `/auth/login`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: loginDto
    },
      options);
    }
  
export const authControllerRegister = (
    registerDto: BodyType<RegisterDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<AuthEntity>(
      {url: `/auth/register`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: registerDto
    },
      options);
    }
  
export const usersControllerCreate = (
    createUserDto: BodyType<CreateUserDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<UserEntity>(
      {url: `/users`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createUserDto
    },
      options);
    }
  
export const usersControllerFindAll = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<UserEntity[]>(
      {url: `/users`, method: 'GET'
    },
      options);
    }
  
export const usersControllerFindOne = (
    id: number,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<UserEntity>(
      {url: `/users/${id}`, method: 'GET'
    },
      options);
    }
  
export const usersControllerUpdate = (
    id: number,
    updateUserDto: BodyType<UpdateUserDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<UserEntity>(
      {url: `/users/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateUserDto
    },
      options);
    }
  
export const usersControllerRemove = (
    id: number,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<UserEntity>(
      {url: `/users/${id}`, method: 'DELETE'
    },
      options);
    }
  
export const lessonsControllerCreate = (
    createLessonDto: BodyType<CreateLessonDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<LessonEntity>(
      {url: `/lessons`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createLessonDto
    },
      options);
    }
  
export const lessonsControllerFindAll = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<LessonEntity[]>(
      {url: `/lessons`, method: 'GET'
    },
      options);
    }
  
export const lessonsControllerFindAllByUser = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<LessonEntity[]>(
      {url: `/lessons/user`, method: 'GET'
    },
      options);
    }
  
export const lessonsControllerFindWords = (
    lessonId: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<WordEntity[]>(
      {url: `/lessons/${lessonId}/words`, method: 'GET'
    },
      options);
    }
  
export const lessonsControllerFindSubtitleLines = (
    lessonId: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<SubtitleLineDto[]>(
      {url: `/lessons/${lessonId}/subtitleLines`, method: 'GET'
    },
      options);
    }
  
export const lessonsControllerFindOne = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<LessonEntity>(
      {url: `/lessons/${id}`, method: 'GET'
    },
      options);
    }
  
export const lessonsControllerUpdate = (
    id: string,
    updateLessonDto: BodyType<UpdateLessonDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<LessonEntity>(
      {url: `/lessons/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateLessonDto
    },
      options);
    }
  
export const lessonsControllerRemove = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<LessonEntity>(
      {url: `/lessons/${id}`, method: 'DELETE'
    },
      options);
    }
  
export const progressControllerStudy = (
    createProgressDto: BodyType<CreateProgressDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<ProgressEntity>(
      {url: `/progress/study`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createProgressDto
    },
      options);
    }
  
export const progressControllerFindAll = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<ProgressEntity[]>(
      {url: `/progress`, method: 'GET'
    },
      options);
    }
  
export const progressControllerFindOne = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<ProgressEntity>(
      {url: `/progress/${id}`, method: 'GET'
    },
      options);
    }
  
export const progressControllerUpdate = (
    id: string,
    updateProgressDto: BodyType<UpdateProgressDto>,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<ProgressEntity>(
      {url: `/progress/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateProgressDto
    },
      options);
    }
  
export const progressControllerRemove = (
    id: string,
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<ProgressEntity>(
      {url: `/progress/${id}`, method: 'DELETE'
    },
      options);
    }
  
export const profileControllerGetInfo = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<UserEntity>(
      {url: `/profile`, method: 'GET'
    },
      options);
    }
  
export const profileControllerGetLessons = (
    
 options?: SecondParameter<typeof createInstance>,) => {
      return createInstance<LessonEntity[]>(
      {url: `/profile/lessons`, method: 'GET'
    },
      options);
    }
  
export type AppControllerGetHelloResult = NonNullable<Awaited<ReturnType<typeof appControllerGetHello>>>
export type FilmsControllerCreateResult = NonNullable<Awaited<ReturnType<typeof filmsControllerCreate>>>
export type FilmsControllerFindAllResult = NonNullable<Awaited<ReturnType<typeof filmsControllerFindAll>>>
export type FilmsControllerFindSubtitlesByFilmIdResult = NonNullable<Awaited<ReturnType<typeof filmsControllerFindSubtitlesByFilmId>>>
export type FilmsControllerFindOneResult = NonNullable<Awaited<ReturnType<typeof filmsControllerFindOne>>>
export type FilmsControllerUpdateResult = NonNullable<Awaited<ReturnType<typeof filmsControllerUpdate>>>
export type FilmsControllerRemoveResult = NonNullable<Awaited<ReturnType<typeof filmsControllerRemove>>>
export type SubtitlesControllerCreateResult = NonNullable<Awaited<ReturnType<typeof subtitlesControllerCreate>>>
export type SubtitlesControllerFindAllResult = NonNullable<Awaited<ReturnType<typeof subtitlesControllerFindAll>>>
export type SubtitlesControllerFindLinesResult = NonNullable<Awaited<ReturnType<typeof subtitlesControllerFindLines>>>
export type SubtitlesControllerFindWordsResult = NonNullable<Awaited<ReturnType<typeof subtitlesControllerFindWords>>>
export type SubtitlesControllerFindOneResult = NonNullable<Awaited<ReturnType<typeof subtitlesControllerFindOne>>>
export type SubtitlesControllerUpdateResult = NonNullable<Awaited<ReturnType<typeof subtitlesControllerUpdate>>>
export type SubtitlesControllerRemoveResult = NonNullable<Awaited<ReturnType<typeof subtitlesControllerRemove>>>
export type WordsControllerCreateResult = NonNullable<Awaited<ReturnType<typeof wordsControllerCreate>>>
export type WordsControllerFindAllResult = NonNullable<Awaited<ReturnType<typeof wordsControllerFindAll>>>
export type WordsControllerFindOneResult = NonNullable<Awaited<ReturnType<typeof wordsControllerFindOne>>>
export type WordsControllerUpdateResult = NonNullable<Awaited<ReturnType<typeof wordsControllerUpdate>>>
export type WordsControllerRemoveResult = NonNullable<Awaited<ReturnType<typeof wordsControllerRemove>>>
export type FileUploadControllerGetFilesResult = NonNullable<Awaited<ReturnType<typeof fileUploadControllerGetFiles>>>
export type FileUploadControllerUploadFilesResult = NonNullable<Awaited<ReturnType<typeof fileUploadControllerUploadFiles>>>
export type SubtitleLinesControllerFindResult = NonNullable<Awaited<ReturnType<typeof subtitleLinesControllerFind>>>
export type SubtitleLinesControllerFindWordsResult = NonNullable<Awaited<ReturnType<typeof subtitleLinesControllerFindWords>>>
export type SubtitleLinesControllerUpdateResult = NonNullable<Awaited<ReturnType<typeof subtitleLinesControllerUpdate>>>
export type SubtitleLinesControllerRemoveResult = NonNullable<Awaited<ReturnType<typeof subtitleLinesControllerRemove>>>
export type AuthControllerLoginResult = NonNullable<Awaited<ReturnType<typeof authControllerLogin>>>
export type AuthControllerRegisterResult = NonNullable<Awaited<ReturnType<typeof authControllerRegister>>>
export type UsersControllerCreateResult = NonNullable<Awaited<ReturnType<typeof usersControllerCreate>>>
export type UsersControllerFindAllResult = NonNullable<Awaited<ReturnType<typeof usersControllerFindAll>>>
export type UsersControllerFindOneResult = NonNullable<Awaited<ReturnType<typeof usersControllerFindOne>>>
export type UsersControllerUpdateResult = NonNullable<Awaited<ReturnType<typeof usersControllerUpdate>>>
export type UsersControllerRemoveResult = NonNullable<Awaited<ReturnType<typeof usersControllerRemove>>>
export type LessonsControllerCreateResult = NonNullable<Awaited<ReturnType<typeof lessonsControllerCreate>>>
export type LessonsControllerFindAllResult = NonNullable<Awaited<ReturnType<typeof lessonsControllerFindAll>>>
export type LessonsControllerFindAllByUserResult = NonNullable<Awaited<ReturnType<typeof lessonsControllerFindAllByUser>>>
export type LessonsControllerFindWordsResult = NonNullable<Awaited<ReturnType<typeof lessonsControllerFindWords>>>
export type LessonsControllerFindSubtitleLinesResult = NonNullable<Awaited<ReturnType<typeof lessonsControllerFindSubtitleLines>>>
export type LessonsControllerFindOneResult = NonNullable<Awaited<ReturnType<typeof lessonsControllerFindOne>>>
export type LessonsControllerUpdateResult = NonNullable<Awaited<ReturnType<typeof lessonsControllerUpdate>>>
export type LessonsControllerRemoveResult = NonNullable<Awaited<ReturnType<typeof lessonsControllerRemove>>>
export type ProgressControllerStudyResult = NonNullable<Awaited<ReturnType<typeof progressControllerStudy>>>
export type ProgressControllerFindAllResult = NonNullable<Awaited<ReturnType<typeof progressControllerFindAll>>>
export type ProgressControllerFindOneResult = NonNullable<Awaited<ReturnType<typeof progressControllerFindOne>>>
export type ProgressControllerUpdateResult = NonNullable<Awaited<ReturnType<typeof progressControllerUpdate>>>
export type ProgressControllerRemoveResult = NonNullable<Awaited<ReturnType<typeof progressControllerRemove>>>
export type ProfileControllerGetInfoResult = NonNullable<Awaited<ReturnType<typeof profileControllerGetInfo>>>
export type ProfileControllerGetLessonsResult = NonNullable<Awaited<ReturnType<typeof profileControllerGetLessons>>>