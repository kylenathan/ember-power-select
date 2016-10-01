import Ember from 'ember';

const { isBlank, inject } = Ember;

export default Ember.Controller.extend({
  ajax: inject.service(),

  actions: {
    searchRepo(term) {
      if (isBlank(term)) {
        return [];
      }
      let url = `https://api.github.com/search/repositories?q=${term}`;
      return this.get('ajax').request(url).then((json) => json.items);
    }
  }
});