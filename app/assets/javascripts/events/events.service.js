(function() {

  'use strict';

  function EventsService($http, $state) {

    this.getEvent = function(param) {
      return $http.get('api/v1/causes/' + param.causeId + '/events/' + param.eventId + '.json')
        .then(handleSuccess)
        .catch(handleError)
    };

    this.newEvent = function(cause, eventData) {
      return $http.post('api/v1/causes/' + cause.id  + '/events.json', eventData)
        .then(showEvent)
    };

    function showEvent(cause) {
      var params = {};

      params.causeId = cause.data.data.relationships.cause.data.id;
      params.eventId = cause.data.data.id;

      $state.go('causes.event', { causeId: params.causeId, eventId: params.eventId });
    };

    function handleSuccess(response) {
      console.log(response);
      return response.data;
    };

    function handleError(error) {
      console.log(error);
    };
  };

  angular
    .module('uponnyc')
    .service('EventsService', EventsService)

}());