import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsModule } from 'src/cats/cats.module';
import { BreedsModule } from 'src/breeds/breeds.module';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'user_crud',
        password: 'root',
        database: 'db_nest',
        extra: {
            authMode: 'mysql_native_password',
        },
        entities: [
            CatsModule,
            BreedsModule,
            UsersModule
        ],
        synchronize: true,
      }),
    ],
    controllers: [],
    providers: [],
  })

  export class DatabaseModule {}