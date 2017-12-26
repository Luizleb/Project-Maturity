// module not valid - first attempt to deal wuth the stats. Replaced by "check-stats-js".
/*appStats = (function() {
    stats = function() {
        const data = appModel.init();
        const dataMap = {};
        const areas = data.items.length;
        dataMap["areas"] = areas;
        var numSubAreas = 0;
        var numChecks = 0;
        var prior1=0, prior2=0, prior3=0;
        for (let i = 0; i < areas; i++) {
            numSubAreas += data.items[i]["checks"].length;
            for (let j = 0; j < data.items[i]["checks"].length; j++) {
                numChecks += data.items[i]["checks"][j]["subject"].length;
                for (let k = 0; k < data.items[i]["checks"][j]["subject"].length; k++) {
                    if(data.items[i]["checks"][j]["subject"][k]["priority"] === 1) {
                        prior1 += 1;
                    } else if(data.items[i].checks[j].subject[k].priority === 2) {
                            prior2 += 1;
                    } else {
                        prior3 += 1;
                    }
                } 
            }
        }
        dataMap["subareas"] = numSubAreas;
        dataMap["checks"] = numChecks;
        dataMap["prior1"] = prior1;
        dataMap["prior2"] = prior2;
        dataMap["prior3"] = prior3;
    return dataMap;
    };
    sidebar = function() {
        const obj = stats();
        const sideHtml = "<div class='stats__main'><h3>Stats</h3><ul><li>Subareas : " + 
        obj["subareas"] + "&nbsp<i class='fa fa-check'></i></li>"+
        "<li>Checks : " + obj["checks"] + "&nbsp<i class='fa fa-check'></i></li>" + 
        "<li>Priority 1 items : " + obj["prior1"] + "&nbsp<i class='fa fa-check'></i></li>"+ 
        "<li>Priority 2 items : " + obj["prior2"] + "&nbsp<i class='fa fa-check'></i></li>"+ 
        "<li>Priority 3 items : " + obj["prior3"] + "&nbsp<i class='fa fa-check'></i></li></ul></div>";
        document.getElementById("side").innerHTML = sideHtml;
    };
    return {
        init: sidebar
    };
})();*/
