<?php

namespace App\Http\Controllers;

use App\Nippo;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class NippoController extends BaseController
{
    public function index()
    {
        $nippoes = Nippo::all();

        return response()->json($nippoes);
    }

    public function create(Request $request)
    {
        $nippo = Nippo::create($request->all());

        return response()->json($nippo);
    }

    public function update(Request $request, $id)
    {
        $nippo = Nippo::find($id);
        $nippo->content = $request->input('content');
        $nippo->save();

        return response()->json($nippo);
    }
}
