(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe949418"],{8697:function(t,e,a){"use strict";a("b216")},"90fe":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"shadowcardheader is-always-shadow mab10"},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户昵称:"}},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"提现状态:"}},[a("el-select",{staticClass:"width100",attrs:{placeholder:"请选择状态"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[a("el-option",{attrs:{label:"申请中",value:"0"}}),a("el-option",{attrs:{label:"处理中",value:"1"}}),a("el-option",{attrs:{label:"提现成功",value:"2"}}),a("el-option",{attrs:{label:"提现失败",value:"3"}})],1)],1)],1)],1)],1),a("div",{staticClass:"rightbtn"},[a("el-button",{attrs:{size:"small"},on:{click:t.reset}},[t._v("重 置")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.seach}},[t._v("查 询")])],1)],1),a("div",{staticClass:"shadowcard is-always-shadow"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,height:t.height,"element-loading-text":"Loading",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{label:"用户昵称","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.uname)+" ")]}}])}),a("el-table-column",{attrs:{label:"用户头像","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"avatarUrl",attrs:{src:t.row.avatarUrl,alt:""}})]}}])}),a("el-table-column",{attrs:{label:"提现申请id","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.cid)+" ")]}}])}),a("el-table-column",{attrs:{label:"用户id","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.uid)+" ")]}}])}),a("el-table-column",{attrs:{label:"账户id","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.aid)+" ")]}}])}),a("el-table-column",{attrs:{label:"提现金额","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.giveMoney)+" ")]}}])}),a("el-table-column",{attrs:{label:"提现状态","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.obj[e.row.state])+" ")]}}])}),a("el-table-column",{attrs:{label:"提现失败原因","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.reason)+" ")]}}])}),a("el-table-column",{attrs:{label:"姓名","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.idname)+" ")]}}])}),a("el-table-column",{attrs:{label:"身份证号码","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.idcard)+" ")]}}])}),a("el-table-column",{attrs:{label:"银行卡号码","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.cardno)+" ")]}}])}),a("el-table-column",{attrs:{label:"支付宝号码","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.alipayno)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",prop:"createTime",label:"创建时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",[t._v(t._s(t._f("dataFormat")(e.row.createTime)))])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"finishTime",label:"完成时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",[t._v(t._s(t._f("dataFormat")(e.row.finishTime)))])]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.state?a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.handlechange(e.$index,e.row,1)}}},[t._v("提现处理中")]):t._e(),1===e.row.state?a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.handlechange(e.$index,e.row,2)}}},[t._v("提现成功")]):t._e(),1===e.row.state?a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.handlechangeerr(e.$index,e.row,3)}}},[t._v("提现失败")]):t._e()]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.pageNum,"page-sizes":[10,20,30,40],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])},i=[],s=(a("99af"),a("ad8f")),l={data:function(){return{list:null,height:"",listLoading:!0,pageNum:1,pageSize:10,total:0,state:"",obj:["申请中","处理中","提现成功","提现失败"],userName:""}},created:function(){this.fetchData(),this.handleResize()},mounted:function(){window.addEventListener("resize",this.handleResize,!0)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{seach:function(){this.pageNum=1,this.pageSize=10,this.fetchData()},reset:function(){this.pageNum=1,this.pageSize=10,this.userName="",this.state="",this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0;var e={pageNum:this.pageNum,pageSize:this.pageSize,state:this.state,uname:this.userName};Object(s["b"])(e).then((function(e){t.list=e.data.records,t.total=e.data.total,t.listLoading=!1}))},auditUser:function(t,e,a){var n=this;this.listLoading=!0;var i={cid:t.cid,state:e,reason:a};Object(s["a"])(i).then((function(t){n.$message({type:"success",message:"修改完成!"}),n.listLoading=!1,n.fetchData()}))},handleClick:function(t,e){this.$refs.Dialogbox.open(e)},handlechange:function(t,e,a){var n=this;this.$confirm("此操作将修改用户提现状态为".concat(this.obj[a],",提现金额为").concat(e.giveMoney,"元！！ 是否继续??"),"提示",{confirmButtonText:"同意",cancelButtonText:"取消",type:"warning"}).then((function(){n.auditUser(e,a)})).catch((function(){n.$message({type:"success",message:"已取消修改!"})}))},handlechangeerr:function(t,e,a){var n=this;this.$prompt("请输入失败原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[\u4e00-\u9fa50-9a-zA-Z]+$/,inputErrorMessage:"原因不能为空"}).then((function(t){var i=t.value;n.auditUser(e,a,i)})).catch((function(){n.$message({type:"info",message:"取消输入"})}))},handleSizeChange:function(t){this.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.pageNum=t,this.fetchData()},handleResize:function(){var t=window.innerHeight;this.height=t-50-40-40-30-150}}},r=l,o=(a("8697"),a("2877")),u=Object(o["a"])(r,n,i,!1,null,"3e1d0771",null);e["default"]=u.exports},ad8f:function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"h",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return c})),a.d(e,"c",(function(){return d}));var n=a("b775");function i(t){return Object(n["a"])({url:"/manager/userList",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/manager/auditUser",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/fs/point/getMyList",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/manager/cashOutList",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/manager/cashOutHandle",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/fs/square/provincePointCount",method:"get",data:t})}function c(t){return Object(n["a"])({url:"/fs/square/provincePoints",method:"get",data:t})}function d(t){return Object(n["a"])({url:"/fs/square/disappear?fid=".concat(t),method:"post"})}},b216:function(t,e,a){}}]);