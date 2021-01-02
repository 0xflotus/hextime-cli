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


var now = new Date();
const nowStr = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

// http://www.intuitor.com/hex/hexclock.html
function timeToHex(hh, mm, ss) {
    var time = (hh * 3600 + mm * 60 + ss) * 65536 / 86400;
    hexhours = convert(Math.floor(time / 4096));
    hexminutes = Math.floor(time % 4096 / 16);
    min1 = convert(Math.floor(hexminutes / 16));
    min2 = convert(hexminutes % 16);
    var hextimeValue = hexhours + "_" + min1 + min2;
    return hextimeValue;
}

function convert(dec) {
    var hex = dec
    if (dec == 10)
        hex = "A"
    else if (dec == 11)
        hex = "B"
    else if (dec == 12)
        hex = "C"
    else if (dec == 13)
        hex = "D"
    else if (dec == 14)
        hex = "E"
    else if (dec == 15)
        hex = "F"
    return hex
}

const hextimeValue = timeToHex(hours, minutes, seconds);

console.log(argv.v ? `${nowStr} -> ${hextimeValue}` : hextimeValue);