<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Validator;
use App\skill;
use DB;

class nskillController extends Controller
{
    
    public function getnSkill(){
      $nskill = skill::get();
      return $nskill;
    }

    public function savePersonal(Request $request){
        $alu = new personal();
        $alu->fill($request->all());
        $alu->save();
        return $alu;
    }


}
