Ext.define('StartApp.store.Airports', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.airports',

	model: 'StartApp.model.Airport',
	storeId: 'airports',

    data: [
        ['London Heathrow Airport', 'LHR', 'London', 'United Kingdom' ],
        ['London Gatwick Airport', 'LGW', 'London', 'United Kingdom' ],
        ['Manchester Airport', 'MAN', 'Manchester', 'United Kingdom' ],
        ['Newcastle Airport', 'NCL', 'Newcastle', 'United Kingdom' ]
    ]

});
