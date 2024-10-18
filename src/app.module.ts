import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./shared/config/database.config.service";
import { TaskModule } from "./modules/task/task.module";

@Module({
	imports: [TypeOrmModule.forRoot(typeOrmConfig), TaskModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
