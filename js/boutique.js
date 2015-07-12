
angular.module('myFilters', []).
        filter('customFilter', function () {
            return function (products, filter) {
                var results = [];
                console.log(filter);
                if (!filter.system_id) {
                    return products;
                }
                angular.forEach(products, function (product) {
                    if (product.system_id === filter.system_id) {
                        results.push(product);
                    }
                });
                return results;
            };
        });





app.controller('ShowsDetailController', ['$scope','$stateParams', 'ShowsService', function($scope, $stateParams, ShowsService) {
           session = JSON.parse(window.localStorage.getItem("session"));
    this.profile = session;
        $scope.selectedShow = ShowsService.find($stateParams.id);
        latitude = $scope.selectedShow.CNT_STORE_LATITUDE;
        longitude = $scope.selectedShow.CNT_STORE_LONGITUDE;

 }]);

app.controller('ShowsController', ['$scope','ShowsService', function($scope, ShowsService) {
    $scope.shows = ShowsService.list();
    $scope.systems = ShowsService.list_ville();
 }]);
 
 app.factory('ShowsService',function(){
     var shows = [
        {id: "1",CONTENT_TITLE: "boutique G\u00e9ant Tunis City", CONTENT_TEXT: null, CNT_STORE_ADRESSE: "Centre commercial Tunis City 2032-Ariana", CNT_STORE_VILLE: null, CNT_STORE_TEL1: null, CNT_STORE_LATITUDE: "36.900519", CNT_STORE_LONGITUDE: "10.124251", system_id: 1},
        {id: "2",CONTENT_TITLE: "boutique El Menzah 6", CONTENT_TEXT: null, CNT_STORE_ADRESSE: "LOGT UV4 BL 146 TYPE 5, EL MENZAH 6, 2091", CNT_STORE_VILLE: null, CNT_STORE_TEL1: null, CNT_STORE_LATITUDE: "36.845292", CNT_STORE_LONGITUDE: "10.167426", system_id: 1},
        {id: "3",CONTENT_TITLE: "boutique Ennaser 2", CONTENT_TEXT: null, CNT_STORE_ADRESSE: "RES SAID RDC BAS MAG N 2, ENNASER 2, 2037", CNT_STORE_VILLE: null, system_id: 1, CNT_STORE_TEL1: null, CNT_STORE_LATITUDE: "36.862586", CNT_STORE_LONGITUDE: "10.165171"},
        {id: "4",CONTENT_TITLE: "Boutique Ariana", CONTENT_TEXT: "du lundi au samedi 8h30 \u00e0 19h00\r\ndimanche Ferm\u00e9e", CNT_STORE_ADRESSE: "89 bis, Avenue Habib Bourguiba \u2013 Nouvelle Ariana", CNT_STORE_VILLE: "Ariana", CNT_STORE_TEL1: null, CNT_STORE_LATITUDE: "36.854449", CNT_STORE_LONGITUDE: "10.186243", CNT_STORE_GOUVERNAT: "ariana", system_id: 1},
        {id: "5",CONTENT_TITLE: "King of GSM", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "7, Av Sadok R'mit", CNT_STORE_VILLE: "KALAAT LANDALOUS - ARIANA", CNT_STORE_TEL1: "55300046", CNT_STORE_LATITUDE: "37.06277258", CNT_STORE_LONGITUDE: "10.1195132", CNT_STORE_GOUVERNAT: "ariana", system_id: 1},
        {id: "6",CONTENT_TITLE: "FONO", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "R\u00e9sidence Horizon, Av. H\u00e9di Nouia Cit\u00e9 Ennasr", CNT_STORE_VILLE: "ENNASR - ARIANA", CNT_STORE_TEL1: "50500779", CNT_STORE_LATITUDE: "36.8645073", CNT_STORE_LONGITUDE: "10.16756097", CNT_STORE_GOUVERNAT: "ariana", system_id: 1},
        {id: "7",CONTENT_TITLE: "Frikha Audio", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "R\u00e9sidence Ettaoufik, Av. H\u00e9di Nouira, Ennasr II", CNT_STORE_VILLE: "ENNASR - ARIANA", CNT_STORE_TEL1: "55412150", CNT_STORE_LATITUDE: "36.85761874", CNT_STORE_LONGITUDE: "10.16143715", system_id: 1},
        {id: "8",CONTENT_TITLE: "High-Tech Ennasr", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "Av. H\u00e9di Nouira, centre El Fel Ennasr", CNT_STORE_VILLE: "ENNASR - ARIANA", CNT_STORE_TEL1: "55372731 ", CNT_STORE_LATITUDE: "36.86416994", CNT_STORE_LONGITUDE: "10.16746282", system_id: 1},
        {id: "9",CONTENT_TITLE: "Ariana telecom", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "2, Avenue Taieb Mhiri", CNT_STORE_VILLE: "ARIANA VILLE - ARIANA", CNT_STORE_TEL1: "55325466", CNT_STORE_LATITUDE: "36.8581711", CNT_STORE_LONGITUDE: "10.19221854", system_id: 1},
        {id: "10",CONTENT_TITLE: "boutique B\u00e9j\u00e0", CONTENT_TEXT: null, CNT_STORE_ADRESSE: "23, Avenue Habib Bourguiba", CNT_STORE_CP: null, CNT_STORE_VILLE: null, CNT_STORE_TEL1: null, CNT_STORE_LATITUDE: "36.724790", CNT_STORE_LONGITUDE: "9.186321", system_id: 2},
        {id: "11",CONTENT_TITLE: "MED PHONE", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "adresse: 111 Avenue habib bourguiba \u00e0 cot\u00e9 de BH", CNT_STORE_VILLE: "MJEZ EL BEB - BEJA", CNT_STORE_TEL1: "50466809", CNT_STORE_LATITUDE: "36.6482387767552", CNT_STORE_LONGITUDE: "9.61285225233662", system_id: 2},
        {id: "12",CONTENT_TITLE: "B.B", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "adresse: 1, Avenue de France", CNT_STORE_VILLE: "BEJA VILLE - BEJA", CNT_STORE_TEL1: "55822153", CNT_STORE_LATITUDE: "36.722924974538", CNT_STORE_LONGITUDE: "9.18941240705068", system_id: 2},
        {id: "13",CONTENT_TITLE: "PHONE 3G", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "adresse: Avenue Habib Bourguiba", CNT_STORE_VILLE: "MJEZ EL BEB - BEJA", CNT_STORE_TEL1: "50404859", CNT_STORE_LATITUDE: "36.6478451802288", CNT_STORE_LONGITUDE: "9.61419379651075", system_id: 2},
        {id: "14",CONTENT_TITLE: "INFONORD", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "adresse: Avenue de l'Environnement", CNT_STORE_VILLE: "TESTOUR - BEJA", CNT_STORE_TEL1: "55957264", CNT_STORE_LATITUDE: "36.5520839116578", CNT_STORE_LONGITUDE: "9.44512584922477", system_id: 2},
        {id: "15",CONTENT_TITLE: "IMTIEZ INFORMATIQUE", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "adresse: Avenue 18 Janvier", CNT_STORE_VILLE: "BEJA VILLE - BEJA", CNT_STORE_TEL1: "55490327", CNT_STORE_LATITUDE: "36.7268614228023", CNT_STORE_LONGITUDE: "9.18644810661296", system_id: 2},
        {id: "16",CONTENT_TITLE: "NOURI PHONE", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "adresse: Avenue de la R\u00e9publique, Imm Ayedi", CNT_STORE_VILLE: "BEJA VILLE - BEJA", CNT_STORE_TEL1: "55902937", CNT_STORE_LATITUDE: "36.7225163495219", CNT_STORE_LONGITUDE: "9.18954488443386", system_id: 2},
        {id: "17",CONTENT_TITLE: "BEN YOUSSEF GSM", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "adresse: Avenue Bechir Sfar", CNT_STORE_VILLE: "BEJA VILLE - BEJA", CNT_STORE_TEL1: "55487790", CNT_STORE_LATITUDE: "36.7268614228023", CNT_STORE_LONGITUDE: "9.18644810661296", system_id: 2},
        {id: "18",CONTENT_TITLE: "TEBORSOK GSM", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "adresse: Sehat Erriadh", CNT_STORE_VILLE: "TEBORSOK - BEJA", CNT_STORE_TEL1: "50671455", CNT_STORE_LATITUDE: "36.4565081417241", CNT_STORE_LONGITUDE: "9.24790258399385", system_id: 2},
        {id: "19",CONTENT_TITLE: "WIKI", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "16, Rue Hassen Ibn Noomen", CNT_STORE_VILLE: "BEJA VILLE - BEJA", CNT_STORE_TEL1: "78442448", CNT_STORE_LATITUDE: "36.72227791", CNT_STORE_LONGITUDE: "9.189678439", system_id: 2},
        {id: "20",CONTENT_TITLE: "INFONORD", CONTENT_TEXT: "du lundi au vendredi 08H-13H \/ 14H-21H", CNT_STORE_ADRESSE: "adresse: BOULVARD DE L'ENVIRONNEMENT TESTOUR", CNT_STORE_VILLE: "TESTOUR", CNT_STORE_TEL1: "55957264", CNT_STORE_LATITUDE: "36.5520839", CNT_STORE_LONGITUDE: "9.44512585", system_id: 2},
        {id: "21",CONTENT_TITLE: "boutique Ezzahra", CONTENT_TEXT: null, CNT_STORE_ADRESSE: "RESID EZZAHRA CENTRE BLOC A 4ET, EZZAHRA, 2034", CNT_STORE_VILLE: null, CNT_STORE_TEL1: null, CNT_STORE_LATITUDE: "36.739833", CNT_STORE_LONGITUDE: "10.302705", system_id: 3},
        {id: "22",CONTENT_TITLE: "Boutique Ben Arous", CONTENT_TEXT: "du lundi au samedi 8h30 \u00e0 19h00\r\ndimanche 9h \u00e0 15h", CNT_STORE_ADRESSE: "Avenue de France", CNT_STORE_VILLE: "Ben Arous", CNT_STORE_TEL1: null, CNT_STORE_LATITUDE: "45.454791", CNT_STORE_LONGITUDE: "10.133345", system_id: 3},
        {id: "23",CONTENT_TITLE: "Delta phone", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "2, rue de la Republique", CNT_STORE_VILLE: "RADES - BEN AROUS", CNT_STORE_TEL1: "50021500 ", CNT_STORE_LATITUDE: "36.76778018", CNT_STORE_LONGITUDE: "10.27305538", system_id: 3},
        {id: "24",CONTENT_TITLE: "Abiriga Services GSM", CONTENT_TEXT: "du lundi au vendredi 9h-19h", CNT_STORE_ADRESSE: "5, rue El Farabi", CNT_STORE_VILLE: "RADES - BEN AROUS", CNT_STORE_TEL1: "50422276 \/ 50422276", CNT_STORE_LATITUDE: "36.76995544", CNT_STORE_LONGITUDE: "10.27308799", system_id: 3},
        {id: "25",CONTENT_TITLE: "WIKI", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "18, Rue des martyrs, Tunis", CNT_STORE_VILLE: "MOUROUJ 1 - BEN AROUS", CNT_STORE_TEL1: "79359441", CNT_STORE_LATITUDE: "36.73827033", CNT_STORE_LONGITUDE: "10.20697017", system_id: 3},
        {id: "26",CONTENT_TITLE: "Mimo SIM", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "R\u00e9sidence Nozha 2, Boulevard de l'Environnement (\u00e0 cot\u00e9 de l'UBCI)", "CNT_STORE_CP": null, CNT_STORE_VILLE: "BOUMHEL - BEN AROUS", CNT_STORE_TEL1: "52090177", CNT_STORE_LATITUDE: "36.72317065", CNT_STORE_LONGITUDE: "10.30020388", system_id: 3},
        {id: "27",CONTENT_TITLE: "MEDIATEL", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "58, avenue Habib Bourguiba", CNT_STORE_VILLE: "MEGRINE - BEN AROUS", CNT_STORE_TEL1: "55425309", CNT_STORE_LATITUDE: "36.77240603", CNT_STORE_LONGITUDE: "10.22672322", system_id: 3},
        {id: "28",CONTENT_TITLE: "Primavera GSM", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "adresse: 4, avenue Taieb Mhiri", "CNT_STORE_CP": null, CNT_STORE_VILLE: "HAMMAM LIF - BEN AROUS", CNT_STORE_TEL1: "55144144 ", CNT_STORE_LATITUDE: "36.7312774555608", CNT_STORE_LONGITUDE: "10.337020662747", system_id: 3},
        {id: "29",CONTENT_TITLE: "Global Services Informatique", CONTENT_TEXT: "du lundi au vendredi 8h-19h", CNT_STORE_ADRESSE: "20, Avenue 20 Mars ", "CNT_STORE_CP": null, CNT_STORE_VILLE: "MOUROUJ 4 - BEN AROUS", CNT_STORE_TEL1: "50157525 ", CNT_STORE_LATITUDE: "36.71235346", CNT_STORE_LONGITUDE: "10.20663494", system_id: 3}
    ];

    var systems = [
        {id: 1, CNT_STORE_GOUVERNAT: "ariana"},
        {id: 2, CNT_STORE_GOUVERNAT: "Beja"},
        {id: 3, CNT_STORE_GOUVERNAT: "Ben Arous"},
        {id: 4, CNT_STORE_GOUVERNAT: "Bizerte"},
        {id: 5, CNT_STORE_GOUVERNAT: "Gabes"},
        {id: 6, CNT_STORE_GOUVERNAT: "Gafsa"},
        {id: 7, CNT_STORE_GOUVERNAT: "Jendouba"},
        {id: 8, CNT_STORE_GOUVERNAT: "Kairouan"},
        {id: 9, CNT_STORE_GOUVERNAT: "Kasserine"},
        {id: 10, CNT_STORE_GOUVERNAT: "Kebili"},
        {id: 11, CNT_STORE_GOUVERNAT: "Kef"},
        {id: 12, CNT_STORE_GOUVERNAT: "Mahdia"},
        {id: 13, CNT_STORE_GOUVERNAT: "Mannouba"},
        {id: 14, CNT_STORE_GOUVERNAT: "Medenine"},
        {id: 15, CNT_STORE_GOUVERNAT: "Monastir"},
        {id: 16, CNT_STORE_GOUVERNAT: "Nabeul"},
        {id: 17, CNT_STORE_GOUVERNAT: "Sfax"},
        {id: 18, CNT_STORE_GOUVERNAT: "Sidi Bouzid"},
        {id: 19, CNT_STORE_GOUVERNAT: "Siliana"},
        {id: 20, CNT_STORE_GOUVERNAT: "Sousse"},
        {id: 21, CNT_STORE_GOUVERNAT: "Tataouine"},
        {id: 22, CNT_STORE_GOUVERNAT: "Tozeur"},
        {id: 23, CNT_STORE_GOUVERNAT: "Tunis"},
        {id: 24, CNT_STORE_GOUVERNAT: "Zaghouan"}
    ];

    return {
        list: function(){
            return shows ;
        },
        
        list_ville: function(){
            return systems ;
        },
        find: function(id){
            return _.find(shows, function(show){return show.id == id});
        }
    }});
 