import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import 'meteor/aldeed:autoform/static'
import { AutoFormThemeBootstrap4 } from 'meteor/communitypackages:autoform-bootstrap4/static'
import 'bootstrap/dist/js/bootstrap.bundle';
AutoFormThemeBootstrap4.load()


import { Links } from '../imports/api/links/links';

AutoForm.setDefaultTemplate('bootstrap3-horizontal');
AutoForm.debug();

Template.hello.onCreated(function() {
    this.subscribe('links')
})

Template.hello.helpers({
  links() {
    return Links
  },
  linksCollection() {
    return Links.find()
  }
});

AutoForm.hooks({
  'insertLinkForm': {
      before: {
          'insert': function(doc) {
            console.log('before insert');
            console.log(doc);
            return doc;
          }
      },
      onSuccess: function (formType, result) {
        console.log('on Success')
        console.log(result)
      },
      onError: function(formType, error) {
        console.log('on error')
        console.log(error);
      },
  },
});
