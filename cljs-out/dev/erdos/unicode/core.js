// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('erdos.unicode.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('erdos.unicode.data');
erdos.unicode.core.get_app_element = (function erdos$unicode$core$get_app_element(){
return goog.dom.getElement("app");
});
erdos.unicode.core.input_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Hello Am\u00E9lie!");
erdos.unicode.core.normalized_state = reagent.core.track((function (){
var nfc = cljs.core.deref(erdos.unicode.core.input_text).normalize("NFC");
var nfd = cljs.core.deref(erdos.unicode.core.input_text).normalize("NFD");
var nfkc = cljs.core.deref(erdos.unicode.core.input_text).normalize("NFKC");
var nfkd = cljs.core.deref(erdos.unicode.core.input_text).normalize("NFKD");
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$nfc_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(erdos.unicode.core.input_text),nfc),cljs.core.cst$kw$nfc,nfc,cljs.core.cst$kw$nfd_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(erdos.unicode.core.input_text),nfd),cljs.core.cst$kw$nfd,nfd,cljs.core.cst$kw$nfkc_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(erdos.unicode.core.input_text),nfkc),cljs.core.cst$kw$nfkc,nfkc,cljs.core.cst$kw$nfkd_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(erdos.unicode.core.input_text),nfkd),cljs.core.cst$kw$nfkd,nfkd], null);
}));
erdos.unicode.core.textarea = (function erdos$unicode$core$textarea(input_text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,(function (t){
return cljs.core.reset_BANG_(input_text,t.target.value);
}),cljs.core.cst$kw$default_DASH_value,cljs.core.deref(input_text)], null)], null);
});
erdos.unicode.core.char__GT_hex = (function erdos$unicode$core$char__GT_hex(c){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(c).charCodeAt((0)).toString((16)).toUpperCase().padStart((4),"0"))].join('');
});
erdos.unicode.core.normal_forms = (function erdos$unicode$core$normal_forms(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Normal forms"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function erdos$unicode$core$normal_forms_$_iter__14328(s__14329){
return (new cljs.core.LazySeq(null,(function (){
var s__14329__$1 = s__14329;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14329__$1);
if(temp__5720__auto__){
var s__14329__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14329__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14329__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14331 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14330 = (0);
while(true){
if((i__14330 < size__4528__auto__)){
var vec__14332 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14330);
var txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14332,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14332,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14332,(2),null);
cljs.core.chunk_append(b__14331,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,txt], null),(cljs.core.truth_((function (){var G__14335 = cljs.core.deref(erdos.unicode.core.normalized_state);
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14335) : p.call(null,G__14335));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,["Input is in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt)," form."].join('')], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__14330,vec__14332,txt,k,p,c__4527__auto__,size__4528__auto__,b__14331,s__14329__$2,temp__5720__auto__){
return (function (){
return cljs.core.reset_BANG_(erdos.unicode.core.input_text,(function (){var G__14336 = cljs.core.deref(erdos.unicode.core.normalized_state);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14336) : k.call(null,G__14336));
})());
});})(i__14330,vec__14332,txt,k,p,c__4527__auto__,size__4528__auto__,b__14331,s__14329__$2,temp__5720__auto__))
], null),["Convert to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt)].join('')], null))], null));

var G__14342 = (i__14330 + (1));
i__14330 = G__14342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14331),erdos$unicode$core$normal_forms_$_iter__14328(cljs.core.chunk_rest(s__14329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14331),null);
}
} else {
var vec__14337 = cljs.core.first(s__14329__$2);
var txt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14337,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14337,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14337,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,txt], null),(cljs.core.truth_((function (){var G__14340 = cljs.core.deref(erdos.unicode.core.normalized_state);
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14340) : p.call(null,G__14340));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,["Input is in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt)," form."].join('')], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__14337,txt,k,p,s__14329__$2,temp__5720__auto__){
return (function (){
return cljs.core.reset_BANG_(erdos.unicode.core.input_text,(function (){var G__14341 = cljs.core.deref(erdos.unicode.core.normalized_state);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14341) : k.call(null,G__14341));
})());
});})(vec__14337,txt,k,p,s__14329__$2,temp__5720__auto__))
], null),["Convert to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt)].join('')], null))], null),erdos$unicode$core$normal_forms_$_iter__14328(cljs.core.rest(s__14329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NFC",cljs.core.cst$kw$nfc,cljs.core.cst$kw$nfc_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NFD",cljs.core.cst$kw$nfd,cljs.core.cst$kw$nfd_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NFKC",cljs.core.cst$kw$nfkc,cljs.core.cst$kw$nfkc_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NFKD",cljs.core.cst$kw$nfkd,cljs.core.cst$kw$nfkd_QMARK_], null)], null));
})())], null)], null);
});
erdos.unicode.core.text_groups = (function erdos$unicode$core$text_groups(input_text){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (cs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cs),cljs.core.count(cs)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cs) - (1)),null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return erdos.unicode.data.group(cljs.core.str.cljs$core$IFn$_invoke$arity$1(c).charCodeAt((0)));
}),input_text))], 0));
});
erdos.unicode.core.hello_world = (function erdos$unicode$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$margin_DASH_bottom,"2em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"60%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [erdos.unicode.core.textarea,erdos.unicode.core.input_text], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"40%"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [erdos.unicode.core.normal_forms], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"group"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4529__auto__ = (function erdos$unicode$core$hello_world_$_iter__14343(s__14344){
return (new cljs.core.LazySeq(null,(function (){
var s__14344__$1 = s__14344;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14344__$1);
if(temp__5720__auto__){
var s__14344__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14344__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14344__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14346 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14345 = (0);
while(true){
if((i__14345 < size__4528__auto__)){
var vec__14347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14345);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14347,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14347,(1),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14347,(2),null);
cljs.core.chunk_append(b__14346,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,idx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,erdos.unicode.core.char__GT_hex(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"latin letter ",c], null),(cljs.core.truth_(group)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rowspan,cljs.core.second(group)], null),cljs.core.first(group)], null):null)], null));

var G__14353 = (i__14345 + (1));
i__14345 = G__14353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14346),erdos$unicode$core$hello_world_$_iter__14343(cljs.core.chunk_rest(s__14344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14346),null);
}
} else {
var vec__14350 = cljs.core.first(s__14344__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14350,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14350,(1),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14350,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,idx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,erdos.unicode.core.char__GT_hex(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"latin letter ",c], null),(cljs.core.truth_(group)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rowspan,cljs.core.second(group)], null),cljs.core.first(group)], null):null)], null),erdos$unicode$core$hello_world_$_iter__14343(cljs.core.rest(s__14344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(erdos.unicode.core.input_text),erdos.unicode.core.text_groups(cljs.core.deref(erdos.unicode.core.input_text))));
})()], null)], null)], null)], null);
});
erdos.unicode.core.mount = (function erdos$unicode$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [erdos.unicode.core.hello_world], null),el);
});
erdos.unicode.core.mount_app_element = (function erdos$unicode$core$mount_app_element(){
var temp__5720__auto__ = erdos.unicode.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return erdos.unicode.core.mount(el);
} else {
return null;
}
});
erdos.unicode.core.mount_app_element();
erdos.unicode.core.on_reload = (function erdos$unicode$core$on_reload(){
return erdos.unicode.core.mount_app_element();
});
