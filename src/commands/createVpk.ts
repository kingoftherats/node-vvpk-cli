import { OptionValues, InvalidArgumentError } from 'commander';
import Vpk from 'node-vvpk';
import path from 'path';
import process from 'process';

const getValidPakVer = (version: string): number => {
    //Default to version 2
    if (!version)
        return 2;

    const parsedValue: number = parseInt(version, 10);
    if (isNaN(parsedValue)) {
        throw new InvalidArgumentError('VPK version is not valid.');
    }
    return parsedValue;
}

export default (inputDirPath: string, outputFilePath: string, options: OptionValues): void => {
    try {
        const pakVer: number = getValidPakVer(options.pakver);

        let absInputDirPath = inputDirPath;
        if (!path.isAbsolute(absInputDirPath))
            absInputDirPath = path.join(process.cwd(), absInputDirPath);

        let absOutputFilePath = outputFilePath;
        if (!path.isAbsolute(absOutputFilePath))
        absOutputFilePath = path.join(process.cwd(), absOutputFilePath);

        const vpk: Vpk = Vpk.fromDirectory(absInputDirPath);
        vpk.setVersion(pakVer);
        vpk.saveToFile(absOutputFilePath, (options.nodirs ? false : true));
    } catch (e) {
        console.log(e);
    }
}