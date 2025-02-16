import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get('users')
    async getAllUsers() {
        return this.adminService.getAllUsers();
    }

    @Post('block/:userId')
    async blockUser (@Param('userId') userId: number) {
        return this.adminService.blockUser (userId);
    }

    @Delete('delete/:userId')
    async deleteUser (@Param('userId') userId: number) {
        return this.adminService.deleteUser (userId);
    }
}