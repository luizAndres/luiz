<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Validator;
use App\skills;
use DB;

class skillController extends Controller
{
  //$periodoReins = periodoReinscripcion::get();
      //return $periodoReins;

    
    public function getSkill(){
      $personal = DB::table('skills')
       ->join('personal','personal.idPersonal','=','skills.personalfk')
      ->distinct('nombreSkill')
       ->select('idskill','personal.nombre','nSkill','email','puesto','fnacimiento',
                'domicilio')
       ->get(); 
      return $personal;
    }

    public function savePersonal(Request $request){
        $alu = new personal();
        $alu->fill($request->all());
        $alu->save();
        return $alu;
    }


public function getskillId($id){
  $skills = DB::table('skills')
  ->join('personal','idPersonal','=','skills.idskill')
  ->join('skill','idskilll','=','skills.idskill')
  ->where('idskill','=',$id)
  ->select('nombre','domicilio','email','fnacimiento','puesto','nSkill','Calificacion')
  ->get();
      return $skills; 
    }

}
