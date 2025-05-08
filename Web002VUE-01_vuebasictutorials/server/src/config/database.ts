import { Sequelize } from 'sequelize';

// 数据库配置
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',  // 请替换为您的PostgreSQL用户名
  password: 'postgres',  // 请替换为您的PostgreSQL密码
  database: 'currencyeg', // 请替换为您希望使用的数据库名
  logging: false // 设置为true以在控制台显示SQL查询
});

// 测试连接
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('成功连接到PostgreSQL数据库');
  } catch (error) {
    console.error('连接数据库失败:', error);
  }
};

export default sequelize;