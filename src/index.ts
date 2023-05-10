#!/usr/bin/env node

import { program } from 'commander';
import { createVpkCmd, extractVpkCmd, listCmd, pipeCmd, verifyCmd } from './commands';

const pjson = require('../package.json');

program
    .name('node-vvpk')
    .description(pjson.description)
    .version(pjson.version, '-v, --version', 'output the version number');

program
    .command('list')
    .argument('<vpk file>', 'VPK file path')
    .description('List files within VPK')
    .action(listCmd);

program
    .command('create')
    .option('-pv, --pakver <version>', 'Target VPK version (1|2). Default is 2.')
    .option('-nd, --nodirs', 'Don\'t create parent directories')
    .argument('<dir>', 'Directory to create VPK file from')
    .argument('<vpk file>', 'Output VPK file path')
    .description('Create a VPK file from a directory')
    .action(createVpkCmd);

program
    .command('extract')
    .option('-no, --nodirs', 'Don\'t create parent directories')
    .argument('<vpk file>', 'Input VPK file path')
    .argument('<dir>', 'Directory to extract VPK file to')
    .description('Extract a VPK file')
    .action(extractVpkCmd);

program
    .command('pipe')
    .description('Extract VPK contents to console')
    .argument('<vpk file>', 'Input VPK file path')
    .action(pipeCmd);

program
    .command('verify')
    .description('Verify contents of a VPK')
    .argument('<vpk file>', 'Input VPK file path')
    .action(verifyCmd);

program.parse();