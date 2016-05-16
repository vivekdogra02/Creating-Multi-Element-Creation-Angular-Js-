(function(app) {
    var checkType = function($scope) {
        var init = function() {
            $scope.selectedType = [{
                    id: 1,
                    name: 'Combo box',
                }, {
                    id: 2,
                    name: 'Radio button',
                }, {
                    id: 3,
                    name: 'Check Box',
                }, {
                    id: 4,
                    name: 'Text Box',
                },

            ];
            $scope.selectedTotal = ['10', '20', '30', '40'];
            //$scope.selectedNumber = $scope.selectedTotal[0];
        }

        $scope.submitData = function(check, total) {
            var inputType = check;
            var len = parseInt(total);
            $scope.typeValues = [check];
            $scope.result = [];
            var radio_home = document.getElementById("radio_home");
            switch (inputType) {
                case "Combo box":
                    var temp = "";
                    var obj=[];
                    var result;
                    for (var i = 1; i <= len; i++) {
                        var inputno = '<select ng-model = {{$scope.typeValues[0]}} >';
                        for (var j = 1; j <= len; j++) {
                            inputno += '<option value = Combo ' + j + '>Combo ' + j + ' </option>';
                            result[] = obj.push(inputno[j]);
                            $scope.result.push(result);
                        }
                        inputno += '</select></br>';
                        temp += inputno;
                    }
                  //  $scope.result.push(temp);

                    radio_home.innerHTML = temp;
                    break;

                case "Radio button":
                    var temp = "";
                    var obj=[];
                    var result;
                    for (var i = 1; i <= len; i++) {
                        var inputno = '<input type="radio" ng-model= {{$scope.typeValues[0]}} value="' + i + '" name = "name ' + i + ' "id="' + i + '">name ' + i + ' </input></br>';
                        result = obj.push(inputno);
                        $scope.result.push(result);
                        temp += inputno;
                    }
                    radio_home.innerHTML = temp;
                    break;
                case "Check Box":

                    var temp = "";
                    var obj=[];
                    var result;
                    for (var i = 1; i <= len; i++) {
                        var inputno = '<input type="checkbox" ng-model = {{$scope.typeValues[0]}} value="check ' + i + '" name = "name ' + i + ' "id="' + i + '">check ' + i + ' </input></br>';
                        result=obj.push(inputno);
                        $scope.result.push(result);
                        temp += inputno;
                    }
                    radio_home.innerHTML = temp;
                    break;
                case "Text Box":

                    var temp = "";
                    var obj=[];
                    var result;
                    for (var i = 0; i <= len; i++) {
                        var inputno = 'Text ' + i + ' : <input type="text" ng-model = {{$scope.typeValues[0]}} value= "" name = "name ' + i + ' "id="' + i + '"> </input></br>';
                        result=obj.push(inputno);
                        $scope.result.push(result);
                        temp += inputno;
                    }
                    radio_home.innerHTML = temp;
                    break;
                default:

            }


            console.log(check);
            console.log(total);
        };


        $scope.submitResult = function() {

            console.log($scope.typeValues);
            console.log($scope.result)

        }
        init();
    };

    app.controller('checkType', ['$scope', checkType]);
})(angular.module('randomApp'));
