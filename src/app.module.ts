import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from '@libs/auth/guards/at.guard';
import { UsersModule } from '@modules/users/users.module';
import { AuthModule } from '@libs/auth/auth.module';
import dbConfig from '@libs/persistence/db-config';
import { PersistenceModule } from '@libs/persistence';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    PersistenceModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
