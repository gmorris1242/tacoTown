(function() {
  var orderForm = {
    template:`    <div class="form">
          <form ng-submit="$ctrl.addToOrder($ctrl.name, $ctrl.taco, $ctrl.drink)">
            <span>Name</span>
            <input type="text" placeholder="Name" ng-model="$ctrl.name" value="">
            <span>Taco</span>
            <select ng-model="$ctrl.taco">
              <option>Carne</option>
              <option>Pollo</option>
              <option>Pescado</option>
            </select>
            <div class="drinks">
              <input type="radio" name="drinks" ng-model="$ctrl.drink" value="Pop"><span>Pop</span>
              <input type="radio" name="drinks" ng-model="$ctrl.drink" value="Beer"><span>Beer</span>
              <input type="radio" name="drinks" ng-model="$ctrl.drink" value="None" ng-checked="true"><span>None</span>
            </div>
            <button type="submit">Place Order</button>
            <button class="remove" type="button" ng-click="$ctrl.remove()">Remove</button>

          </form>
        </div>
    `,
    controller: function(TacoService){
      var $ctrl = this;

        $ctrl.name = "";
        $ctrl.taco = "";
        $ctrl.addToOrder = function(name, taco, drink){
          if($ctrl.name !== "" && $ctrl.taco !== ""){
          TacoService.addOrder(name, taco, drink);
          $ctrl.name = "";
          $ctrl.taco = "";
          }
        }
      $ctrl.remove = function(){
        TacoService.remove();
      }
    }
  };

  angular.module("TacoModule")
    .component("orderForm",orderForm)
}());
