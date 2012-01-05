NestedListDemo.views.HomeCard = Ext.extend(Ext.Panel, {
	fullscreen: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
	title: 'home',
	iconCls: 'home',
	items: [
      
        {
            xtype    : 'carousel',
            height: 200,
            direction: 'horizontal',
            
            items: [
            {
            html : 'Item 1',
            style: {background: "url('http://de.elegance.staging.dmc.de//uploads//pics//de_15_glamlooks.jpg')",
        			backgroundSize: '100%'}
           // style: 'background-image: url("http://de.elegance.staging.dmc.de//uploads//pics//de_15_glamlooks.jpg"), background-size: 100%'
        	},
        {
            html : 'Item 2',
            style: {background: "url('http://de.elegance.staging.dmc.de/uploads/pics/de_icebox_16_citylooks.jpg')",
        			backgroundSize: '100%'}
        },
        {
            html : 'Item 3'
        }
            ]
        },
        {
            xtype    : 'carousel',
            flex     : 2,
            direction: 'vertical',
            
            items: [
            {
            html : 'Angebot der Woche',
            style: 'background-color: #5E99CC'
        	},
        {
            html : 'Item 2',
            style: 'background-color: #759E60'
        },
        {
            html : 'Item 3'
        }
            ]
        }
        ]
});

Ext.reg('homecard', NestedListDemo.views.HomeCard);

NestedListDemo.views.T1 = Ext.extend(Ext.Carousel, {
	defaults: {
		styleHtmlContent: true
	},

    items: [
        {
            html: '<p>Navigate the carousel on this page by swiping left/right.</p>',
            cls : 'card card1'
        },
        {
            html: '<p>Clicking on either side of the indicators below</p>',
            cls : 'card card2'
        },
        {
            html: 'Card #3',
            cls : 'card card3'
        }
    ]
});
