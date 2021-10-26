
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'
import {Tracker} from "meteor/tracker";
SimpleSchema.extendOptions(['autoform']);



export const Links = new Mongo.Collection('links');

Links.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    }
});

const linksSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    }
}, {tracker: Tracker});

linksSchema.debug = true;
Links.attachSchema(linksSchema);
