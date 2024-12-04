/**
 * hz operations per sec
 * sampleCnt count of samples
 * - sample is a set of test
 */
export interface Report {
  name: string;
  hz: number;
  sampleCnt: number | undefined;
}

export interface Case {
  tag: string;
  fn: () => any;
}
