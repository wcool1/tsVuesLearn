const { spawn } = require('child_process');

// 运行TypeScript文件
const proc = spawn('npx', ['ts-node', 'src/config/initdb.ts'], {
  stdio: 'inherit'
});

proc.on('close', (code) => {
  if (code !== 0) {
    console.error(`初始化数据库进程退出，代码 ${code}`);
    process.exit(code);
  }
  console.log('数据库初始化已完成');
}); 