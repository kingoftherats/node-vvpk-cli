import { OptionValues } from 'commander';
import { Vpk } from 'node-vvpk';
import path from 'path';
import process from 'process';

export default (inputFilePath: string, outputDirPath: string, options: OptionValues): void => {
    try {
        let absInputFilePath = inputFilePath;
        if (!path.isAbsolute(absInputFilePath))
            absInputFilePath = path.join(process.cwd(), absInputFilePath);

        let absOutputDirPath = outputDirPath;
        if (!path.isAbsolute(absOutputDirPath))
            absOutputDirPath = path.join(process.cwd(), absOutputDirPath);

        let vpk: Vpk | undefined = undefined;
        if (options.pathenc)
            vpk = Vpk.fromFile(absInputFilePath, options.pathenc);
        else
            vpk = Vpk.fromFile(absInputFilePath);

        vpk.extractToDirectory(absOutputDirPath, (options.nodirs ? false : true));
    } catch (e) {
        console.log(e);
    }
}