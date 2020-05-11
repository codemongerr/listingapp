# User Management App

Single page app build using Laravel framework. Back-End is powered by REST API with Oauth2 for authentication and Front-End is fully powered by ReactJS.

## Setting up project

-   Clone repository
-   Create `.env` file based on `.env.example`
-   Run `composer install`
-   Create database named `homestead` and update username and password in `.env`
-   Run command `php artisan migrate --seed`
-   After running migration command run `php artisan passport:install --force`
-   All users have `password` as default password
-   Date and time is stored based on timezone set in MySQL if not using PHP methods

## Available commands

#### Run php server

`php artisan serve`

### Run npm on watch mode

`npm run watch`

### Bundle React

`npm run dev`

### Links

[Project URL](http://127.0.0.1:8000)

[Migrations](https://github.com/codemongerr/listingapp/tree/master/database/migrations)

[Seeds](https://github.com/codemongerr/listingapp/tree/master/database/seeds)

[Database Export](https://github.com/codemongerr/listingapp/tree/master/database/exports)

[Factories](https://github.com/codemongerr/listingapp/tree/master/database/factories)

[React Components](https://github.com/codemongerr/listingapp/tree/master/resources/js/components)

[React Containers](https://github.com/codemongerr/listingapp/tree/master/resources/js/containers)

[SASS](https://github.com/codemongerr/listingapp/tree/master/resources/sass)

## @TODO

-   Add more comments where applicable
-   Add tests
