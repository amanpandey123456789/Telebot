import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AdminService {
    constructor(private userService: UserService) {}

    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    async blockUser (userId: number) {
        return this.userService.blockUser (userId);
    }

    async deleteUser (userId: number) {
        return this.userService.deleteUser (userId);
    }
}