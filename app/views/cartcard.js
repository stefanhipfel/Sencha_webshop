NestedListDemo.views.CartCard = Ext.extend(Ext.Panel, {
	fullscreen: true,
	title: 'Cart',
	iconCls: 'settings7',
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Shopping Cart',
		items: [
			{
				text: 'clear'
			},
			{
				xtype: 'spacer'
			},
			{
				text: 'Account'
			}
		]
	}]
});

Ext.reg('cartcard', NestedListDemo.views.CartCard);