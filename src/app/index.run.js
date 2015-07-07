(function() {
  'use strict';

  angular
    .module('cmclient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
