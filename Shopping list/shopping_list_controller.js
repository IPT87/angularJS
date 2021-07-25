var app = angular.module("shopping_list_app", []);

app.controller("shopping_list_controller", function($scope) {
    $scope.products = ["Milk", "Water", "Bread"];

    $scope.addItem = function() {
        if ($scope.products.includes($scope.new_product)) {
            document.getElementById("error_container").innerHTML = "The item is already in your shopping list.";
        } else if (!$scope.new_product) {
            return;
        } else {
            $scope.products.push($scope.new_product);
            document.getElementById("new_product").value = "";
            document.getElementById("error_container").innerHTML = "";
        }
    }

    $scope.removeItem = function(index) {
        document.getElementById("error_container").innerHTML = "";
        document.getElementById("new_product").value = "";
        $scope.products.splice(index, 1);
    }
});
