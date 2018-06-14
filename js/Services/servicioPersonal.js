(function(){
    'use strict';
    angular
        .module("ejemploAngular")
        .factory('servicioPersonal', dataservice);

        function dataservice($http,$q){ 
            var service = {
            getPersonal: getPersonal,
            getnSkill: getnSkill,
            savePersonal: savePersonal,
            getPersonalID: getPersonalID,
            actualizarAlumno: actualizarAlumno,
            eliminarAlumno: eliminarAlumno
        };
        return service;

        function getPersonal() {
            var defered = $q.defer();
            var promise = defered.promise;//Promesa: 
            $http.get('http://localhost/proyect/public/api/v1/personal')
            .success(exito)
            .error(intenta_de_nuevo);
        function exito(response){
            defered.resolve(response);
        }

        function intenta_de_nuevo(err){
            defered.reject(err)
        }
        return promise;
    }
     
        function getnSkill() {
            var defered = $q.defer();
            var promise = defered.promise;//Promesa: 
            $http.get('http://localhost/proyect/public/api/v1/nskill')
            .success(exito)
            .error(intenta_de_nuevo);
        function exito(response){
            defered.resolve(response);
        }
        function intenta_de_nuevo(err){
            defered.reject(err)
        }
        return promise;
    }


        function savePersonal(obj) {
           // console.log("obj");
            var defered = $q.defer();
            var promise = defered.promise;//Promesa: 
            $http.post('http://localhost/proyect/public/api/v1/personal',obj)
            .success(exito)
            .error(intenta_de_nuevo);

            function exito(response){
                defered.resolve(response);
            }

            function intenta_de_nuevo(err){
               // console.log(err);
                defered.reject(err)
            }
            return promise;
    } 
////
    function getPersonalID(id) {
            var defered = $q.defer();
            var promise = defered.promise;//Promesa: 
            $http.get('http://localhost/proyect/public/api/v1/skill/'+id)
            .success(exito)
            .error(intenta_de_nuevo);

        function exito(response){
           // console.log(response);
            defered.resolve(response);
        }

        function intenta_de_nuevo(err){
            defered.reject(err)
           // console.log(err);
        }
        return promise;
    }


        }

})();
