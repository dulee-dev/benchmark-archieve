import { Report } from '../types/type.js';
import { writeFileSync } from 'fs';

export const writeJson = (dist: string, data: Report[]) => {
  const json = JSON.stringify({ data }, undefined, '  ');
  writeFileSync(dist, json);
};
