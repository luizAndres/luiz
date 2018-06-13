<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class skills extends Model
{
    protected $table = 'skills';
    protected $primaryKey = 'idskill';
    public $timestamps = false;
	protected $fillable = ['nombreSkill','personalfk'];
	protected $guarded = ['idskill'];
    
}