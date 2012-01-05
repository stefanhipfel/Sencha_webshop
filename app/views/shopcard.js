NestedListDemo.views.ShopCard = Ext.extend(Ext.Panel, {
	fullscreen: true,
	title: 'Shop-Finder',
	iconCls: 'locate',
	items: [{
        xtype: 'map',
        useCurrentLocation: true
    }]
});

Ext.reg('shopcard', NestedListDemo.views.ShopCard);