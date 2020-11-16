const fs = require("fs");
const csv = require("csv");

var list: Array<TestData>;

class Test2 {
  private csvReadPath: string;

  constructor(csvPath: string) {
    this.csvReadPath = csvPath;
  }

  /**
   * CSVファイル読込み
   *
   */
  public readCsv() {
    fs.createReadStream(this.csvReadPath).pipe(
      csv.parse(function (err: any, data: any) {
        console.log(data);
      })
    );
  }

  /**
   * CSVファイル読込み(JSON整形)
   */
  public readCsvParsseJson() {
    fs.createReadStream(this.csvReadPath).pipe(
      csv.parse({ columns: true }, function (err: any, data: any) {
        console.log(data);
      })
    );
  }
}

const test2 = new Test2("./data/in/testdata.csv");
test2.readCsv();
test2.readCsvParsseJson();
