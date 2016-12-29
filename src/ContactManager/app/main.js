System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Main;
    return {
        setters:[],
        execute: function() {
            Main = (function () {
                function Main() {
                }
                Main.prototype.test = function () {
                    alert("Hello!");
                };
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main.js.map