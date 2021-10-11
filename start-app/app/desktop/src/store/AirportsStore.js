Ext.define('StartApp.store.AirportsStore', {
    extend: 'Ext.data.ArrayStore',
	alias: 'store.airports',

    model: 'StartApp.model.Airport',
    storeId: 'airports',

    data: [
        [ '0', 'London Heathrow Airport', 'LHR', 'London', 'United Kingdom' ],
        [ '1', 'London Gatwick Airport', 'LGW', 'London', 'United Kingdom' ],
        [ '2', 'Manchester Airport', 'MAN', 'Manchester', 'United Kingdom' ],
        [ '3', 'Newcastle Airport', 'NCL', 'Newcastle', 'United Kingdom' ]
    ]

});
