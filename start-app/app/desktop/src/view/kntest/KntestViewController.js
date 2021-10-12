Ext.define('StartApp.view.kntest.KntestViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.knform-register',

    onRegister: function() {

        var form = this.getView();

        if (form.isValid()) {
            Ext.Msg.alert('Registration Complete', 'You have successfully registered');
        } else {
            Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');
        }
    }

});
