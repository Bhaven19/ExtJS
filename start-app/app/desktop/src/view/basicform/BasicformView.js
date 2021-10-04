Ext.define('StartApp.view.basicform.BasicformView',{
	xtype: 'basicformview',
	cls: 'basicformview',
	controller: {type: 'basicformviewcontroller'},
	viewModel: {type: 'basicformviewmodel'},
	requires: [],
	extend: 'Ext.panel.Panel',

	html: '<div style="font-size:24px;">basicformview</div>'
});
