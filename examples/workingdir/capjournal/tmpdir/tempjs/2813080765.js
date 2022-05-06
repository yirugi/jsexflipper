(function anonymous(view,partials,stack,lookup,escapeHTML,renderSection,render
) {
var buffer = "";
var line = 1;
try {
buffer += "<div id=\"fotomotoWidgetContainer\" style=\"display:none;\"><div id=\"fotomotoWidget\"><div class=\"fm-widget-box\"> <div class=\"fm-header fm-cf\"><div class=\"title\">Shopping Cart</div><a href=\"javascript:;\" class=\"fm-close fm-ir fotomotoCloseLink\">Close</a> <ul class=\"fm-tools fm-cf\"> <li> <span class=\"fm-label fm-inline-block\"> Currency </span> <a href=\"javascript:;\" class=\"fm-option fm-color-on-hover fm-inline-block\"> ";
line = 1;
buffer += escapeHTML(lookup("selected_currency",stack,""));
buffer += " <span class=\"fm-arrows fm-inline-block fm-bgcolor-on-hover\"></span> </a> <ul id=\"fm-currencies\" class=\"fm-option-list fm-cf\" style=\"display: none;\"> <li class=\"fm-tail\"></li> ";
line = 1;
var name = "currencies";
var callback = (function () {
  return function () {
    var buffer = "";
buffer += " ";
line = 1;
buffer += lookup("currency_li",stack,"");
buffer += " ";
    return buffer;
  };
})();
buffer += renderSection(name,stack,callback);
buffer += " <li><a href=\"javascript:;\" class=\"fm-close fm-ir\"><span>close</span></a></li> </ul> </li> <li> <span class=\"fm-label fm-inline-block\"> Unit </span> <a href=\"javascript:;\" class=\"fm-option fm-color-on-hover fm-inline-block\"> ";
line = 1;
buffer += escapeHTML(lookup("selected_unit",stack,""));
buffer += " <span class=\"fm-arrows fm-inline-block fm-bgcolor-on-hover\"></span> </a> <ul id=\"fm-measure-units\" class=\"fm-option-list fm-cf\" style=\"display: none;\"> <li class=\"fm-tail\"></li> ";
line = 1;
var name = "units";
var callback = (function () {
  return function () {
    var buffer = "";
buffer += " ";
line = 1;
buffer += lookup("unit_li",stack,"");
buffer += " ";
    return buffer;
  };
})();
buffer += renderSection(name,stack,callback);
buffer += "<li><a href=\"javascript:;\" class=\"fm-close fm-ir\"><span>close</span></a></li> </ul> </li> </ul> <a id=\"fotomotoSmallShopping\" href=\"javascript:;\" class=\"fm-shopping-cart fm-color-on-hover\"></a> </div> <div class=\"fm-products\"><ul class=\"fm-cf fm-inline-block\">";
line = 1;
var name = "products";
var callback = (function () {
  return function () {
    var buffer = "";
buffer += "<li><em class=\"fm-l\"></em><a href=\"javascript:;\" class=\"fm-";
line = 1;
buffer += escapeHTML(lookup("product_css",stack,""));
buffer += "\" name=\"fm-";
line = 1;
buffer += escapeHTML(lookup("product",stack,""));
buffer += "\"><svg class=\"icon_product\"><use xlink:href=\"#";
line = 1;
buffer += escapeHTML(lookup("product_icon",stack,""));
buffer += "\"/></svg>";
line = 1;
buffer += escapeHTML(lookup("product_name",stack,""));
buffer += " </a><em class=\"fm-r\"></em></li>";
    return buffer;
  };
})();
buffer += renderSection(name,stack,callback);
buffer += "</ul></div> <div id=\"fotomotoContent\" class=\"fm-content fm-cf fm-cart\"></div><div class=\"fm-push\"></div></div> <div class=\"fm-push\"></div></div> <div class=\"fm-footer fm-cf\"><div class=\"fm-footer-buttons\"><a href=\"javascript:;\" class=\"fm-right-button fm-bgcolor-gradient fm-textshadow\"></a> <a href=\"javascript:;\" class=\"fm-left-button\"></a> </div><div class=\"fm-footer-content\"> </div></div></div>";
return buffer;
} catch (e) { throw {error: e, line: line}; }
})