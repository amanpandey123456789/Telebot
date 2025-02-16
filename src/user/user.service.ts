import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async subscribeUser (userId: number) {
        const user = await this.userModel.findOne({ userId });
        if (!user) {
            const newUser  = new this.userModel({ userId });
            await newUser .save();
        }
    }

    async getAllUsers() {
        return this.userModel.find().exec();
    }

    async blockUser (userId: number) {
        return this.userModel.findOneAndUpdate({ userId }, { blocked: true });
    }

    async deleteUser (userId: number) {
        return this.userModel.deleteOne({ userId });
    }
}