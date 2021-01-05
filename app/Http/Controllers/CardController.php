<?php

namespace App\Http\Controllers;

use App\Models\Number;
use App\Models\Suit;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;

class CardController extends Controller
{


    //Start the application logic
    public function start($input)
    {
        //Initialize variables
        $cards = [];
        $count = 0;
        $suits = Suit::select('name', 'value')->get();
        $numbers = Number::select('name', 'value')->get();
        $players_data = [];


        foreach ($suits as $suit) {
            foreach ($numbers as $number) {
                $cards[] = $suit->value . '-' . $number->value;
            }
        }

        //Shuffle the cards
        $cards = Arr::shuffle($cards);

        //Check if the GET parameter is numeric
        $checkNumeric = $this->checkNumeric($input);

        if ($checkNumeric) {
            while (count($cards) > 0) {
                for ($i = 0; $i < $input; $i++) {

                    //Get the value of cards based on the random number and store in players data
                    $cards_value = Arr::get($cards, $count);

                    $players_card[$i][] = $cards_value;

                    //Remove the random no from the deck of cards
                    Arr::forget($cards, $count);
                    $count++;
                }
            }
        } else {
            return 'false';
        }
    }

    public function checkNumeric($input)
    {
        if (is_numeric($input)) {
            return true;
        } else {
            return false;
        }
    }
}