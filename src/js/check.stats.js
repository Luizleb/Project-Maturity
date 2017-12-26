checkStats = (function() {
    checkState = function(evt) {
        const data = appModel.init();
        var numTotAreas = 0;
        var numTotChecked = 0;
        var checkedHtml = "<div class='stats__main'><h3>Stats</h3><ul>";       
        for (let i = 0; i < data.items.length; i++) {
            checkedHtml += "<li>Area : " + data.items[i]["area"] + "</li>";
            var numSubareas = 0;
            var numChecked = 0;
            for (let j = 0; j < data.items[i]["checks"].length; j++) {
                checkedHtml += "<li>Subarea : " + data.items[i]["checks"][j]["code"];
                var total = 0;
                var prior1_ckd=0, prior2_ckd=0, prior3_ckd=0;
                for (let k = 0; k < data.items[i]["checks"][j]["subject"].length; k++) {
                    total = data.items[i]["checks"][j]["subject"].length;
                    var current = data.items[i]["checks"][j]["subject"][k]["priority"];
                    if(current === 1) {
                        prior1_ckd = document.querySelectorAll("[data-item-area = '" + 
                        data.items[i]["area"] + "']"+"[data-item-subarea = '" + 
                        data.items[i]["checks"][j]["code"] + "']"+
                        "[data-item-checked = 'true']" + 
                        "[data-item-prior = '1']").length;
                    } else if(current === 2) {
                        prior2_ckd = document.querySelectorAll("[data-item-area = '" + 
                        data.items[i]["area"] + "']"+"[data-item-subarea = '" + 
                        data.items[i]["checks"][j]["code"] + "']"+
                        "[data-item-checked = 'true']" + 
                        "[data-item-prior = '2']").length;
                    } else if (current === 3) {
                        prior3_ckd = document.querySelectorAll("[data-item-area = '" + 
                        data.items[i]["area"] + "']"+"[data-item-subarea = '" + 
                        data.items[i]["checks"][j]["code"] + "']"+
                        "[data-item-checked = 'true']" + 
                        "[data-item-prior = '3']").length;
                    } else {
                        return;
                    }
                }
                numSubareas += total;
                numChecked += (prior1_ckd+prior2_ckd+prior3_ckd)
                checkedHtml += "&nbsp&nbsp<progress class='progress' value='" + (prior1_ckd+prior2_ckd+prior3_ckd)*100/total+"' max='100'></progress>";
            }
            numTotAreas += numSubareas;
            numTotChecked += numChecked;
            checkedHtml += "<li>Total : <progress value='" + numChecked*100/numSubareas +"' max='100'></progress></li>";
        }
        checkedHtml += "</ul><p class='total-progress'>" + (numTotChecked*100/numTotAreas).toFixed(0) + " %</p></div>";
        document.getElementById("side").innerHTML = checkedHtml;
    };
    return {init: checkState};
})();