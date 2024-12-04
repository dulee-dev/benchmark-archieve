import { dash } from 'radashi';

export const calcJsonDist = (tag: string) => {
  const fileName = dash(tag);
  const dist = `output/${fileName}.json`;
  return dist;
};

export const calcHtmlDist = (tag: string) => {
  const fileName = dash(tag);
  const filePath = `output/${fileName}.html`;
  return filePath;
};
