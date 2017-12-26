(function() {

    const App = {
        init: function() {
            console.log("In march...");
            const data = appModel.init();
            appRender.init(data);
            checkStats.init();
        }
    };
    
    window.addEventListener('load', App.init, false);
})();