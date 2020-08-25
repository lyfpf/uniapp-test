#!/usr/bin/env node
// 引入依赖

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const sao = require("sao");
const download = require('download-git-repo')

const projectName = process.argv[2]

if (!projectName) {
  throw new Error(
    "请输入项目名称！"
  );
}

let outDir = path.resolve(projectName);

// const generator = path.resolve(__dirname, "../uniapp");

download('https://gitlab.24hw.cn/custom-front/mini-template', outDir, { clone: true }, function (err) {
  console.log(err)
})

// console.log(`> 生成uni-app模板 ${outDir}`);
// sao({ generator, outDir, logLevel: 2 })
//     .run()
//     .catch(err => {
//         console.trace(err);
//         process.exit(1);
//     });
