// =============================================================================
window.onload = function(){
    var filters = ""
    for (const [key, value] of Object.entries(data.filters)) {
      filters += "<div  class=\"filt\"><input id=\""+key+"\" type=\"checkbox\" value=\" "+key+"\" checked=\""+value+"\">" + key + "</div>"
    }
    document.getElementById("filters").innerHTML = filters;

    var variables = ""
    for (const [key, value] of Object.entries(data.variables)) {
      variables += "<div  class=\"vari\">" + key + ": <input id=\""+key+"\" type=\"text\" value=\""+value+"\"></div>"
    }
    document.getElementById("variables").innerHTML = variables;

}
// =============================================================================
function Generate(data){
    str = ""
    for(var i = 0; i < doc.length; i++){
        var article = doc[i]
        if('var' in article){
            str += " <span class=\"var\">" + data.variables[article.var] + "</span>"
        }else{
            var test = true

            if('and' in article && article.and.length > 0){
                var and
                for (and of article.and) { console.log(and, data.filters[and])
                    if(!data.filters[and]){ test = false; }
                }
            }
            if('not' in article){
                var not
                for (not of article.not) {
                    if(data.filters[not]){ test = false; }
                }
            }
            if('or' in article && article.or.length > 0){ test = false;
                var or
                for (or of article.or) {
                    if(data.filters[or]){ test = true; }
                }
            }

                if(test){ str += article.txt }

        }

    }
    document.getElementById("inject").innerHTML = str;

}

// =============================================================================
function getdata(event){
    data = { filters:{ Toasted:true, Bacon:true, Tomatos:true, Onions:true, Jalapenos:true, Mustard:true, Relish:true, Catsup:true }, variables:{ Cheese:"Swiss", Greens:"Letuce", Beer:"Corona" }};
    data.variables.Cheese = document.getElementById("Cheese").value
    data.variables.Greens = document.getElementById("Greens").value
    data.variables.Beer = document.getElementById("Beer").value

    data.filters.Toasted = document.getElementById("Toasted").checked;
    data.filters.Bacon = document.getElementById("Bacon").checked;
    data.filters.Tomatos = document.getElementById("Tomatos").checked;
    data.filters.Onions = document.getElementById("Onions").checked;
    data.filters.Jalapenos = document.getElementById("Jalapenos").checked;
    data.filters.Mustard = document.getElementById("Mustard").checked;
    data.filters.Relish = document.getElementById("Relish").checked;
    data.filters.Catsup = document.getElementById("Catsup").checked;
    // alert(JSON.stringify(data))
    event.preventDefault()
    Generate(data)
}
