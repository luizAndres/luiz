<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class PersonalForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    
    public function rules()
    {
        return [
                'nombre' => 'required|max:25',
                'email'=>'email|max:40'
                ];
    }

    public function messages(){
        return [
               // 'NombreComandancia.required' => 'No has ingresa algun dato',
                //'CorreoElectronico.required|email|max:255|unique:Comandancia'=> 'Falto agregar el E-mail',
               // 'Password.confirmed'=>'Ingresa una contrasena con un numero maximo de 10 digitos',
                //'Password.min' => 'la contrasena debe ser minimo 8 caracateres',
              //  'Password_confirmation.min' => 'la contrasena debe ser minimo 8 caracateres',
                //'TelefonoComandancia.required|max:13'=>'Falta su numero telefonico o es demaciado largo',
                //'Password_confirmation.required'=>'La constrasena no coinside'
                ];
    }
}
