(function(){window.HTMLWidgets=window.HTMLWidgets||{};var viewerMode=window.HTMLWidgets.viewerMode=/\bviewer_pane=1\b/.test(window.location);var shinyMode=window.HTMLWidgets.shinyMode=typeof(window.Shiny)!=="undefined"&&!!window.Shiny.outputBindings;function querySelectorAll(scope,selector){if(typeof(jQuery)!=="undefined"&&scope instanceof jQuery){return scope.find(selector);}
if(scope.querySelectorAll){return scope.querySelectorAll(selector);}}
function asArray(value){if(value===null)
return[];if($.isArray(value))
return value;return[value];}
function extend(target){if(arguments.length==1){return target;}
for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var prop in source){if(source.hasOwnProperty(prop)){target[prop]=source[prop];}}}
return target;}
function forEach(values,callback,thisArg){if(values.forEach){values.forEach(callback,thisArg);}else{for(var i=0;i<values.length;i++){callback.call(thisArg,values[i],i,values);}}}
function overrideMethod(target,methodName,funcSource){var superFunc=target[methodName]||function(){};var superFuncBound=function(){return superFunc.apply(target,arguments);};target[methodName]=funcSource(superFuncBound);}
function delegateMethod(delegator,delegatee,methodName){var inherited=delegator[methodName];delegator[methodName]=function(){var target=delegatee;var method=delegatee[methodName];if(!method){target=delegator;method=inherited;}
if(method){return method.apply(target,arguments);}};}
function elementData(el,name,value){if(arguments.length==2){return el["htmlwidget_data_"+name];}else if(arguments.length==3){el["htmlwidget_data_"+name]=value;return el;}else{throw new Error("Wrong number of arguments for elementData: "+arguments.length);}}
function escapeRegExp(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");}
function hasClass(el,className){var re=new RegExp("\\b"+escapeRegExp(className)+"\\b");return re.test(el.className);}
function filterByClass(elements,className,include){var results=[];for(var i=0;i<elements.length;i++){if(hasClass(elements[i],className)==include)
results.push(elements[i]);}
return results;}
function on(obj,eventName,func){if(obj.addEventListener){obj.addEventListener(eventName,func,false);}else if(obj.attachEvent){obj.attachEvent(eventName,func);}}
function off(obj,eventName,func){if(obj.removeEventListener)
obj.removeEventListener(eventName,func,false);else if(obj.detachEvent){obj.detachEvent(eventName,func);}}
function unpackPadding(value){if(typeof(value)==="number")
value=[value];if(value.length===1){return{top:value[0],right:value[0],bottom:value[0],left:value[0]};}
if(value.length===2){return{top:value[0],right:value[1],bottom:value[0],left:value[1]};}
if(value.length===3){return{top:value[0],right:value[1],bottom:value[2],left:value[1]};}
if(value.length===4){return{top:value[0],right:value[1],bottom:value[2],left:value[3]};}}
function paddingToCss(paddingObj){return paddingObj.top+"px "+paddingObj.right+"px "+paddingObj.bottom+"px "+paddingObj.left+"px";}
function px(x){if(typeof(x)==="number")
return x+"px";else
return x;}
function sizingPolicy(el){var sizingEl=document.querySelector("script[data-for='"+el.id+"'][type='application/htmlwidget-sizing']");if(!sizingEl)
return null;var sp=JSON.parse(sizingEl.textContent||sizingEl.text||"{}");if(viewerMode){return sp.viewer;}else{return sp.browser;}}
function evalAndRun(tasks,target,args){if(tasks){forEach(tasks,function(task){var theseArgs=args;if(typeof(task)==="object"){theseArgs=theseArgs.concat([task.data]);task=task.code;}
var taskFunc=tryEval(task);if(typeof(taskFunc)!=="function"){throw new Error("Task must be a function! Source:\n"+task);}
taskFunc.apply(target,theseArgs);});}}
function tryEval(code){var result=null;try{result=eval(code);}catch(error){if(!error instanceof SyntaxError){throw error;}
try{result=eval("("+code+")");}catch(e){if(e instanceof SyntaxError){throw error;}else{throw e;}}}
return result;}
function initSizing(el){var sizing=sizingPolicy(el);if(!sizing)
return;var cel=document.getElementById("htmlwidget_container");if(!cel)
return;if(typeof(sizing.padding)!=="undefined"){document.body.style.margin="0";document.body.style.padding=paddingToCss(unpackPadding(sizing.padding));}
if(sizing.fill){document.body.style.overflow="hidden";document.body.style.width="100%";document.body.style.height="100%";document.documentElement.style.width="100%";document.documentElement.style.height="100%";if(cel){cel.style.position="absolute";var pad=unpackPadding(sizing.padding);cel.style.top=pad.top+"px";cel.style.right=pad.right+"px";cel.style.bottom=pad.bottom+"px";cel.style.left=pad.left+"px";el.style.width="100%";el.style.height="100%";}
return{getWidth:function(){return cel.offsetWidth;},getHeight:function(){return cel.offsetHeight;}};}else{el.style.width=px(sizing.width);el.style.height=px(sizing.height);return{getWidth:function(){return el.offsetWidth;},getHeight:function(){return el.offsetHeight;}};}}
var defaults={find:function(scope){return querySelectorAll(scope,"."+this.name);},renderError:function(el,err){var $el=$(el);this.clearError(el);var errClass="shiny-output-error";if(err.type!==null){errClass=errClass+" "+$.map(asArray(err.type),function(type){return errClass+"-"+type;}).join(" ");}
errClass=errClass+" htmlwidgets-error";var display=$el.css("display");$el.data("restore-display-mode",display);if(display==="inline"||display==="inline-block"){$el.hide();if(err.message!==""){var errorSpan=$("<span>").addClass(errClass);errorSpan.text(err.message);$el.after(errorSpan);}}else if(display==="block"){$el.css("visibility","hidden");if(err.message!==""){var errorDiv=$("<div>").addClass(errClass).css("position","absolute").css("top",el.offsetTop).css("left",el.offsetLeft).css("maxWidth",el.offsetWidth).css("height",el.offsetHeight);errorDiv.text(err.message);$el.after(errorDiv);var intId=setInterval(function(){if(!errorDiv[0].parentElement){clearInterval(intId);return;}
errorDiv.css("top",el.offsetTop).css("left",el.offsetLeft).css("maxWidth",el.offsetWidth).css("height",el.offsetHeight);},500);}}},clearError:function(el){var $el=$(el);var display=$el.data("restore-display-mode");$el.data("restore-display-mode",null);if(display==="inline"||display==="inline-block"){if(display)
$el.css("display",display);$(el.nextSibling).filter(".htmlwidgets-error").remove();}else if(display==="block"){$el.css("visibility","inherit");$(el.nextSibling).filter(".htmlwidgets-error").remove();}},sizing:{}};window.HTMLWidgets.widget=function(definition){if(!definition.name){throw new Error("Widget must have a name");}
if(!definition.type){throw new Error("Widget must have a type");}
if(definition.type!=="output"){throw new Error("Unrecognized widget type '"+definition.type+"'");}
if(definition.factory){definition=createLegacyDefinitionAdapter(definition);}
if(!definition.renderValue){throw new Error("Widget must have a renderValue function");}
window.HTMLWidgets.widgets=window.HTMLWidgets.widgets||[];var staticBinding=extend({},defaults,definition);overrideMethod(staticBinding,"find",function(superfunc){return function(scope){var results=superfunc(scope);return filterByClass(results,"html-widget-output",false);};});window.HTMLWidgets.widgets.push(staticBinding);if(shinyMode){var bindingDef=extend({},defaults,definition);var shinyBinding=new Shiny.OutputBinding();delegateMethod(shinyBinding,bindingDef,"getId");delegateMethod(shinyBinding,bindingDef,"onValueChange");delegateMethod(shinyBinding,bindingDef,"onValueError");delegateMethod(shinyBinding,bindingDef,"renderError");delegateMethod(shinyBinding,bindingDef,"clearError");delegateMethod(shinyBinding,bindingDef,"showProgress");shinyBinding.find=function(scope){var results=bindingDef.find(scope);var dynamicResults=results.filter(".html-widget-output");if(results.length!==dynamicResults.length)
scheduleStaticRender();return dynamicResults;};shinyBinding.renderValue=function(el,data){Shiny.renderDependencies(data.deps);if(!(data.evals instanceof Array))data.evals=[data.evals];for(var i=0;data.evals&&i<data.evals.length;i++){window.HTMLWidgets.evaluateStringMember(data.x,data.evals[i]);}
if(!bindingDef.renderOnNullValue){if(data.x===null){el.style.visibility="hidden";return;}else{el.style.visibility="inherit";}}
if(!elementData(el,"initialized")){initSizing(el);elementData(el,"initialized",true);if(bindingDef.initialize){var result=bindingDef.initialize(el,el.offsetWidth,el.offsetHeight);elementData(el,"init_result",result);}}
bindingDef.renderValue(el,data.x,elementData(el,"init_result"));evalAndRun(data.jsHooks.render,elementData(el,"init_result"),[el,data.x]);};if(bindingDef.resize){shinyBinding.resize=function(el,width,height){if(elementData(el,"initialized")){bindingDef.resize(el,width,height,elementData(el,"init_result"));}};}
Shiny.outputBindings.register(shinyBinding,bindingDef.name);}};var scheduleStaticRenderTimerId=null;function scheduleStaticRender(){if(!scheduleStaticRenderTimerId){scheduleStaticRenderTimerId=setTimeout(function(){scheduleStaticRenderTimerId=null;window.HTMLWidgets.staticRender();},1);}}
window.HTMLWidgets.staticRender=function(){var bindings=window.HTMLWidgets.widgets||[];forEach(bindings,function(binding){var matches=binding.find(document.documentElement);forEach(matches,function(el){var sizeObj=initSizing(el,binding);if(hasClass(el,"html-widget-static-bound"))
return;el.className=el.className+" html-widget-static-bound";var initResult;if(binding.initialize){initResult=binding.initialize(el,sizeObj?sizeObj.getWidth():el.offsetWidth,sizeObj?sizeObj.getHeight():el.offsetHeight);elementData(el,"init_result",initResult);}
if(binding.resize){var lastSize={w:sizeObj?sizeObj.getWidth():el.offsetWidth,h:sizeObj?sizeObj.getHeight():el.offsetHeight};var resizeHandler=function(e){var size={w:sizeObj?sizeObj.getWidth():el.offsetWidth,h:sizeObj?sizeObj.getHeight():el.offsetHeight};if(size.w===0&&size.h===0)
return;if(size.w===lastSize.w&&size.h===lastSize.h)
return;lastSize=size;binding.resize(el,size.w,size.h,initResult);};on(window,"resize",resizeHandler);if(window.jQuery){window.jQuery(document).on("shown.htmlwidgets shown.bs.tab.htmlwidgets shown.bs.collapse.htmlwidgets",resizeHandler);window.jQuery(document).on("hidden.htmlwidgets hidden.bs.tab.htmlwidgets hidden.bs.collapse.htmlwidgets",resizeHandler);}
if(window.addEventListener){on(document,"slideenter",resizeHandler);on(document,"slideleave",resizeHandler);}}
var scriptData=document.querySelector("script[data-for='"+el.id+"'][type='application/json']");if(scriptData){var data=JSON.parse(scriptData.textContent||scriptData.text);if(!(data.evals instanceof Array))data.evals=[data.evals];for(var k=0;data.evals&&k<data.evals.length;k++){window.HTMLWidgets.evaluateStringMember(data.x,data.evals[k]);}
binding.renderValue(el,data.x,initResult);evalAndRun(data.jsHooks.render,initResult,[el,data.x]);}});});invokePostRenderHandlers();}
function has_jQuery3(){if(!window.jQuery){return false;}
var $version=window.jQuery.fn.jquery;var $major_version=parseInt($version.split(".")[0]);return $major_version>=3;}
function maybeStaticRenderLater(){if(shinyMode&&has_jQuery3()){window.jQuery(window.HTMLWidgets.staticRender);}else{window.HTMLWidgets.staticRender();}}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);maybeStaticRenderLater();},false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);maybeStaticRenderLater();}});}
window.HTMLWidgets.getAttachmentUrl=function(depname,key){if(typeof(key)==="undefined")
key=1;var link=document.getElementById(depname+"-"+key+"-attachment");if(!link){throw new Error("Attachment "+depname+"/"+key+" not found in document");}
return link.getAttribute("href");};window.HTMLWidgets.dataframeToD3=function(df){var names=[];var length;for(var name in df){if(df.hasOwnProperty(name))
names.push(name);if(typeof(df[name])!=="object"||typeof(df[name].length)==="undefined"){throw new Error("All fields must be arrays");}else if(typeof(length)!=="undefined"&&length!==df[name].length){throw new Error("All fields must be arrays of the same length");}
length=df[name].length;}
var results=[];var item;for(var row=0;row<length;row++){item={};for(var col=0;col<names.length;col++){item[names[col]]=df[names[col]][row];}
results.push(item);}
return results;};window.HTMLWidgets.transposeArray2D=function(array){if(array.length===0)return array;var newArray=array[0].map(function(col,i){return array.map(function(row){return row[i]})});return newArray;};function splitWithEscape(value,splitChar,escapeChar){var results=[];var escapeMode=false;var currentResult="";for(var pos=0;pos<value.length;pos++){if(!escapeMode){if(value[pos]===splitChar){results.push(currentResult);currentResult="";}else if(value[pos]===escapeChar){escapeMode=true;}else{currentResult+=value[pos];}}else{currentResult+=value[pos];escapeMode=false;}}
if(currentResult!==""){results.push(currentResult);}
return results;}
window.HTMLWidgets.evaluateStringMember=function(o,member){var parts=splitWithEscape(member,'.','\\');for(var i=0,l=parts.length;i<l;i++){var part=parts[i];if(o!==null&&typeof o==="object"&&part in o){if(i==(l-1)){if(typeof o[part]==="string")
o[part]=tryEval(o[part]);}else{o=o[part];}}}};window.HTMLWidgets.getInstance=function(el){return elementData(el,"init_result");};window.HTMLWidgets.find=function(scope,selector){if(arguments.length==1){selector=scope;scope=document;}
var el=scope.querySelector(selector);if(el===null){return null;}else{return window.HTMLWidgets.getInstance(el);}};window.HTMLWidgets.findAll=function(scope,selector){if(arguments.length==1){selector=scope;scope=document;}
var nodes=scope.querySelectorAll(selector);var results=[];for(var i=0;i<nodes.length;i++){results.push(window.HTMLWidgets.getInstance(nodes[i]));}
return results;};var postRenderHandlers=[];function invokePostRenderHandlers(){while(postRenderHandlers.length){var handler=postRenderHandlers.shift();if(handler){handler();}}}
window.HTMLWidgets.addPostRenderHandler=function(callback){postRenderHandlers.push(callback);};function createLegacyDefinitionAdapter(defn){var result={name:defn.name,type:defn.type,initialize:function(el,width,height){return defn.factory(el,width,height);},renderValue:function(el,x,instance){return instance.renderValue(x);},resize:function(el,width,height,instance){return instance.resize(width,height);}};if(defn.find)
result.find=defn.find;if(defn.renderError)
result.renderError=defn.renderError;if(defn.clearError)
result.clearError=defn.clearError;return result;}})();