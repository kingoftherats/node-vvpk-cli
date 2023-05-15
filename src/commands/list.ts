import { OptionValues } from 'commander';
import { Vpk, IndexEntry } from 'node-vvpk';
import path from 'path';
import process from 'process';

export default (filePath: string, options: OptionValues): void => {
    let absFilePath = filePath;
    if (!path.isAbsolute(absFilePath))
        absFilePath = path.join(process.cwd(), absFilePath);

    let index: IndexEntry[] | undefined = undefined;
    if (options.pathenc) 
        index = Vpk.indexFromFile(absFilePath, options.pathenc);
    else
        index = Vpk.indexFromFile(absFilePath);

    index.forEach(entry => {
        console.log(`${entry.relPath} CRC32:${entry.metadata.crc32.toString(16)} Bytes:${entry.metadata.fileLength}`);
    });
}