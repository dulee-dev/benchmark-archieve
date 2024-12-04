import chalk from 'chalk';

export const logStart = (tag: string) => {
  console.log('');
  console.log(chalk.gray(`  run ${chalk.yellow(chalk.bold(tag))} test`));
  console.log('');
};

export const logTestStart = () => {
  console.log(`    ${chalk.gray(`test start`)}`);
};

export const logCase = (caseTag: string, hz?: number, sampleCnt?: number) => {
  let str = (() => {
    let inner = `      test: ${chalk.white(caseTag)} complete!`;
    if (hz === undefined && sampleCnt === undefined) return inner;

    inner = inner.padEnd(80);
    let info = !hz ? '' : hz.toExponential(3) + 'ops/sec';
    info += !sampleCnt ? '' : `(${sampleCnt})`;
    info.padStart(40);

    return inner + info;
  })();

  console.log(chalk.gray(str));
};

export const logTestComplete = (dataLen: number) => {
  console.log(`    ${chalk.gray(`test complete: ${chalk.white(dataLen)}`)}`);
};

export const logWriteJson = (fileName: string) => {
  console.log(
    chalk.gray(chalk.gray(`    json: ${chalk.white(`${fileName}`)}`))
  );
};

export const logWriteHtml = (fileName: string) => {
  console.log(chalk.gray(`    html: ${chalk.white(`${fileName}`)}`));
};

export const logReportComplete = () => {
  console.log('');
  console.log(`  ${chalk.green(`report complete!`)}`);
  console.log('');
};
