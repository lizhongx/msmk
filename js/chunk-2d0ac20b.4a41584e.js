(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac20b"],{"17e4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"font-size":"16px","text-align":"center"}},[n("span",{staticStyle:{"padding-left":"95px","font-size":"20px"}},[t._v("修改个人信息")]),n("span",{staticStyle:{"padding-left":"50px"},on:{click:t.bc}},[t._v("保存")]),n("van-cell-group",{staticStyle:{"margin-top":"20px"}},[n("van-field",{attrs:{label:"",placeholder:"请输入用户名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)},c=[],o=(n("425f"),n("adb5")),i={name:"",components:{},props:[],data:function(){return{name:""}},computed:{},watch:{},created:function(){this.name=this.$route.params.nickname},mounted:function(){},methods:{bc:function(){var t=this;Object(o["e"])({nickname:this.name}).then((function(e){console.log(e),e&&(t.$toast.success("修改成功"),t.$router.go(-1))}))}}},s=i,l=n("5d22"),p=Object(l["a"])(s,a,c,!1,null,"637a6dd9",null);e["default"]=p.exports}}]);