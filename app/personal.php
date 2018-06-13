<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class personal extends Model
{
    protected $table = 'personal';
    protected $primaryKey = 'idPersonal';
    public $timestamps = false;
	protected $fillable = ['idPersonal','nombre','email','puesto','fnacimiento','domicilio'];
	protected $guarded = ['idPersonal'];
}
