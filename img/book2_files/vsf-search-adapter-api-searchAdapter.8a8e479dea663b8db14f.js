(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1050:function(e,r,t){"use strict";t.r(r),t.d(r,"SearchAdapter",(function(){return _}));var n=t(1187),s=t(14),o=t(154),u=t.n(o),i=t(2),c=t(72),a=t.n(c),l=t(4),y=t(0),h=t(11),f=function(e,r,t,n){return new(t||(t=Promise))((function(s,o){function u(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var r;e.done?s(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(u,i)}c((n=n.apply(e,r||[])).next())}))},p=function(e,r){var t,n,s,o,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(s=(s=u.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){u.label=o[1];break}if(6===o[0]&&u.label<s[1]){u.label=s[1],s=o;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(o);break}s[2]&&u.ops.pop(),u.trys.pop();continue}o=r.call(e,u)}catch(e){o=[6,e],n=0}finally{t=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},g=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,s,o=t.call(e),u=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)u.push(n.value)}catch(e){s={error:e}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(s)throw s.error}}return u},d=function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(g(arguments[r]));return e},_=function(){function e(){this.entities=[],this.initBaseTypes()}return e.prototype.search=function(e,r){var n,o,c,g,_;return f(this,void 0,void 0,(function(){var f,P,b,m,v,w,q,E,T;return p(this,(function(p){switch(p.label){case 0:if(!this.entities[e.type])throw new Error("No entity type registered for "+e.type);return f={},e.searchQuery instanceof s.SearchQuery?[4,Promise.resolve().then(t.t.bind(null,93,7))]:[3,3];case 1:return P=p.sent(),[4,s.elasticsearch.buildQueryBodyFromSearchQuery({config:y,queryChain:P.default(),searchQuery:e.searchQuery})];case 2:return(f=p.sent()).aggs&&f.aggs.agg_terms_published_at&&(f.aggs.agg_terms_published_at={range:{field:"published_at",ranges:[{from:y.products.latestFilterQuery}]}}),f.aggs&&f.aggs.agg_terms_special_price&&(f.aggs.agg_terms_special_price={range:{field:"special_price",ranges:[{from:0}]}}),f.aggs&&("_options",Object.keys(f.aggs).forEach((function(e){e.endsWith("_options")&&delete f.aggs[e]}))),f.aggs&&(f.aggs.agg_max_price||f.aggs.agg_min_price)&&(b=y.products.priceFilterKey,f.aggs.agg_max_price={max:{field:b}},f.aggs.agg_min_price={min:{field:b}}),""!==e.searchQuery.getSearchText()&&(f.min_score=y.elasticsearch.min_score,delete f.query.bool.must.function_score.max_boost),[3,4];case 3:f=e.searchQuery,p.label=4;case 4:return e.hasOwnProperty("groupId")&&null!==e.groupId&&(f.groupId=e.groupId),e.hasOwnProperty("groupToken")&&null!==e.groupToken&&(f.groupToken=e.groupToken),f.track_total_hits=!0,(null===(g=null===(c=null===(o=null===(n=null==f?void 0:f.query)||void 0===n?void 0:n.bool)||void 0===o?void 0:o.must)||void 0===c?void 0:c.function_score)||void 0===g?void 0:g.functions)&&(T=f.query.bool.must.function_score.functions).push.apply(T,d((null===(_=null==e?void 0:e.searchQuery)||void 0===_?void 0:_._functions)||[])),null!==e.store?[3,5]:(v=Object(l.b)(),[3,7]);case 5:return[4,Object(l.h)(e.store)];case 6:v=p.sent(),p.label=7;case 7:if(m=v,e.index=m.elasticsearch.index,w=Object(i.p)(Object(h.a)(m.elasticsearch,"host")),this.entities[e.type].url&&(w=Object(h.a)(this.entities[e.type],"url")),q={size:e.size,from:e.from,sort:e.sort},e._sourceExclude&&(q._source_exclude=e._sourceExclude.join(",")),e._sourceInclude&&(q._source_include=e._sourceInclude.join(",")),e.q&&(q.q=e.q),!e.index||!e.type)throw new Error("Query.index and Query.type are required arguments for executing ElasticSearch query");return"GET"===y.elasticsearch.queryMethod&&(q.request=JSON.stringify(f)),w=(w=w+"/"+encodeURIComponent(e.index)+"/"+encodeURIComponent(e.type)+"/_search")+"?"+a.a.stringify(q),E={Accept:"application/json","Content-Type":"application/json"},r&&(E["x-cache-tag"]=r),[2,u()(w,{method:y.elasticsearch.queryMethod,mode:"cors",headers:E,body:"POST"===y.elasticsearch.queryMethod?JSON.stringify(f):null}).then((function(e){return e.json()})).catch((function(e){throw new Error("FetchError in request to ES: "+e.toString())}))]}}))}))},e.prototype.handleResult=function(e,r,t,s){if(void 0===t&&(t=0),void 0===s&&(s=50),null===e)throw new Error("Invalid ES result - null not exepcted");if(e.hasOwnProperty("hits"))return{items:Object(n.a)(e.hits.hits,(function(e){return Object.assign(e._source,{_score:e._score,slug:e._source.slug?e._source.slug:e._source.hasOwnProperty("url_key")&&y.products.useMagentoUrlKeys?e._source.url_key:e._source.hasOwnProperty("name")?Object(i.u)(e._source.name)+"-"+e._source.id:""})})),total:e.hits.total,start:t,perPage:s,aggregations:e.aggregations,attributeMetadata:e.attribute_metadata,suggestions:e.suggest};var o=(e&&e.code)>=400?e:null;throw e.error||o?new Error(JSON.stringify(e.error||e)):new Error("Unknown error with elasticsearch result in resultProcessor for entity type '"+r+"'")},e.prototype.registerEntityType=function(e,r){var t=r.url,n=void 0===t?"":t,s=r.url_ssr,o=void 0===s?"":s,u=r.queryProcessor,i=r.resultProcessor;return this.entities[e]={queryProcessor:u,resultProcessor:i},""!==n&&(this.entities[e].url=n),""!==o&&(this.entities[e].url_ssr=o),this},e.prototype.initBaseTypes=function(){var e=this;this.registerEntityType("product",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"product",t,n)}}),this.registerEntityType("nova_post_divisions",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"nova_post_divisions",t,n)}}),this.registerEntityType("etm_entity",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"etm_entity",t,n)}}),this.registerEntityType("attribute",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"attribute",t,n)}}),this.registerEntityType("attribute_option",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"attribute_option",t,n)}}),this.registerEntityType("search",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"search",t,n)}}),this.registerEntityType("category",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"category",t,n)}}),this.registerEntityType("city",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"city",t,n)}}),this.registerEntityType("country",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"country",t,n)}}),this.registerEntityType("taxrule",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"taxrule",t,n)}}),this.registerEntityType("review",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"review",t,n)}}),this.registerEntityType("vote",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"vote",t,n)}}),this.registerEntityType("cms_page",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"cms_page",t,n)}}),this.registerEntityType("cms_block",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"cms_block",t,n)}}),this.registerEntityType("cms_hierarchy",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"cms_hierarchy",t,n)}}),this.registerEntityType("nova_poshta_warehouse",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"nova_poshta_warehouse",t,n)}}),this.registerEntityType("nova_poshta_city_street",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"nova_poshta_city_street",t,n)}}),this.registerEntityType("meest_warehouse",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"meest_warehouse",t,n)}}),this.registerEntityType("meest_street",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"meest_street",t,n)}}),this.registerEntityType("justin_warehouse",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"justin_warehouse",t,n)}}),this.registerEntityType("ukr_poshta_warehouse",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"ukr_poshta_warehouse",t,n)}}),this.registerEntityType("ukr_poshta_street",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"ukr_poshta_street",t,n)}}),this.registerEntityType("street",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"street",t,n)}}),this.registerEntityType("promotion_category",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"promotion_category",t,n)}}),this.registerEntityType("promotion",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"promotion",t,n)}}),this.registerEntityType("banner",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"banner",t,n)}}),this.registerEntityType("custom_redirect",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"custom_redirect",t,n)}}),this.registerEntityType("seo_text",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"seo_text",t,n)}}),this.registerEntityType("rozetka_warehouse",{queryProcessor:function(e){return e},resultProcessor:function(r,t,n){return e.handleResult(r,"rozetka_warehouse",t,n)}})},e}()},1187:function(e,r,t){"use strict";var n=t(147),s=t(82),o=t(402),u=t(68);var i=function(e,r){var t=-1,n=Object(u.a)(e)?Array(e.length):[];return Object(o.a)(e,(function(e,s,o){n[++t]=r(e,s,o)})),n},c=t(24);r.a=function(e,r){return(Object(c.a)(e)?n.a:i)(e,Object(s.a)(r,3))}}}]);
//# sourceMappingURL=vsf-search-adapter-api-searchAdapter.8a8e479dea663b8db14f.js.map