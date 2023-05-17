# node-vvpk-cli
Open, Search, Extract and Create Valve VPKs on the Node.js platform using a command-line

This tool is simply a wrapper for [node-vvpk](https://github.com/kingoftherats/node-vvpk) that enables CLI integration.

NOTE: This tool doesn't yet support chunking (split VPK files) due to the underlying library not supporting it.

## Install

```sh
npm install -g node-vvpk-cli
```

## Usage

```sh
node-vvpk [options] [command]

Options:
  -v, --version     output the version number
  -h, --help        display help for command

Commands:
  list [options] <vpk file>               List files within VPK
  create [options] <dir> <vpk file>       Create a VPK file from a directory
  extract [options] <vpk file> <dir>      Extract a VPK file
  verify [options] <vpk file>             Verify contents of a VPK
  help [command]                          display help for command
```

## Examples

### List VPK file contents

```sh
node-vvpk list -pe latin1 ~/Desktop/sample.vpk
```

### Create VPK file from directory

```sh
node-vvpk create -pv 1 ~/Desktop/vpktmp ~/Desktop/sample.vpk
```

### Extract VPK file to directory

```sh
node-vvpk extract ~/Desktop/sample.vpk ~/Desktop/vpkextract
```

### Verify VPK file integrity

```sh
node-vvpk verify ~/Desktop/sample.vpk
```