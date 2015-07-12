var app = angular.module('app', ['ui.router', 'myFilters']);

app.config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('/home', {
                    url: "/home",
                    templateUrl: "partials/home.html",
                    controller: 'homeController',
                    controllerAs: 'homeCtrl'
                })

                .state('login', {
                    url: "/login",
                    templateUrl: "partials/login.html",
                    controller: 'loginController',
                    controllerAs: 'loginCtrl'
                })

                .state('login_poste', {
                    url: "/login_poste",
                    templateUrl: "partials/login_poste.html",
                    controller: 'loginPosteController',
                    controllerAs: 'loginPosteCtrl'
                })

                .state('confirmation_login', {
                    url: "/confirmation_login",
                    templateUrl: 'partials/code_sms.html',
                    controller: 'codeController',
                    controllerAs: 'codeCtrl'
                })

                .state('profile', {
                    url: "/profile",
                    templateUrl: 'partials/profile.html',
                    controller: 'profileController',
                    controllerAs: 'profileCtrl'
                })

                .state('inscription', {
                    url: "/inscription",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/inscription_carte.html',
                            controller: 'incriptionController',
                            controllerAs: 'inscriptionCtrl'
                        }
                    }
                })

                .state('historique', {
                    url: "/historique",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/historique.html',
                            controller: 'historiqueController',
                            controllerAs: 'historiqueCtrl'
                        }
                    }
                })

                .state('recharge_orange', {
                    url: "/recharge_orange",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/recharge_orange.html',
                            controller: 'rechargeOrangeController',
                            controllerAs: 'rechargeCtrl'
                        }
                    }
                })

                .state('edit_profil', {
                    url: "/edit_profil",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/edit_profil.html',
                            controller: 'profileController',
                            controllerAs: 'profileCtrl'
                        }
                    }
                })

                .state('desinscription', {
                    url: "/desinscription",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/desinscription.html',
                            controller: 'desinscriptionController',
                            controllerAs: 'desinscriptionCtrl'
                        }
                    }
                })

                .state('blocage_carte', {
                    url: "/blocage_carte",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/blocage.html',
                            controller: 'blocageController',
                            controllerAs: 'blocageCtrl'
                        }
                    }
                })

                .state('renouvellement', {
                    url: "/renouvellement",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/renouvellement.html',
                            controller: 'renouvellementController',
                            controllerAs: 'renouvellementCtrl'
                        }
                    }
                })

                .state('recharge_mobile', {
                    url: "/recharge_mobile",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/recharge_mobile.html',
                            controller: 'rechargeController',
                            controllerAs: 'rechargeCtrl'
                        }
                    }
                })

                .state('facture_sonede', {
                    url: "/facture_sonede",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/facture_sonede.html',
                            controller: 'sonedeController',
                            controllerAs: 'sonedeCtrl'
                        }
                    }
                })

                .state('facture_steg', {
                    url: "/facture_steg",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/facture_steg.html',
                            controller: 'stegController',
                            controllerAs: 'stegCtrl'
                        }
                    }
                })

                .state('mandat_minute', {
                    url: "/mandat_minute",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/mandat_minute.html',
                            controller: 'mandatMinuteController',
                            controllerAs: 'mandatMinuteCtrl'
                        }
                    }
                })

                .state('mandat_bource', {
                    url: "/mandat_bource",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/mandat_bource.html',
                            controller: 'mandatBourceController',
                            controllerAs: 'mandatBourceCtrl'
                        }
                    }
                })

                .state('mandat_western_union', {
                    url: "/mandat_western_union",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/mandat_western_union.html',
                            controller: 'mandatWesternUnionController',
                            controllerAs: 'mandatWesternUnionCtrl'
                        }
                    }
                })

                .state('micro_credit', {
                    url: "/micro_credit",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/micro_credit.html',
                            controller: 'microCreditController',
                            controllerAs: 'microCreditCtrl'
                        }
                    }
                })

                .state('shows', {
                    url: "/shows",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/boutiques.html',
                            controller: 'ShowsController',
                            controllerAs: 'ShowsCtrl'

                        }
                    }
                })

                .state('virement_compte', {
                    url: "/virement_compte",
                    views: {
                        'header': {
                            templateUrl: 'partials/templates/header.html',
                            controller: 'menuController',
                            controllerAs: 'menuCtrl'
                        },
                        'content': {
                            templateUrl: 'partials/virement_compte.html',
                            controller: 'virementController',
                            controllerAs: 'virementCtrl'
                        }
                    }
                })


                .state('shows.detail', {
                    url: '/detail/:id',
                    templateUrl: 'partials/details_boutique.html',
                    controller: 'ShowsDetailController'
                });
    });

/******************Contrôlleur d'authentification**********************/
app.controller('homeController', function ($scope, $location) {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
    $scope.redirect = function () {
        if (session == null) {
            $location.path("/login");
        } else {
            $location.path("/login_poste");
        }
    }
});

/******************Contrôlleur d'authentification**********************/
app.controller('loginPosteController', function ($scope, $location) {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;

    $scope.submitLogin = function () {
        var code = 0000;
        if ($scope.codeConfidentiel == code) {
            $location.path("/historique");
        } else {
            alert("Veuillez saisir un code correct");
        }

    }
});

/******************Contrôlleur d'authentification**********************/
app.controller('loginController', function ($scope) {
    $scope.tel = ""
    $(".modal_class .btn").on("click", function () {
        //recupéré la valeur de l'input tel
        var tel = $scope.tel;
        //tester si le numéro de téléphone est valide 
        if ((tel != "") && (tel.match('^\\d{8}$')) && (tel[0] == 5)) {
            //ajouter attribut data-toggle pour afficher un popup
            $(".modal_class .btn").attr("data-toggle", "modal");
            // en cliquant sur le boutton ok 
            $("#modal_btn").on("click", function () {
                var minNumber = 1000; // le minimum de la valeur random
                var maxNumber = 9998; // le maximum

                //afficher une valeur aléatoire
                var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
                alert(randomnumber);

                // stoker les valeur dans une session
                window.sessionStorage.setItem("random", JSON.stringify(randomnumber));
                window.sessionStorage.setItem("tel", JSON.stringify(tel));

                // redirecter vers la page confirmation du code envoyer par message
                window.location = "#/confirmation_login";
                //----il reste l'invocation du web service pour envoyer le massage ------
                $(".modal-backdrop").hide();
            });
        } else {
            alert("Veuillez entrer un numéro de télephone valide");
            $(".modal_class .btn").removeAttr("data-toggle");
        }
    });
});

app.controller('codeController', function ($scope, $timeout) {
    //recupération de la valeur session du random
    random_session = JSON.parse(window.sessionStorage.getItem("random"));
    $scope.code = "";
    //tester la valeur envoyer par message et la valeur saisie
    $("#code_btn").on("click", function () {
        var code = $scope.code;
        if (code.match('^\\d{4}$') && (code != null) && (code != "")) {
            if (random_session == code) {
                $scope.$on('$destroy', function () {
                    $timeout.cancel(promise);
                });
                alert("Merci, votre Code est correct");
                window.location = "#/profile";
            } else {
                alert("Désoler, Veuillez introduire le code correct");
            }
        } else {
            alert("Vous devez saisir un numéro de 4 chiffre");
        }
    });

    var promise = $timeout(callAtTimeout, 30000);
    console.log(random_session);
});

function callAtTimeout() {
    $scope.$on('$destroy', function () {
        $timeout.cancel(promise);
    });
    alert("Temps ecouler, veillez générer de nouveau votre code");
    window.location = "#/login";
}

app.controller('profileController', function ($scope) {

    $scope.name = "";
    $scope.submit = function () {
        if ($scope.name == "") {
            alert("Veuillez saisir votre nom");
        } else {
            alert("Félicitation votre profil est prêt");
            tel = JSON.parse(window.localStorage.getItem("tel"));

            var session = new Object();
            session.tel = tel;
            session.name = $scope.name;
            session.img = smallImage.src;

            window.localStorage.setItem("session", JSON.stringify(session));
            window.location = "#/inscription";

        }
    }

});

app.controller('menuController', function ($scope, $location) {
    $(".navbar-nav a").on("click", function () {
        $("html").removeClass("slideout-open");
        $("#panel").css("-webkit-transform", "");
        $("#panel").css("transform", "");
    });
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;

    $scope.deconectLogin = function () {
        window.sessionStorage.removeItem("session");
        session = window.sessionStorage.removeItem("session");
        if (window.sessionStorage.getItem("session") == null) {
            $location.path("/home");
        } else {
            alert("pb de deconnexion");
        }
    }
});


app.controller('incriptionController', function () {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
});


app.controller('historiqueController', function () {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
});

app.controller('blocageController', function ($scope) {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
    var confirmation = true;

    $scope.confirmation = function () {
        if (confirmation == true) {
            alert("Votre carte e-dinar Smart a été bloquée avec succès. Le déblocage peut s'effectuer sur le site www.e-dinar.poste.tn ou appelez le 1828. ");
        }
    }
});



app.controller('desinscriptionController', function ($scope, $location) {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
    var confirmation = true;
    $scope.confirmation = function () {
        if (confirmation == true) {
            window.localStorage.removeItem("session");
            session = "";
            alert("Vous vous êtes désinscrit du service Mobimoney. Pour réutiliser ce service vous pouvez vous réinscrire");
            if (window.sessionStorage.getItem("session") == null) {
                $location.path("/home");
            } else {
                alert("pb de deconnexion");
            }
        }
    }
});



app.controller('renouvellementController', function ($scope) {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
    var confirmation = true;

    $scope.confirmation = function () {
        if (confirmation == true) {
            alert("Félicitation! vous avez renouvelé votre carte e-dinar Smart avec succès. Vous pouvez commencer à utiliser le service Mobimoney.");
        }
    }
});


app.controller('rechargeController', function ($scope) {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
    var confirmation = true;

    $scope.confirmation = function () {
        if (confirmation == true) {
            alert("Félicitation! vous avez renouvelé votre carte e-dinar Smart avec succès. Vous pouvez commencer à utiliser le service Mobimoney.");
        }
    }
});

app.controller('sonedeController', function () {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
});


app.controller('stegController', function () {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
});

app.controller('mandatMinuteController', function () {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
});

app.controller('mandatBourceController', function () {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
});

app.controller('mandatWesternUnionController', function () {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
});

app.controller('microCreditController', function () {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
});

app.controller('virementController', function () {
    session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
});


