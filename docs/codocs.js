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
function isVisible(node){     var test = true;

    if('and' in node && node.and.length > 0){
        var and
        for (and of node.and) { //console.log(and, data.filters[and])
            if(!data.filters[and]){ test = false; }
        }
    }
    if('not' in node){
        var not
        for (not of node.not) {
            if(data.filters[not]){ test = false; }
        }
    }
    if(test && 'or' in node && node.or.length > 0){ test = false;
        var or
        for (or of node.or) {
            if(data.filters[or]){ test = true; }
        }
    }
    return test;
}
// =============================================================================
function Generate(data){
    str = ""
    for(var i = 0; i < doc.length; i++){
        var node = doc[i]
        if('var' in node){
            str += " <span class=\"var\">" + data.variables[node.var] + "</span>"
        }else{

                if(isVisible(node)){ str += node.txt }
        }
    }
    document.getElementById("inject").innerHTML = str;
}

// =============================================================================
function Document() {
document.getElementById("inject").style.display = "block"
document.getElementById("schema").style.display = "none"
}
// =============================================================================
function Schema(){
    document.getElementById("inject").style.display = "none"
    document.getElementById("schema").style.display = "block"
}
// =============================================================================
function getvar(type, name){
    if (type == "variables") {
        data.variables[name] = document.getElementById(name).value
    } else {
        data.filters[name] = document.getElementById(name).checked;
    }
}
// =============================================================================
function getdata(event){
    for (v in data.variables){ getvar("variables", v); }
    for (v in data.filters){ getvar("filters", v); }

    event.preventDefault()
    Generate(data)
    GenerateSchema()
}
// =============================================================================
// function is True(name){
//     return data.variables[name]
// }
// =============================================================================
function GenerateSchema(){
    str = ""
    for(var i = 0; i < doc.length; i++){
        var node = doc[i]
        var disp = ""
        if(!isVisible(node)){ disp = "style=\"display:none;"; }
        str += "<div class=\"node\" "+disp+"\"><button type=\"button\" onclick=\"Delete(event)\">x</button>"
        if('and' in node){ // data.variables[name]   data.filters[name]
            str += "<input class=\"and\" type=\"text\" value=\""+node.and+"\">"
        }else{ str += "<input class=\"and\" type=\"text\" value=\"\" placeholder=\"  &\">"; }
        if('not' in node){
            str += "<input class=\"not\" type=\"text\" value=\""+node.not+"\">"
        }else{ str += "<input class=\"not\" type=\"text\" value=\"\" placeholder=\"  !\">"; }
        if('or' in node){
            str += "<input class=\"or\" type=\"text\" value=\""+node.or+"\">"
        }else{ str += "<input class=\"or\" type=\"text\" value=\"\" placeholder=\"  |\">"; }
        if('var' in node){
            str += "<input class=\"var\" type=\"text\" value=\""+node.var+"\">"
        }else{str += "<input class=\"var\" type=\"text\" value=\"\" placeholder=\"  $\">"}

        str += "<button type=\"button\" onclick=\"NewNode(event)\">+</button>"
        if('txt' in node){ var text = node.txt
            text = text.replace(/</g, '&lt;')
            text = text.replace(/>/g, '&gt;')
            str += "<div class=\"txt\" contenteditable>"+text+"</div>"
        }else{ str += "<div class=\"txt\" contenteditable></div>"; }

        str += " </div>"
    }

    document.getElementById("schema").innerHTML = str
}
// =============================================================================
function insertAfter(node, newNode){
    node.parentElement.parentNode.insertBefore(newNode, node.parentElement.nextSibling);
}
// =============================================================================
function NewNode(event){
    const newnode = document.createElement("div");
    newnode.className = "node"
    newnode.innerHTML = '<button type="button" onclick="Delete(event)">x</button><input class="and" type="text" value="" placeholder=\"  &\"><input class="not" type="text" value="" placeholder=\"  !\"><input class="or" type="text" value="" placeholder=\"  |\"><input class="var" type="text" value="" placeholder=\"  $\"><button type="button" onclick="NewNode(event)">+</button><div class="txt" contenteditable="">This is a new node!</div> '

    insertAfter(event.target, newnode)
}
// =============================================================================
function Delete(event){
    event.target.parentElement.remove()
}
// =============================================================================
function Commit(event){
    var nodes = document.getElementsByClassName("node") // OR: x.childNodes;
    var stack = []
    for (var i = 0; i < nodes.length; i++) {
        var children = nodes[i].childNodes
        var and = children[1].value
            and = (and.length > 0) ? and.split(',') : null
        var not = children[2].value
            not = (not.length > 0) ? not.split(',') : null
        var or  = children[3].value
            or = (or.length > 0) ? or.split(',') : null
        var v = children[4].value
            v = (v.length > 0) ? v : null
        var text = children[6].innerHTML
            text = (text.length > 0) ? text : null

        var n = {}
        if(and  != null){ n.and = and; }
        if(not  != null){ n.not = not; }
        if( or  != null){ n.or = or; }
        if(  v  != null){ n.var = v; }
        if(text != null){
            text = text.replace(/&lt;/g, '<')
            text = text.replace(/&gt;/g, '>')
            text = text.replace(/"/g, '\"')
            n.txt = text
        }

        stack.push(n)
    }
    doc = stack
    console.log(doc)
}
// =============================================================================
// <div class="node" "="">
//     // <button type="button" onclick="Delete(event)">x</button>
//     <input class="and" type="text" value="Bacon">
//     <input class="not" type="text" value="" placeholder="  !">
//     <input class="or" type="text" value="" placeholder="  |">
//     <input class="var" type="text" value="" placeholder="  $">
//     // <button type="button" onclick="NewNode(event)">+</button>
//     <div class="txt" contenteditable="">, Bacon</div>
// </div>
