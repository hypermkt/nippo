<?php

namespace App\Http\Controllers;

use App\Nippo;
use Laravel\Lumen\Routing\Controller as BaseController;

class NippoController extends BaseController
{
    public function index()
    {
        $nippoes = Nippo::all();

        return response()->json($nippoes);
    }
}
