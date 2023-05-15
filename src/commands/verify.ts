import { OptionValues } from 'commander';
import { Vpk } from 'node-vvpk';
import path from 'path';
import process from 'process';

export default (inputFilePath: string, options: OptionValues): void => {
    let absFilePath = inputFilePath;
    if (!path.isAbsolute(absFilePath))
        absFilePath = path.join(process.cwd(), absFilePath);

    let errors: string[] | undefined = undefined;
    if (options.pathenc)
        errors = Vpk.verifyFile(absFilePath, options.pathenc);
    else
        errors = Vpk.verifyFile(absFilePath);

    if (errors.length === 0) {
        console.log('No issues found.')
    } else {
        errors.forEach(entry => {
            console.log(entry);
        });
    }
}