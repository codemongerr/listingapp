<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Listing;
use Faker\Generator as Faker;

$factory->define(Listing::class, function (Faker $faker) {
    return [
        'user_id' => 2,
        'name' => $faker->sentence($faker->numberBetween(3, 7))
    ];
});
