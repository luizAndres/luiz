(function() {
    angular
        .module("ejemploAngular")
        .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $provide) {
           
    $stateProvider
      .state('app', {
        abstract:
         true,
        views: {
          titulo:{
            templateUrl: 'paginas/titulo.html'
          },
          nav: {
            templateUrl: 'paginas/nav.html'
            //controller: 'AuController as auth'
          },
        
          main: {
            templateUrl: 'main.html'
          }
        }
      })

      .state('app.principal', {
        url: '/home',
        views: {
          article: {
            templateUrl: 'paginas/home.html'
          }
        }
      })
      //
        .state('app.personal', {
        url: '/alumno',
        abstract: true,
         data: {
          permissions: {
            redirectTo: function () {
              return {
                state: 'app.principal',
                options: {
                  reload: true
                }
              };
            }
          }
        }
      })
     
      .state('app.personal.mostrar', {
        url: '/mostrar',
        views: {
          'article@app': {
            templateUrl: 'paginas/personal.html',
            controller: 'personalCtrl as pc'
          }
        }
      })
    
      
      //
       .state('app.maestro', {
        url: '/maestro',
        abstract: true,
         data: {
          permissions: {
            redirectTo: function () {
              return {
                state: 'app.principal',
                options: {
                  reload: true
                }
              };
            }
          }
        }
      })
     
      .state('app.maestro.alta', {
        url: '/alta',
        views: {
          'article@app': {
            templateUrl: 'paginas/home.html'
            //controller: 'alumnoCtrl as fz'
          }
        }
      })
    
      .state('app.maestro.mostrar', {
        url: '/mostrar',
        views: {
          'article@app': {
            templateUrl: 'paginas/mostrar_maestros.html',
            controller: 'maestrosCtrl as mc'
          }
        }
      })
      //


    $urlRouterProvider.otherwise(function ($injector) {
      var $state = $injector.get('$state');
      $state.go('app.principal');
    });
  })

})();