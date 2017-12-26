appRender = (function() {
    render = function(data) {
        document.querySelector(".header").innerHTML = '<h2>' + data["topic"] +'</h2>';
        var mainHtml = "";
        for (let i = 0; i < data["items"].length; i++) {
            const area = data["items"][i];
            mainHtml += '<div class="check__area"><h3>' + data["items"][i]["area"] + '</h3>';
            for (let j = 0; j < data["items"][i]["checks"].length; j++) {
                const subarea = data["items"][i]["checks"][j];
                mainHtml += '<div class="check__header"><label>' + subarea["code"];
                mainHtml += '&nbsp - ' + subarea["description"] + '</label>';
                for (let k = 0; k < subarea["subject"].length; k++) {
                    const element = subarea["subject"][k];
                    mainHtml += '<div class="check__item-' + element["priority"] + 
                    '"><label data-item-area='+area["area"]+' data-item-subarea='+subarea["code"]+
                    ' data-item-checked="false" data-item-prior='+element["priority"]+
                    '><input type="checkbox">' + element["name"] +
                    ' - Priority : <span class="prior">' + element["priority"] + '</span></label></div>';
                }
                mainHtml += '</div>';
            }
            mainHtml += '</div>';
        };
        document.getElementById("main").innerHTML = mainHtml;
    };
    check = function(evt) {
        if(evt.target.checked) {
            evt.target.parentElement.setAttribute("style","color: lightgray; text-decoration: line-through");  
            evt.target.parentElement.setAttribute("data-item-checked", "true"); 
        } else {
            evt.target.parentElement.setAttribute("style","color: #333333; text-decoration: none");
            evt.target.parentElement.setAttribute("data-item-checked", "false");
        }
    };
    init = function(data) {
        render(data);
        var elems = document.querySelectorAll("input[type='checkbox']");
        for (let i = 0; i < elems.length; i++) {
            elems[i].addEventListener('change', check, false);
            
        }
    };
    return {init: init}; 
})();

