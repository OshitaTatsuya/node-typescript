import fs from 'fs'
import iconv from 'iconv-lite'
import csv from 'csvtojson'

/**
 * 指定したパスのcsvファイルをロードして、JSONオブジェクトとしてparseする。
 * 全行読み込んだら完了する Promise を返す。
 * @param path
 */
const parse = (path: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      let datas: any[] = []
      fs.createReadStream(path)
        .pipe(iconv.decodeStream('Shift_JIS'))
        .pipe(iconv.encodeStream('utf-8'))
        .pipe(csv().on('data', data => datas.push(JSON.parse(data)))) // 各行読んだらココが呼ばれるので配列にpush
        .on('end', () => resolve(datas)) // 全部終わったらココにくるので、resolveする
    })
  }

  if (!module.parent) {
    // 呼んでみる
    parse('./data/in/testdata.csv').then((results: any[]) => {
      // 郵便番号が「100-000x」のものに絞ってみた
      // results = results.filter(address => address['電話番号'].startsWith('090-0000-0000'))
      results = results.filter(address => address['電話番号'].startsWith('090-0000'))
      console.table(results)
      // for (const address of results) {
      //   console.log(address)
      // }
    })
  }