import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    userId: number;

    @Prop({ default: false })
    blocked: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);