NestedListDemo = new Ext.Application({
    name: "NestedListDemo",
    
    launch: function() {
        this.views.viewport = new this.views.Viewport();
        this.views.homecard = this.views.viewport.getComponent('home');
        this.views.cartcard = this.views.viewport.getComponent('cart');
    }
});

