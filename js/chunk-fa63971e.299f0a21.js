(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa63971e"],{"4a5d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detials"},[s("div",[s("van-nav-bar",{attrs:{title:"课程详情","right-text":"分享","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)},"click-right":t.share}}),s("img",{staticClass:"cover_img",attrs:{src:t.detailsData.cover_img,alt:""}}),s("div",{staticStyle:{padding:"0.2rem",background:"white"}},[s("b",[t._v(t._s(t.detailsData.title))]),t._v(" "),s("br"),s("br"),s("p",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[s("span",[t._v("共"+t._s(t.detailsData.total_periods)+"课时 | "+t._s(t.detailsData.sales_num)+"人已报名")]),s("van-icon",{directives:[{name:"show",rawName:"v-show",value:0==t.detileInfo.is_collect,expression:"detileInfo.is_collect == 0"}],attrs:{name:"star-o"},on:{click:t.clickCollection}}),s("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.detileInfo.is_collect>=1,expression:"detileInfo.is_collect >= 1"}],attrs:{name:"star"},on:{click:t.clickCollection}})],1),s("br"),s("br"),s("span",{staticStyle:{"font-size":"0.12rem"}},[t._v(" 开课时间："+t._s(new Date(t.detailsData.start_play_date).toLocaleString().replace("下午",""))+" - "+t._s(new Date(t.detailsData.end_play_date).toLocaleString().replace("下午",""))+" ")]),s("br"),s("br"),s("p",{staticStyle:{"font-size":"0.36rem"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.detailsData.price>0,expression:"detailsData.price > 0"}],staticStyle:{color:"orange"}},[t._v("$ "+t._s(t.detailsData.price))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.detailsData.price<=0,expression:"detailsData.price <= 0"}],staticStyle:{color:"#e60012"}},[t._v("免费")])]),s("br")]),s("div",{staticClass:"sales"},[s("span",[t._v("服务: "+t._s(t.detailsData.sales_num))]),s("p",[t._v("详情 "),s("van-icon",{attrs:{name:"arrow"}})],1)]),s("div",{staticClass:"tea"},[s("p",{staticClass:"taem",staticStyle:{"font-weight":"700"}},[t._v("教学团队")]),s("div",{staticClass:"teacherList"},t._l(t.detailsData.teachers_list,(function(e,a){return s("div",{key:a},[s("div",{staticStyle:{"border-radius":"50%"},on:{click:function(a){return t.$router.push({path:"/Detailspage",query:{id:e}})}}},[s("img",{staticStyle:{width:"1rem",height:"1rem"},attrs:{src:e.teacher_avatar,alt:""}})]),s("p",[t._v(t._s(e.teacher_name))])])})),0)]),s("van-tabs",{staticStyle:{"margin-bottom":"0.3rem"},attrs:{scrollspy:"",sticky:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.courseTitle,(function(e,i){return s("van-tab",{key:i,attrs:{title:e.name}},[s("div",{staticStyle:{background:"",padding:"0.4rem 0.2rem",width:"100%"}},[s("p",{staticStyle:{"font-weight":"700","margin-bottom":"0.2rem"}},[t._v(" "+t._s(e.name)+" ")]),"课程介绍"==e.name?s("div",{staticStyle:{"margin-left":"0.4rem",background:"white",padding:"0.2rem"},domProps:{innerHTML:t._s(e.course_details)}}):t._e(),"课程大纲"==e.name?s("div",{staticStyle:{background:"white"}},[t._v(" "+t._s(e.title)+" ")]):t._e(),"课程评价"==e.name?s("div",{staticStyle:{"margin-top":"0.3rem",background:"white","padding-bottom":"1rem"}},[s("img",{staticStyle:{width:"100%"},attrs:{src:a("4abb"),alt:""}})]):t._e()])])})),1)],1),s("van-submit-bar",{attrs:{"button-text":"立即报名"},on:{submit:t.onSubmit}}),s("van-overlay",{attrs:{show:t.show1},on:{click:t.unshow}},[s("div",{staticClass:"wrapper",on:{click:t.unshow}},[s("div",{staticClass:"block"},[s("p",{staticStyle:{"text-align":"center","margin-top":"0.2rem",color:"red","font-size":"0.3rem"}},[t._v(" 快来扫一扫分享给好友吧！ ")]),s("qriously",{staticStyle:{"margin-left":"25%","margin-top":"20%"},attrs:{value:t.initQCode,size:138}})],1)])])],1)},i=[],r=(a("3f4b"),a("6a61"),a("2e91")),n=a("7b12"),o={data:function(){return{detailsData:{},scroll:0,active:0,course:[],courseTitle:[{name:"课程介绍"},{name:"课程大纲"},{name:"课程评价"}],activeNames:[1],colleFlag:!1,show1:!1,initQCode:"http://localhost:8080/#/details?item=67",detileInfo:{}}},methods:{enlist:function(){return""==this.$store.state.token?(this.$toast.loading({message:"正在跳转登录页面...",forbidClick:!0,duration:100}),this.$router.push("/login")):this.detailsData.has_buy?(this.$toast.loading({message:"正在报名...",forbidClick:!0}),this.$toast.success("报名成功"),void(this.detailsData.has_buy=!1)):this.$toast.success("你已经报名该课程啦！")},detailsDatas:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["i"])();case 2:a=e.sent,s=a.data.list.filter((function(e){return e.course_classify_id==t.$route.query.item})),t.detailsData=s[0];case 5:case"end":return e.stop()}}),e)})))()},courseInfoData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["j"])(t.detailsData.teachers_list[0].course_basis_id);case 2:a=e.sent,t.courseTitle[0].course_details=a.data.info.course_details,t.courseTitle[1].title=a.data.info.title,console.log(),t.detileInfo=a.data.info,console.log(t.detileInfo);case 8:case"end":return e.stop()}}),e)})))()},clickCollection:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.detileInfo.is_collect>0)){e.next=8;break}return e.next=3,Object(n["h"])(t.detileInfo.collect_id);case 3:a=e.sent,console.log(a),t.$toast.success("取消收藏成功"),e.next=13;break;case 8:return e.next=10,Object(n["g"])(t.detailsData.teachers_list[0].course_basis_id);case 10:s=e.sent,console.log(s),200==s.code&&t.$toast.success(s.msg);case 13:case"end":return e.stop()}}),e)})))()},onSubmit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["v"])(t.detailsData.course_type);case 2:a=e.sent,console.log(a),t.$router.push({path:"/order",query:{res:a,courseTitle:t.courseTitle}});case 5:case"end":return e.stop()}}),e)})))()},share:function(){this.show1=!0,this.initQCode="https://1054711110.github.io"+this.$router.history.current.fullPath,console.log(this.initQCode)},unshow:function(){this.show1=!1}},computed:{},filters:{},components:{},directives:{},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.detailsDatas();case 2:t.courseInfoData();case 3:case"end":return e.stop()}}),e)})))()},watch:{}},c=o,l=(a("717c"),a("5d22")),u=Object(l["a"])(c,s,i,!1,null,"1beadd86",null);e["default"]=u.exports},"4abb":function(t,e,a){t.exports=a.p+"img/WeChat8bfa94ee0474b67df86b21c98ade9da0.8bfa94ee.png"},"717c":function(t,e,a){"use strict";a("d8e9")},d8e9:function(t,e,a){}}]);