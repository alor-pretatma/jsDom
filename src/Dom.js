

(function($, W){
    "use strict";
    var attrs=["id", "name", "src", "href"],
    tags=["Div", "I", "B", "A", "Span", "H1", "H2", "H3", "H4", "H5", "H6", "Link", "Script", "P", "Button", "Select", "Option", "Form"];
    
    
    function applyDom(jQ, obj){
        if(typeof obj!=="object")return;
        if(obj.html){
            jQ.html(obj.html);
            delete obj.html;
        }
        if(typeof obj.styles=="object"){
            jQ.css(obj.styles);
            delete obj.styles;
        }
        if(typeof obj.childs=="object"){
            obj.childs.forEach(function(child){
                jQ.append(child);
            });
            delete obj.childs;
        }
        for(var i in obj){
            jQ.attr(i, obj[i]);
        }
    };
    attrs.forEach(function(attr){
        $.fn[attr]=function(val){
            this.attr(attr, val);
            return this;
        };
    });
    $.fn.applyDom=function(obj){
        applyDom(this, obj);
        return this;
    };
    $.fn.hint=function(txt){
        this.attr("placeholder", txt);
        return this;
    };
    W.Dom=function(tag){
        return $(W.document.createElement(tag));
    };
    W.Input=function(type){
        return $(W.document.createElement("input")).attr("type", (type || "text"));
    };
    
    tags.forEach(function(tag){
        W[tag]=function(obj){
            var dom=$(W.document.createElement(tag.toLowerCase()));
            if(typeof obj!="object"){
                dom.html(obj);
            }else dom.applyDom(obj);
            return dom;
        };
    });
})(jQuery, window);
