import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from 'config';

const dbConfig = config.get('db');

export const typeORMConfig : TypeOrmModuleOptions = {
    // 환경변수 설정 적용 시 host connect error발생 -> Error: connect ECONNREFUSED ::1:3306
    // type: dbConfig.type,
    // host:  process.env.RDS_HOSTNAME || dbConfig.host,   
    // port: process.env.RDS_PORT || dbConfig.port,
    // username: process.env.RDS_USERNAME || dbConfig.username,
    // password: process.env.RDS_PASSWORD || dbConfig.password,
    // database: process.env.RDS_DATABASE || dbConfig.database,
    // entities: [__dirname + '/../**/*.entity.{js,ts}'],
    // synchronize: dbConfig.synchronize 

    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'nestjs_board',
    password: '1234',
    database: 'board_app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
 
}