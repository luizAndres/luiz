<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Validator;
use App\personal;
use App\skills;
use DB;

class personalController extends Controller
{
  //$periodoReins = periodoReinscripcion::get();
      //return $periodoReins;

    
    public function getPersonal(){
       $personal = personal::get(); 
    	return $personal;
    }

    public function savePersonal(Request $request){
        $alu = new personal();
        $alu->fill($request->all());
        $alu->save();
        return $alu;
    }

    public function getIdPersonal($id){
      $idpersonal = personal::find($id);
      return $idpersonal; 
    }

}
