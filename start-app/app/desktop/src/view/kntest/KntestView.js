Ext.define('StartApp.view.kntest.KntestView',{
	xtype: 'kntestview',
	cls: 'kntestview',
	controller: {type: 'kntestviewcontroller'},
    extend: 'Ext.panel.Panel',

	requires: ['Ext.field.RadioGroup',
               'StartApp.model.AirportModel',
               'StartApp.store.AirportsStore'],

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
            { label: 'Yes', name: 'rb_Yes'},
            { label: 'No', name: 'rb_Yes'},
            { label: 'Null', name: 'rb_Yes'}
        ]
    }, {
        xtype: 'combobox',
        label: 'Autocomplete',
        name: 'Airport',
        valueField: 'abbr',
        displayField: 'airportName',
        forceSelection: true,
        queryMode: 'local',
        clearable: true,
        placeholder: 'Select an Airport',
        store: {
            type: 'airports'
        }
    }]

});
