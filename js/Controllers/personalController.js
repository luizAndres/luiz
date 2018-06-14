(function(){   
    angular
        .module("ejemploAngular")
        .controller("personalCtrl", personalController);

         function personalController(servicioPersonal,$scope){
            var vm = this;

            vm.obtenerPersonal = obtenerPersonal;
            vm.agrega = agrega;
            vm.obtenerPersonalID = obtenerPersonalID;
            vm.actualizarAlumno = actualizarAlumno;
            vm.eliminarAlumno=eliminarAlumno;
            vm.Init = Init;
            //
            vm.variable="Hola";
            vm.id="0";
            vm.objPrueba={};
            vm.objAux={};
            vm.objauxServ={};
            Init();

            function Init(){
                obtenerPersonal();
                obtenernSkill();
                $scope.$on('actualizame',obtenerPersonal);
            }

               function obtenerPersonal() {
                //alert("Hola");
               servicioPersonal.getPersonal()
               .then(function(response){
                    vm.datos_personal = response;
                    //console.log(vm.datos_personal);
               })
               .catch(function(err){
                alert('No hay datos');
               });
            }

               function obtenernSkill() {
                //alert("Hola");
               servicioPersonal.getnSkill()
               .then(function(response){
                    vm.datos_skill = response;
                    //console.log("nskill");
                    //console.log(vm.datos_skill);
               })
               .catch(function(err){
                alert('No hay datos nskill');
               });
            }

            function agrega(aux){
              //console.log(aux.fnacimiento);
              servicioPersonal.savePersonal(aux)
              .then(function(response){
                alert("Personal Agregado con Exito");
                $scope.$emit('actualizame');
                //console.log(vm.objauxServ);
              })
              .catch(function(err){
                alert('Error al guardar');
               }); 
            }
            //mostrarDatos

            function obtenerPersonalID(id){
              vm.objauxServ={};
              servicioPersonal.getPersonalID(id)
              .then(function(response){
                vm.objauxServ = response;
                //console.log(response);
              })}

/////////////////////////////////////////////////////////////

           




            function actualizarAlumno(obj){
              servicioalumno.actualizarAlumno(obj.idAlumno, obj)
              .then(function(response){
                //vm.objAux = response;
                alert("Modificado");
                $scope.$emit('actualizame');
              })

            }
               function eliminarAlumno(obj){
              servicioalumno.eliminarAlumno(obj)
              .then(function(response){
                //vm.objAux = response;
                alert("Eliminado");
                $scope.$emit('actualizame');
              })

            }

        }

})();
