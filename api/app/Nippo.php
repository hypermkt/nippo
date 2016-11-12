<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nippo extends Model
{
    protected $table = 'nippoes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'content',
    ];
}
