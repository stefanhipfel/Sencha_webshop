NestedListDemo.product_store = new Ext.data.TreeStore({
    model: 'ListItem',
    proxy: {
        type: 'ajax',
        url: 'http://10.41.22.94:1337/getProductCategories/1',
        reader: {
            type: 'tree',
            root: 'products'
        }
    }
});
