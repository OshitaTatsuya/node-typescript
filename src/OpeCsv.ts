import * as fs from 'fs';
import csvSync = require('csv-parse/lib/sync');

class OpeCsv {

    private csvReadPath : string;

    constructor(csvPath : string) { 
        this.csvReadPath = csvPath;
    }

    // Read CSV as 2-D list.
    public readCsv() {
        const data = fs.readFileSync(this.csvReadPath);
        const matrix = csvSync(data);
        return matrix;
    } 
}

// Run.
const opeCsv = new OpeCsv('./data/in/testdata.csv');
console.log(opeCsv.readCsv());