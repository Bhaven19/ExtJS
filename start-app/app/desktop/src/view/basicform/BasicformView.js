Ext.define('StartApp.view.basicform.BasicformView',{
	xtype: 'basicformview',
	cls: 'basicformview',
	controller: {type: 'basicformviewcontroller'},
	viewModel: {type: 'basicformviewmodel'},
	requires: [],
	extend: 'Ext.form.Panel',

    bodyPadding: 20,
    minHeight: 700,
    scrollable: 'y',
    width: 500,
    autoSize: true,

    items: [{
        xtype: 'fieldset',
        title: 'User Info',
        defaults: {
            required: true
        },
        items: [
            { xtype: 'textfield', label: 'User ID', name: 'user' },
            { xtype: 'passwordfield', label: 'Password', name: 'pass' },
            { xtype: 'passwordfield', label: 'Verify Password', name: 'pass_verify' },
        ]
    }, {
        xtype: 'fieldset',
        title: 'Contact Information',
        defaultType: 'textfield',
        margin: '20 0 0',
        items: [{
            label: 'First Name',
            name: 'fName',
            required: true,
        }, {
            label: 'Last Name',
            name: 'lName',
            required: true,
        }, {
            label: 'Company',
            name: 'company'
        }, {
            xtype: 'emailfield',
            label: 'Email',
            name: 'email',
            allowBlank: false,
            required: true,
            validators: 'email'
        }, {
            xtype: 'datepickerfield',
            label: 'Date of Birth',
            name: 'dob',
            required: true,
            maxValue: new Date()
        }]
    }],

    buttons: [{
        text: 'Register',
        formBind: true
    }]

});
