import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatsModule } from "./cats/cats.module";
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "user_crud",
      password: "root",
      database: "db_crud",
      extra: {
        authMode: 'mysql_native_password', // Ajusta según sea necesario
      },
      autoLoadEntities: true,
      synchronize: true,
    }),
    BreedsModule,
    CatsModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
