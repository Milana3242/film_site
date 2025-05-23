export interface CreateLessonFormDto {
  filmId: number;
  startTime: number;
  endTime: number;
  targetSubtitleId: number;
  sourceSubtitleId: number;
  type: string;
}
