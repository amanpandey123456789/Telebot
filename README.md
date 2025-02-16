Project Overview
This project is a Telegram bot developed using the NestJS framework. The bot provides daily weather updates and includes an admin panel for managing bot settings and user accounts. The bot's functionalities include subscribing users for daily weather updates and an admin panel with Google login for authentication. Admins can manage bot settings and user accounts through this panel.

Features
1. Daily Weather Updates:
Users can subscribe to receive daily weather updates.
The bot fetches weather data from an external API (e.g., OpenWeatherMap) and sends weather information to the subscribed users daily.
2. Admin Panel:
Google Login authentication for the admin.
Admins can manage bot settings such as API keys, configurations, etc.
Admins can manage user accounts, including blocking and deleting users.
Technologies Used
NestJS: Framework for building the bot and admin panel.
TypeScript: Language used for the development of the project.
Telegram Bot API: For communication with Telegram.
Google OAuth: For Admin panel authentication.
PostgreSQL (or any other database): For storing user data and bot settings.
Axios/Fetch: For making HTTP requests to the weather API.
Requirements
Node.js (v14 or above)
NestJS CLI
PostgreSQL (or any other relational database of your choice)
Telegram Bot Token (can be obtained from the BotFather on Telegram)
OpenWeatherMap API Key (or another weather API service)

Installation & Setup
1. Clone the repository:
bash
Copy
git clone <your-github-repository-url>
cd <project-directory>
2. Install dependencies:
bash
Copy
npm install
3. Set up environment variables:
Create a .env file in the root directory and include the following variables:

bash
Copy
TELEGRAM_BOT_API_KEY=<your-telegram-bot-api-key>
WEATHER_API_KEY=<your-weather-api-key>
DATABASE_URL=<your-database-connection-string>
GOOGLE_CLIENT_ID=<your-google-oauth-client-id>
GOOGLE_CLIENT_SECRET=<your-google-oauth-client-secret>
4. Set up the database:
Create a PostgreSQL database (or use a preferred database).
Run the migration commands (if using a database ORM like TypeORM).
bash
Copy
npm run migration:run
5. Run the application:
bash
Copy
npm run start:dev
Your bot should now be running, and you can test the functionalities of weather updates and the admin panel.

Usage
Telegram Bot:
Search for your bot on Telegram using the bot's handle.
Start a conversation with the bot.
Use the /subscribe command to subscribe to daily weather updates.
Use the /unsubscribe command to stop receiving updates.
The bot will send daily weather updates at the specified time.
Admin Panel:
Navigate to the admin panel URL.
Login with your Google account via the Google OAuth login.
Use the admin panel to manage user accounts and bot settings.
API Endpoints
Admin Panel API:
POST /auth/google - Authenticate admin using Google OAuth.
GET /users - Retrieve all users (requires admin privileges).
DELETE /users/:id - Delete a user by ID (requires admin privileges).
PATCH /settings - Update bot settings such as API keys.
Bot API:
POST /subscribe - Subscribe a user to daily weather updates.
POST /unsubscribe - Unsubscribe a user from daily updates.
GET /weather - Retrieve the current weather based on the user’s location.
Contributing
Feel free to fork this project and submit pull requests. When submitting a PR, ensure your code follows the style guide and includes relevant tests.

License
This project is licensed under the MIT License - see the LICENSE file for details.
