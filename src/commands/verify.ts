import { Vpk } from 'node-vvpk';
import path from 'path';
import process from 'process';

export default (inputFilePath: string): void => {
    let absFilePath = inputFilePath;
    if (!path.isAbsolute(absFilePath))
        absFilePath = path.join(process.cwd(), absFilePath);

    const errors: string[] = Vpk.verifyFile(absFilePath);
    errors.forEach(entry => {
        console.log(entry);
    });
}