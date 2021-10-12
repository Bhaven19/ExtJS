Ext.define('StartApp.view.kntest.KntestView',{
	xtype: 'kntestview',
	cls: 'kntestview',
	controller: 'kntestviewcontroller',
    extend: 'Ext.panel.Panel',

	requires: [
	    'Ext.field.RadioGroup',
	    'StartApp.model.Airport',
	    'StartApp.store.Airports'],

    title:'KN UI Elements',

    bodyPadding: 20,
    maxHeight: 1400,
    scrollable: 'false',
    width: 750,
    autoSize: true,

    items: [{
        xtype: 'radiogroup',
        label: 'Triple Radio Group Example',
        cls: 'x-check-group-alt',
        name: 'rb-auto',
        required: 'true',
        items: [
            { label: 'Yes', name: 'rb_TripleGroup'},
            { label: 'No', name: 'rb_TripleGroup'},
            { label: 'Null', name: 'rb_TripleGroup'}
        ]
    }, {
        xtype: 'combobox',
        label: 'Autocomplete: Choose an Airport',
        name: 'airportName',
        valueField: 'airportName',
        displayField: 'airportName',
        forceSelection: true,
        queryMode: 'local',
        clearable: true,
        required: 'true',
        placeholder: 'Select an airport...',
        store: {
            type: 'airports' //Page doesn't show when value entered
        }
    }],

    buttons: [{
        text: 'Register',
        handler: 'onRegister'
    }]

});
