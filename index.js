#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
    .option('verbose', {
        alias: 'v',
        type: 'boolean',
        description: 'Run with verbose logging'
    })
    .argv


const now = new Date();
const normalize = (num) => `${num}`.padStart(2, '0');
const nowStr = `${normalize(now.getHours())}:${normalize(now.getMinutes())}:${normalize(now.getSeconds())}`;
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// http://www.intuitor.com/hex/hexclock.html
function timeToHex(hh, mm, ss) {
    const time = (hh * 3600 + mm * 60 + ss) * 65536 / 86400;
    hexhours = Math.floor(time / 4096).toString(16).toUpperCase();
    hexminutes = Math.floor(time % 4096 / 16);
    min1 = Math.floor(hexminutes / 16).toString(16).toUpperCase();
    min2 = (hexminutes % 16).toString(16).toUpperCase();
    return hexhours + "_" + min1 + min2;
}

const hextimeValue = timeToHex(hours, minutes, seconds);

console.log(argv.v ? `${nowStr} -> ${hextimeValue}` : hextimeValue);