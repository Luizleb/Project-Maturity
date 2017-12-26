(function() {

    const App = {
        init: function() {
            console.log("In march...");
            const data = appModel.init();
            appRender.init(data);
            appStats.init();
        }
    };
    
    window.addEventListener('load', App.init, false);
})();