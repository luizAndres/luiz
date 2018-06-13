<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class skill extends Model
{
    protected $table = 'skill';
    protected $primaryKey = 'idskilll';
    public $timestamps = false;
	protected $fillable = ['idskilll','nSkill','calificacion'];
	protected $guarded = ['idskilll'];
    
}