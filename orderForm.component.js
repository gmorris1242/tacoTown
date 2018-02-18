(function() {
  var orderForm = {
    template:`    <div class="form">
          <form ng-submit="$ctrl.addToOrder($ctrl.name, $ctrl.taco)">
            <span>Name</span>
            <input type="text" placeholder="Name" ng-model="$ctrl.name">
            <span>Taco</span>
            <select ng-model="$ctrl.taco">
              <option>Carne</option>
              <option>Pollo</option>
              <option>Pescado</option>
            </select>
            <button type="submit">Place Order</button>
          </form>
        </div>
    `,
    controller: function(TacoService){
      var $ctrl = this;
      $ctrl.addToOrder = function(name, taco){
        TacoService.addOrder(name, taco);
        $ctrl.name = "";
        $ctrl.taco = "";
      }
    }
  };

  angular.module("TacoModule")
    .component("orderForm",orderForm)
}());
