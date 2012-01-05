NestedListDemo.views.ProductCard = Ext.extend(Ext.NestedList, {
   fullscreen: true,
    title: 'Products',
    iconCls: 'home',
    toolbar: {dock: 'top',
              ui: 'light',
              items: [
            {
                text: 'clear',
                handler: function() {
                    var cartTab = NestedListDemo.views.cartcard.tab;
                    cartTab.setBadge();
                }
            },
            {
                xtype: 'spacer'
            },
            {
                text: 'Tab Message',
                handler: function() {
                    var cartTab = NestedListDemo.views.cartcard.tab;
                    badgenumber = parseInt(cartTab.badgeText);
                    nextnumber = isNaN(badgenumber) ? 1 : badgenumber + 1;
                    cartTab.setBadge(nextnumber);
                }
            }
        ]},
    store: NestedListDemo.product_store,
    getDetailCard: function(item, parent) {
        var itemData = item.attributes.record.data;
        var parentData = parent.attributes.record.data;
        detailCard = new Ext.Panel({
            scroll: 'vertical',
            styleHtmlContent:true,
            tpl: ["<h2>{text}<h2>"]
        });
        detailCard.update(itemData);
        this.backButton.setText(parentData.text);
        return detailCard;
    },
    getItemTextTpl: function() {
        var tplConstructor = '{text}' +
            '<tpl if="type === \'category\'">' + 
                '<div class="metadata">' + 
                    '{[values.products.length]}' + 
                '</div>' + 
            '</tpl>';
        return tplConstructor;
    }
});

Ext.reg('productcard', NestedListDemo.views.ProductCard);