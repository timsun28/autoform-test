// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
      },
      {
        title: 'Follow the Guide',
      },
      {
        title: 'Read the Docs',
      },
      {
        title: 'Discussions',
      },
    ];

    data.forEach(link => Links.insert(link));
  }
});
