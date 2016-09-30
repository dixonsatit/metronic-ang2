"use strict";
var router_1 = require('@angular/router');
var main_component_1 = require('./main.component');
var new_component_1 = require('./new.component');
var edit_component_1 = require('./edit.component');
var appRoutes = [
    {
        path: '',
        component: main_component_1.MainComponent
    },
    {
        path: 'main',
        component: main_component_1.MainComponent
    },
    {
        path: 'new',
        component: new_component_1.NewComponent
    },
    {
        path: 'edit/:id',
        component: edit_component_1.EditComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map