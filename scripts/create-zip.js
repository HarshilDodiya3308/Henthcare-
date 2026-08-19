const { execFileSync } = require('node:child_process');
const { existsSync, mkdirSync, rmSync } = require('node:fs');
const path = require('node:path');

const outputDir = path.join(process.cwd(), 'release');
const outputFile = path.join(outputDir, 'ruralcare-ai-app.zip');
if (!existsSync(outputDir)) mkdirSync(outputDir);
if (existsSync(outputFile)) rmSync(outputFile);

const files = [
  'README.md',
  'package.json',
  'index.html',
  'src',
  'docs',
  'assets',
  'tests',
  'scripts',
  '.vscode',
  '.gitignore'
];

execFileSync('zip', ['-r', outputFile, ...files], { stdio: 'inherit' });
console.log(`Created ${outputFile}`);
