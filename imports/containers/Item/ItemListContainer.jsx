import {composeWithTracker} from 'react-komposer';
import LoadingComponent from '/imports/ui/LoadingComponent';

import ItemList from '/imports/ui/Item/ItemList';
import {Items} from '/imports/api/Collections/items.js';


const composer = (props, onData) => {
	if(Meteor.subscribe('items').ready() &&
	   Meteor.subscribe('users').ready()) 
	{
		const items = Items.find({}).fetch();
		const users = Meteor.users.find({_id: {$ne: Meteor.userId()}}).fetch();

		onData(null, {items, users});
	}
};

export const ItemListContainer = composeWithTracker(composer, LoadingComponent)(ItemList);