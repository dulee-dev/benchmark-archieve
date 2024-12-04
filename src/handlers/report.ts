import { runTest } from '../libs/run-test.js';
import { Case } from '../types/type.js';
import { drawChart } from '../libs/draw-chart.js';
import {
  logReportComplete,
  logStart,
  logTestComplete,
  logTestStart,
  logWriteHtml,
  logWriteJson,
} from '../helpers/logging.js';
import { writeJson } from '../libs/write-json.js';
import { calcHtmlDist, calcJsonDist } from '../helpers/calc-dist.js';

export const report = (tag: string, cases: Case[]) => {
  logStart(tag);

  logTestStart();
  const data = runTest(cases);
  logTestComplete(data.length);

  const jsonDist = calcJsonDist(tag);
  writeJson(jsonDist, data);
  logWriteJson(jsonDist);

  const htmlDist = calcHtmlDist(tag);
  drawChart(htmlDist, data);
  logWriteHtml(htmlDist);

  logReportComplete();
};
