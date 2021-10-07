Ext.define('StartApp.view.basicgrid.BasicgridView',{
	xtype: 'basicgridview',
	cls: 'basicgridview',
	controller: {type: 'basicgridviewcontroller'},
	viewModel: {type: 'basicgridviewmodel'},
	requires: [],
	extend: 'Ext.panel.Panel',

	html: '<div style="font-size:24px;">basicgridview</div>'
});
