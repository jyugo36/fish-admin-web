(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c7405af"],{"4d32":function(t,e,n){"use strict";n("f6ef")},ad8f:function(t,e,n){"use strict";n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return d}));var a=n("b775");function l(t){return Object(a["a"])({url:"/manager/userList",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/manager/auditUser",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/fs/point/getMyList",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/manager/cashOutList",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/manager/cashOutHandle",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/fs/square/provincePointCount",method:"get",data:t})}function c(t){return Object(a["a"])({url:"/fs/square/provincePoints",method:"get",data:t})}function d(t){return Object(a["a"])({url:"/fs/square/disappear?fid=".concat(t),method:"post"})}},e382:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"shadowcardheader is-always-shadow mab10"},[n("el-form",{attrs:{"label-width":"100px"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"用户昵称:"}},[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"入驻状态:"}},[n("el-select",{staticClass:"width100",attrs:{placeholder:"请选择状态"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("el-option",{attrs:{label:"未入驻",value:"1"}}),n("el-option",{attrs:{label:"待审核",value:"2"}}),n("el-option",{attrs:{label:"已入驻",value:"3"}})],1)],1)],1)],1)],1),n("div",{staticClass:"rightbtn"},[n("el-button",{attrs:{size:"small"},on:{click:t.reset}},[t._v("重 置")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.seach}},[t._v("查 询")])],1)],1),n("div",{staticClass:"shadowcard is-always-shadow"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,height:t.height,"element-loading-text":"Loading",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),n("el-table-column",{attrs:{label:"用户头像","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticClass:"avatarUrl",attrs:{src:t.row.avatarUrl,alt:""}})]}}])}),n("el-table-column",{attrs:{label:"用户昵称","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.uname)+" ")]}}])}),n("el-table-column",{attrs:{label:"用户id","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.uid)+" ")]}}])}),n("el-table-column",{attrs:{label:"用户抖音号码","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.anonymousOpenid)+" ")]}}])}),n("el-table-column",{attrs:{label:"用户抖音id","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.openid)+" ")]}}])}),n("el-table-column",{attrs:{label:"入驻状态","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.obj[e.row.state])+" ")]}}])}),n("el-table-column",{attrs:{label:"姓名","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.idname)+" ")]}}])}),n("el-table-column",{attrs:{label:"身份证号码","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.idcard)+" ")]}}])}),n("el-table-column",{attrs:{label:"累计收益","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.money)+" ")]}}])}),n("el-table-column",{attrs:{label:"待提现金额","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.getMoney)+" ")]}}])}),n("el-table-column",{attrs:{label:"已提现金额","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.usedMoney)+" ")]}}])}),n("el-table-column",{attrs:{label:"最近收益","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.lastMoney)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",prop:"createTime",label:"创建时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(t._f("dataFormat")(e.row.createTime)))])]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){return t.handleClick(e.$index,e.row)}}},[t._v(" 查看钓点列表")]),2===e.row.state?n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return t.handlechange(e.$index,e.row)}}},[t._v("入驻审核")]):t._e()]}}])})],1),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{background:"","current-page":t.pageNum,"page-sizes":[10,20,30,40],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),n("Dialogbox",{ref:"Dialogbox",on:{fetchData:t.fetchData}})],1)},l=[],i=n("ad8f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.dialogFormVisible?n("el-dialog",{attrs:{title:t.str,visible:t.dialogFormVisible,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,height:"300","element-loading-text":"Loading",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}],null,!1,3056706777)}),n("el-table-column",{attrs:{label:"钓点名称","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.fname)+" ")]}}],null,!1,3924195516)}),n("el-table-column",{attrs:{label:"钓点id","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.fid)+" ")]}}],null,!1,1286006966)}),n("el-table-column",{attrs:{label:"钓点地址","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.faddress)+" ")]}}],null,!1,417474989)}),n("el-table-column",{attrs:{label:"经度","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.flong)+" ")]}}],null,!1,214427473)}),n("el-table-column",{attrs:{label:"纬度","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.flet)+" ")]}}],null,!1,203321542)}),n("el-table-column",{attrs:{label:"创建人id","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.createId)+" ")]}}],null,!1,727303540)}),n("el-table-column",{attrs:{label:"是否开通广告","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.adflag?"是":"否")+" ")]}}],null,!1,1462451256)}),n("el-table-column",{attrs:{label:"钓点收益","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.money)+" ")]}}],null,!1,1397497165)}),n("el-table-column",{attrs:{label:"广告完播数量","min-width":"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.lookNum)+" ")]}}],null,!1,2637824460)}),n("el-table-column",{attrs:{align:"center",prop:"createTime",label:"创建时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(t._f("dataFormat")(e.row.createTime)))])]}}],null,!1,353775476)})],1)],1):t._e()},o=[],r={name:"Dialogbox",data:function(){return{dialogFormVisible:!1,listLoading:!1,list:[],str:"用户钓点列表"}},methods:{open:function(t,e){this.getMyList(t),this.dialogFormVisible=!0},getMyList:function(t){var e=this;this.listLoading=!0;var n={createId:t.uid};Object(i["d"])(n).then((function(t){e.list=t.data.list,e.listLoading=!1}))},close:function(){this.dialogFormVisible=!1},handleClose:function(t){this.close(),t()}}},u=r,c=n("2877"),d=Object(c["a"])(u,s,o,!1,null,null,null),f=d.exports,h={components:{Dialogbox:f},data:function(){return{list:null,height:"",listLoading:!0,pageNum:1,pageSize:10,total:0,state:"",obj:["匿名","未入驻","待审核","已入驻"],userName:""}},created:function(){this.fetchData(),this.handleResize()},mounted:function(){window.addEventListener("resize",this.handleResize,!0)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{seach:function(){this.pageNum=1,this.pageSize=10,this.fetchData()},reset:function(){this.pageNum=1,this.pageSize=10,this.userName="",this.state="",this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0;var e={pageNum:this.pageNum,pageSize:this.pageSize,state:this.state,uname:this.userName};Object(i["g"])(e).then((function(e){t.list=e.data.records,t.total=e.data.total,t.listLoading=!1}))},auditUser:function(t,e){var n=this;this.listLoading=!0;var a={uid:t.uid,checkStatus:e};Object(i["h"])(a).then((function(t){n.$message({type:"success",message:"审核完成!"}),n.listLoading=!1,n.fetchData()}))},handleClick:function(t,e){this.$refs.Dialogbox.open(e)},handlechange:function(t,e){var n=this;this.$confirm("此操作将同意用户入驻平台,拿到收益, 是否继续??","提示",{confirmButtonText:"同意",cancelButtonText:"取消",type:"warning"}).then((function(){n.auditUser(e,1)})).catch((function(){}))},handleSizeChange:function(t){this.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.pageNum=t,this.fetchData()},handleResize:function(){var t=window.innerHeight;this.height=t-50-40-40-30-150}}},m=h,g=(n("4d32"),Object(c["a"])(m,a,l,!1,null,"4c696ad7",null));e["default"]=g.exports},f6ef:function(t,e,n){}}]);