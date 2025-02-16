import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from '../user/user.module'; // Correct import

@Module({
    imports: [UserModule], // Correct usage (no space)
    controllers: [AdminController],
    providers: [AdminService],
})
export class AdminModule {}