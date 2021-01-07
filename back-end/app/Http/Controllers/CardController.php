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
        //Some validation
        $checkNumeric = $this->checkNumeric($input);
        $checkLength = $this->checkLength($input);

        if ($checkNumeric && $checkLength) {
            //Initialize variables
            $cards = [];
            $count = 0;
            $round = 1;
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



            while (count($cards) > 0) {
                for ($i = 0; $i < $input; $i++) {

                    //Get the value of cards based on the random number and store in players data
                    $cards_value = Arr::get($cards, $count);

                    if ($cards_value == null) {
                        $cards_value = 'No more cards';
                    }
                    $players_card[$round][$i] = $cards_value;

                    //Remove the random no from the deck of cards
                    Arr::forget($cards, $count);
                    $count++;
                }
                $round++;
            }
            return response()->json($players_card);
        } else {
            return response()->json(false);
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

    public function checkLength($input)
    {
        if (strlen($input) < 5) {
            return true;
        } else {
            return false;
        }
    }
}
