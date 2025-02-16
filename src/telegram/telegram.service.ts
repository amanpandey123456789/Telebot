import { Injectable, OnModuleInit } from '@nestjs/common';
import TelegramBot = require('node-telegram-bot-api');
import { WeatherService } from '../weather/weather.service';
import { UserService } from '../user/user.service';

@Injectable()
export class TelegramService implements OnModuleInit {
    private bot: TelegramBot;

    constructor(private weatherService: WeatherService, private userService: UserService) {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        if (!token) {
            throw new Error('TELEGRAM_BOT_TOKEN is not defined in the environment variables.');
        }
        this.bot = new TelegramBot(token, { polling: true });
    }

    onModuleInit() {
        this.bot.onText(/\/start/, (msg) => {
            const chatId = msg.chat.id;
            this.userService.subscribeUser (chatId);
            this.bot.sendMessage(chatId, 'Welcome! You can ask for the weather by typing /weather <city>.');
        });

        this.bot.onText(/\/weather (.+)/, async (msg, match) => {
            const chatId = msg.chat.id;
            if (match && match[1]) { // Check if match is not null
                const city = match[1];
                const weather = await this.weatherService.getWeather(city);
                this.bot.sendMessage(chatId, `Weather in ${city}: ${weather.weather[0].description}, Temperature: ${weather.main.temp}K`);
            } else {
                this.bot.sendMessage(chatId, 'Please provide a city name.');
            }
        });
    }
}