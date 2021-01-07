# Installation Guide

## back-end

### Prerequisites
1. Composer (https://getcomposer.org/)
2. PHP >= 7.3 and a few extensions. Please visit here for more details (https://laravel.com/docs/8.x/deployment)
3. MySQL database server

### Commands to setup
1. `cp .env.example .env` and insert the database credentials.
2. `php artisan key:generate`
3. `php artisan migrate --seed` to migrate the database and run seeders.


## front-end

### Prerequisites
1. Node.js (https://nodejs.org/en/)

### Commands to setup
1. `npm install`
2.  Change the baseURL of the api at `front-end/src/api.js`
3. `npm start` for development mode
4. `npm run build` builds the app for production to the `build` folder.
