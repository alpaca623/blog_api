import pino from 'pino';
import config from './config';

const l = pino({
  name: process.env.APP_ID || config.APP_ID,
  level: process.env.LOG_LEVEL || config.LOG_LEVEL,
  prettyPrint: {
    colorize: false,
    ignore: 'pid, hostname',
    // translateTime: 'SYS: yyyy-mm-dd HH:MM:ss',
  },
});

export default l;
