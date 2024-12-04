import { dash, template } from 'radashi';
import { Report } from '../types/type.js';
import { readFileSync, writeFileSync } from 'fs';

const htmlResourcePath = 'src/resources/index.html';

export const drawChart = (dist: string, data: Report[]) => {
  const html = readFileSync(htmlResourcePath, 'utf-8');
  const outputHtml = template(html, {
    data: JSON.stringify(data, undefined, '  '),
  });
  writeFileSync(dist, outputHtml);
};
