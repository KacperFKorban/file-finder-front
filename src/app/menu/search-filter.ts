export type SearchFilter = {
  textFileFilter: TextFileFilter,
  translate: boolean,
  subdirectories: boolean,
};

export type TextFileFilter = {
  txt: boolean,
  pdf: boolean,
  odt: boolean,
  doc: boolean,
  rtf: boolean,
  audio: boolean,
  video: boolean,
  audioMetadata: boolean,
  videoMetadata: boolean,
}