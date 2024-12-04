import Benchmark from 'benchmark';
import { Case, Report } from '../types/type.js';
import { logCase } from '../helpers/logging.js';

export const runTest = (cases: Case[]) => {
  const suite = new Benchmark.Suite();
  let data: Report[] = [];

  cases.forEach((a) => {
    suite.add(a.tag, a.fn);
  });
  suite
    .on('cycle', function (event: Benchmark.Event) {
      logCase(
        event.target.name ?? 'unknown tag',
        event.target.hz,
        event.target.stats?.sample.length
      );
    })
    .on('complete', function (this: Benchmark.Suite) {
      const results: Report[] = this.map((a: Benchmark.Target) => ({
        name: a.name,
        hz: a.hz,
        sampleCnt: a.stats?.sample.length,
      }));
      data = results;
    });

  suite.run({ async: false });

  return data;
};
