NestedListDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,

    tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    },
    items: [
    {
        xtype: 'homecard',
        id: 'home'
    },
    {
        xtype: 'productcard' 
    },
    {
        xtype: 'cartcard',
        id: 'cart' 
    },
    {
        xtype: 'shopcard' 
    },
    {
        xtype: 'morecard' 
    }
    ]
});

