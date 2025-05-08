import sequelize from './database';
import User from '../models/User';
import Article from '../models/Article';
import ExchangeRate from '../models/ExchangeRate';
import bcrypt from 'bcryptjs';

// 初始化数据库
const initDatabase = async () => {
  try {
    // 同步数据库模型 (force: true 将删除并重建表)
    await sequelize.sync({ force: true });
    console.log('数据库表已重置');

    // 创建初始用户
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = await User.create({
      username: 'admin',
      password: hashedPassword
    });

    console.log('创建初始用户成功');

    // 创建初始文章
    await Article.create({
      title: '欢迎使用货币汇率系统',
      content: '这是一个使用PostgreSQL和Sequelize构建的货币汇率系统。',
      userId: user.id
    });

    console.log('创建初始文章成功');

    // 创建初始汇率数据
    const exchangeRates = [
      { sourceCurrency: 'USD', targetCurrency: 'CNY', rate: 6.45 },
      { sourceCurrency: 'EUR', targetCurrency: 'CNY', rate: 7.85 },
      { sourceCurrency: 'GBP', targetCurrency: 'CNY', rate: 8.95 },
    ];

    await ExchangeRate.bulkCreate(exchangeRates);
    console.log('创建初始汇率数据成功');

    console.log('数据库初始化完成');

  } catch (error) {
    console.error('数据库初始化失败:', error);
    process.exit(1);
  }
};

// 如果直接运行此文件，则执行初始化
if (require.main === module) {
  initDatabase()
    .then(() => {
      console.log('初始化脚本执行完成');
      process.exit(0);
    })
    .catch(error => {
      console.error('初始化脚本执行失败:', error);
      process.exit(1);
    });
}

export default initDatabase;