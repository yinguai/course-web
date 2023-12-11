"use strict";(self["webpackChunkcoursebench_frontend"]=self["webpackChunkcoursebench_frontend"]||[]).push([[756],{5657:(t,e,s)=>{s.d(e,{Z:()=>u});var o=s(1584),a=s(5439),r=function(){var t=this,e=t._self._c;return e("div",[""!==t.src?e(o.Z,{attrs:{alt:"Background Image",src:t.src,height:t.$vuetify.breakpoint.xsOnly?91:t.$vuetify.breakpoint.mdAndDown?121:211}}):e(a.Z,{attrs:{color:t.color,height:t.$vuetify.breakpoint.xsOnly?91:t.$vuetify.breakpoint.mdAndDown?121:211}})],1)},i=[];const n={props:{src:{type:String,default:""},color:{type:String,default:""}}},l=n;var d=s(1001),c=(0,d.Z)(l,r,i,!1,null,null,null);const u=c.exports},3859:(t,e,s)=>{s.d(e,{Z:()=>c});var o=s(5439),a=function(){var t=this,e=t._self._c;return e(o.Z,{attrs:{color:"#B0B0B0",height:t.$vuetify.breakpoint.xsOnly?91:t.$vuetify.breakpoint.mdAndDown?121:211}})},r=[];const i={},n=i;var l=s(1001),d=(0,l.Z)(n,a,r,!1,null,null,null);const c=d.exports},8537:(t,e,s)=>{s.d(e,{Z:()=>h});var o=s(4741),a=s(3816),r=s(7024),i=s(9088),n=s(7477),l=s(7894),d=function(){var t=this,e=t._self._c;return e(n.Z,[e(a.Z,{staticClass:"mb-3",attrs:{flat:"","max-width":"800",outlined:""}},[e("CommentCardBar",{attrs:{comment:t.comment}}),e("CommentCardContent",{attrs:{comment:t.comment},scopedSlots:t._u([t.comment.is_fold&&t.foldComment?{key:"title",fn:function(){return[e("div")]},proxy:!0}:null,t.comment.is_fold&&t.foldComment?{key:"content",fn:function(){return[e("div",{staticClass:"px-sm-4 px-2 pb-2 pt-2"},[e("CommentFold",{on:{click:function(e){t.foldComment=!1}}}),e(l.Z,[e(r.Z,{staticClass:"pa-0 pl-3 pb-2 pt-sm-8 pt-2",attrs:{cols:"12"}},[e(i.Z,{attrs:{size:"16"}},[t._v(" "+t._s(t.statics.icons.mdiSchoolOutline)+" ")]),t._l(t.comment.group.teachers,(function(s,o){return e("span",{key:o,staticClass:"pl-1 router-container text-caption font-weight-bold",on:{click:function(e){return t.$router.push({path:`/teacher/${s.id}`})}}},[t._v(" "+t._s(s.name)+" ")])}))],2)],1)],1)]},proxy:!0}:null,"/Recent"===t.$route.path&&(t.global.userProfile.is_admin||t.global.userProfile.is_community_admin)?{key:"footerNote",fn:function(){return[e("div",{staticClass:"d-flex justify-end",staticStyle:{"flex-wrap":"wrap"}},[e("div",{staticClass:"d-flex"},[e(o.Z,{staticClass:"fold-button mr-1",attrs:{small:"",color:(t.commentFoldStatus.foldStatus,"primary"),elevation:"0",text:!t.commentFoldStatus.foldStatus,outlined:!t.commentFoldStatus.foldStatus,disabled:!t.global.isLogin},on:{click:t.onClickFold}},[e("div",{staticClass:"px-0"},[e("span",{staticClass:"text-caption"},[t._v(" 折叠 ")])])])],1)])]},proxy:!0}:null],null,!0)})],1)],1)},c=[],u=s(2108),m=s(1369),p=s(4042),f=s(144),v=s(5317),g=s(7095),_=s(7945),C=s(6833);const x=()=>{const t=(0,f.f3)("showSnackbar"),e=(0,f.f3)("global"),s=(0,f.qj)({foldStatus:!1,operationStatus:-1});let o=o=>{(0,C.eE)(o.response)?t("error",o.response.data.code):e.userProfile.id?e.userProfile.is_admin||t("error","您没有权限执行此操作"):t("error","您还没有登录"),s.operationStatus=-1},a=e=>{s.foldStatus=1===s.operationStatus,t("success","折叠成功")};const r=(0,g.Z)("/comment/fold",{onMutate:()=>{},onSuccess:a,onError:o}),i=(0,_.Z)((t=>{s.operationStatus=1,r.mutate({id:t,status:!0})})),n=(0,_.Z)((t=>{s.operationStatus=0,r.mutate({id:t,status:!1})}));return{doFold:i,doUnfold:n,commentFoldStatus:s}},S={setup(){const{doFold:t,doUnfold:e,commentFoldStatus:s}=x(),o=(0,f.f3)("global"),a=(0,f.iH)(!0),r={icons:{mdiSchoolOutline:v.BNC}};return{foldComment:a,statics:r,global:o,doFold:t,doUnfold:e,commentFoldStatus:s}},props:{comment:Object},components:{CommentCardContent:u.Z,CommentCardBar:m.Z,CommentFold:p.Z},mounted(){this.commentFoldStatus.foldStatus=this.comment.is_fold},methods:{onClickFold(){!0===this.commentFoldStatus.foldStatus?this.doUnfold(this.comment.id):this.doFold(this.comment.id)}}},y=S;var b=s(1001),w=(0,b.Z)(y,d,c,!1,null,null,null);const h=w.exports},3756:(t,e,s)=>{s.r(e),s.d(e,{default:()=>it});var o=s(3816),a=s(7024),r=s(1819),i=s(6930),n=s(7894),l=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"min-height":"100%"}},[t.status.commentLoading?e("ImageLoader"):e("BackgroundImage",{attrs:{src:t.$vuetify.theme.dark?t.backgroundDark:t.backgroundLight}}),e("div",{staticClass:"d-flex justify-center",staticStyle:{"flex-wrap":"wrap"}},[e("div",{staticClass:"pa-3"},[e(r.Z,{staticClass:"py-sm-3 py-0"},[e(n.Z,[e(a.Z,{staticClass:"pl-sm-0 pr-lg-3 pr-0 pl-0 pr-0 pt-0 pb-3"},[e(o.Z,{attrs:{width:t.$vuetify.breakpoint.width-24>800?"800px":t.$vuetify.breakpoint.width-24+"px"}})],1)],1),e(n.Z,[e(a.Z,{staticClass:"pl-sm-0 pr-lg-3 pr-0 pl-0 pr-0 py-0"},[t.global.userProfile.is_admin||t.global.userProfile.is_community_admin?e("div",[e("ManageCard")],1):t._e()])],1),e(n.Z,[e(a.Z,{staticClass:"pl-sm-0 pr-lg-3 pr-0 pl-0 pr-0 pt-sm-3 pt-0"},[t.status.commentLoading?e("div",t._l(2,(function(t){return e("div",{key:t},[e("CommentLoader",{attrs:{height:"290px"}})],1)})),0):0===t.commentText.length?e("div",[e("Nothing",{staticClass:"py-16"})],1):e("div",t._l(t.commentText,(function(t,s){return e("div",{key:t.id},[e(i.Z5,[e("CommentCard",{attrs:{comment:t}})],1)],1)})),0)])],1)],1)],1)])],1)},d=[],c=s(5657),u=s(8537),m=s(3859),p=s(1146),f=s(4741),v=s(5255),g=s(2393),_=s(4690),C=s(7690),x=s(9657),S=s(9088),y=s(3318),b=s(5439),w=s(1013),h=s(4272),k=s(62),Z=s(6056),T=s(9536),P=function(){var t=this,e=t._self._c;return e("div",[e(_.Z,{attrs:{width:"750",transition:t.$vuetify.breakpoint.xsOnly?"dialog-bottom-transition":"scale-transition",fullscreen:t.$vuetify.breakpoint.xsOnly},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:o}){return[e(f.Z,t._g(t._b({staticClass:"pa-0",attrs:{block:"",outlined:"",text:""}},"v-btn",o,!1),s),[e("div",[e(S.Z,{staticClass:"pr-1",staticStyle:{transform:"translate(0, -1px)"},attrs:{size:"18"}},[t._v(" "+t._s(t.statics.icons.mdiFormatPaint)+" ")]),e("span",[t._v("管理评论")])],1)])]}}]),model:{value:t.windowStatus.showDialog,callback:function(e){t.$set(t.windowStatus,"showDialog",e)},expression:"windowStatus.showDialog"}},[e(o.Z,{attrs:{flat:""}},[e("div",{staticClass:"pt-6 pt-sm-11 px-6 px-sm-11 d-flex justify-space-between"},[e("div",[e("img",{staticClass:"small-icon",attrs:{src:t.$vuetify.theme.dark?t.logoDark:t.logoLight,alt:""}})]),t.$vuetify.breakpoint.xsOnly?e("div",["xs"===t.$vuetify.breakpoint.name?e(f.Z,{staticStyle:{transform:"translate(0, -1px)"},attrs:{icon:""},on:{click:function(e){t.windowStatus.showDialog=!1}}},[e(S.Z,[t._v(t._s(t.statics.icons.mdiWindowClose))])],1):t._e()],1):t._e()]),e(Z.Z,{attrs:{touchless:""},model:{value:t.windowStatus.windowStep,callback:function(e){t.$set(t.windowStatus,"windowStep",e)},expression:"windowStatus.windowStep"}},[e(T.Z,{attrs:{value:0}},[e(v.EB,{staticClass:"pt-1 px-6 px-sm-11"},[e("div",[e("div",{staticClass:"font-weight-bold text-h5"},[t._v("管理评论")])])]),e(v.ZB,{staticClass:"px-6 px-sm-11 pb-6 pb-sm-11"},[e("div",[t._l(t.userComments,(function(s,o){return e("div",{key:o},[e(x.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:o}){return[e("div",{staticClass:"router-container",on:{click:function(e){t.setEditTarget(s),t.windowStatus.windowStep=1}}},[e(C.Z),e("div",{staticClass:"pt-4"},[t.global.userProfile.is_admin||t.global.userProfile.is_community_admin?e("div",{staticClass:"d-flex"},[e("div",{staticClass:"pr-1",staticStyle:{transform:"translate(0, -1px)"}},[e("AvatarContainer",{attrs:{name:s.user?t.useUserName(s.user):"?",src:s.user?s.user.avatar:"",small:"",slice:"",size:"15"}})],1),e("div",{staticClass:"pr-1"},[t._v(" "+t._s(t.useUserName(s.user)+(s.user&&s.is_anonymous?"(匿名)":""))+" ")]),s.is_fold?e("div",{staticStyle:{transform:"translate(0, -1px)"}},[e(g.Z,{staticClass:"px-1 mr-1",attrs:{label:"","x-small":"",color:"secondary"}},[t._v(" "+t._s("已隐藏")+" ")])],1):t._e(),s.is_covered?e("div",{staticStyle:{transform:"translate(0, -1px)"}},[e(g.Z,{staticClass:"px-1",attrs:{label:"","x-small":"",color:"warning"}},[t._v(" "+t._s("已遮盖")+" ")])],1):t._e()]):t._e()]),e("div",[e("span",{staticClass:"pr-2"},[t._v(t._s(s.course.name))]),e(S.Z,{staticStyle:{transform:"translate(0, -1px)"},attrs:{size:"16"}},[t._v(" "+t._s(t.statics.icons.mdiSchoolOutline)+" ")]),t._l(s.group.teachers,(function(s,o){return e("span",{key:o},[t._v(" "+t._s(s.name)+" ")])}))],2),e("div",{staticClass:"text-h6",style:{"text-decoration":o?"underline":"none"}},[t._v(" "+t._s(s.title)+" ")]),e("div",{staticClass:"pt-4"},[t._v(" 修读于："+t._s(`${s.semester.toString().substring(0,4)}年${t.termItems[new Number(s.semester.toString().substring(4))-1].name}`)+" ")]),e("div",{staticClass:"d-flex pb-4"},[e("div",{staticClass:"pr-2"},[t._v(" 发布于："+t._s(t.unixToReadable(s.post_time))+" ")]),e("div",[t._v(" 修改于："+t._s(t.unixToReadable(s.update_time))+" ")])])],1)]}}],null,!0)})],1)})),e(C.Z)],2)])],1),e(T.Z,{attrs:{value:1}},[e(v.EB,{staticClass:"pt-0 px-6 px-sm-11"},[e("div",{staticClass:"text-body-2 pb-1 overflow-ellipsis"},[e(f.Z,{staticStyle:{transform:"translate(0, -1px)"},attrs:{icon:"","x-small":""},on:{click:function(e){t.clearEditTarget(),t.windowStatus.windowStep=0}}},[e(S.Z,[t._v(" "+t._s(t.statics.icons.mdiArrowLeft)+" ")])],1),e("span",[t._v(t._s(t.courseName))])],1),e("div",{staticClass:"pt-1",staticStyle:{width:"100%"}},[e("div",{staticClass:"d-inline-block pr-4 align-center"},[e("AvatarContainer",{attrs:{name:t.formStatus.userProfile?t.useUserName(t.formStatus.userProfile):"?",src:t.formStatus.userProfile?t.formStatus.userProfile.avatar:"",slice:"",size:50}})],1),e("div",{staticClass:"d-inline-block align-center",staticStyle:{width:"calc(100% - 72px)"}},[e(k.Z,{staticClass:"font-weight-bold",attrs:{label:"标题","error-messages":"title"===t.errorMsg.target?t.errorMsg.msg:"",disabled:""},model:{value:t.formStatus.title,callback:function(e){t.$set(t.formStatus,"title",e)},expression:"formStatus.title"}})],1)])]),e(v.ZB,{staticClass:"px-6 px-sm-11 pb-6 pb-sm-11"},[e("div",[e(b.Z,{staticStyle:{"margin-bottom":"30px"},attrs:{flat:"",outlined:"","min-height":"202px"}},[e("TextContainer",{attrs:{text:t.formStatus.content,markdown:"",title:"1321","no-expand":""}})],1)],1),e("div",{staticClass:"d-flex justify-space-between flex-wrap"},t._l(t.judgeItems,(function(s,o){return e("div",{key:o,staticClass:"align-center py-3",style:{width:t.$vuetify.breakpoint.xsOnly?"100%":"48%"}},[e(w.Z,{staticClass:"align-center",attrs:{max:"5",min:"1",step:"1",color:t.gradingInfo.color[t.formStatus.slider[o]-1],"track-color":"grey","thumb-label":"","hide-details":"",label:s,disabled:""},scopedSlots:t._u([{key:"append",fn:function(){return[e(g.Z,{staticClass:"px-1",attrs:{"x-small":"",label:"",color:t.gradingInfo.color[t.formStatus.slider[o]-1]}},[e("span",{staticClass:"text-caption white--text"},[t._v(t._s(t.statics.grade[o][t.formStatus.slider[o]-1]))])])]},proxy:!0},{key:"thumb-label",fn:function({value:e}){return[t._v(" "+t._s(t.gradingEmojis[e-1])+" ")]}}],null,!0),model:{value:t.formStatus.slider[o],callback:function(e){t.$set(t.formStatus.slider,o,e)},expression:"formStatus.slider[index]"}})],1)})),0),e("div",{staticClass:"d-flex justify-end justify-sm-space-between flex-wrap"},[e("div",{class:["d-flex","flex-wrap","justify-sm-start",null==t.formStatus.id?"justify-space-between":"justify-end"]},[e("div",{class:["pr-sm-4",null==t.formStatus.id?"pr-0":"pr-4"]},[e(y.Z,{staticStyle:{width:"100px"},attrs:{items:t.yearItems,label:"修读时间",error:"semester"===t.errorMsg.target,disabled:""},model:{value:t.courseYear,callback:function(e){t.courseYear=e},expression:"courseYear"}})],1),e("div",{staticClass:"pr-sm-4 pr-0"},[e(y.Z,{staticStyle:{width:"100px"},attrs:{items:t.termItems,"item-text":"name","item-value":"id",label:"修读学期",error:"semester"===t.errorMsg.target,disabled:""},model:{value:t.courseTerm,callback:function(e){t.courseTerm=e},expression:"courseTerm"}})],1),e("div",{staticClass:"d-flex align-center",style:{width:t.$vuetify.breakpoint.xsOnly?"100%":""}},[e("div",{staticClass:"d-flex justify-sm-start justify-end",style:{width:t.$vuetify.breakpoint.xsOnly?"100%":""}},[e("div",{staticClass:"align-center d-flex pr-4"},[e(h.Z,{staticClass:"mt-0",attrs:{label:"匿名",color:"info","hide-details":"",disabled:""},model:{value:t.formStatus.is_anonymous,callback:function(e){t.$set(t.formStatus,"is_anonymous",e)},expression:"formStatus.is_anonymous"}})],1)])])]),e("div",{staticClass:"align-center d-flex pt-sm-0 pt-8 justify-sm-start justify-end",style:{width:t.$vuetify.breakpoint.xsOnly?"100%":""}},[e("div",{staticClass:"d-flex justify-end"},[e("div",[e(f.Z,{staticClass:"mr-4",attrs:{color:"error",depressed:"",loading:t.formStatus.deleteLoading},on:{click:t.doDeleteComment}},[t._v(" "+t._s("删除评论")+" ")]),e("span",[t.formStatus.is_fold?t._e():e(f.Z,{staticClass:"mr-4",attrs:{color:t.formStatus.is_covered?"success":"warning",depressed:"",loading:t.formStatus.coverLoading},on:{click:t.doCoverComment}},[t._v(" "+t._s(t.formStatus.is_covered?"取消遮盖":"遮盖评论")+" ")]),t.formStatus.is_covered?t._e():e(f.Z,{attrs:{color:t.formStatus.is_fold?"accent":"secondary",depressed:"",loading:t.formStatus.hideLoading},on:{click:t.doHideComment}},[t._v(" "+t._s(t.formStatus.is_fold?"取消隐藏":"隐藏评论")+" ")]),t.formStatus.is_covered?e(f.Z,{attrs:{color:"lime accent-4",depressed:"",loading:t.formStatus.regenerateLoading},on:{click:t.doRegenerateCover}},[t._v(" "+t._s("重新生成")+" ")]):t._e()],1)],1)])])])])],1)],1)],1)],1)],1)},L=[],E=s(73),$=s(144),N=s(5317),j=s(7095),O=s(6833);function D(){return 0===this.courseYear||""===this.courseTerm?"":this.courseYear+this.courseTerm}const F=()=>{const t=(0,$.f3)("showSnackbar"),e=(0,$.f3)("courseCommentText"),s=(0,$.f3)("global"),o=(0,$.iH)(0),a=(0,$.iH)(""),r=(0,$.iH)(""),i=(0,$.iH)([]),n=(0,$.qj)({windowStep:1,previewMarkdown:!1,showDialog:!1}),l={icons:{mdiPencil:N.r9,mdiSchoolOutline:N.BNC,mdiArrowLeft:N.J3k,mdiWindowClose:N.UEB,mdiFormatPaint:N.tdF},grade:[E.gN.quality,E.gN.workload,E.gN.difficulty,E.gN.distribution]},d=(0,$.qj)({target:"",msg:""}),c=(0,$.qj)({id:null,deleteLoading:!1,hideLoading:!1,coverLoading:!1,regenerateLoading:!1,isPostSuccess:!1,isPostError:!1,title:"",content:"",semester:(0,$.Fl)(D),is_anonymous:!1,is_fold:!1,is_covered:!1,userProfile:{},slider:[5,5,5,5],commentTarget:0}),u=t=>{r.value=t.course.name,c.id=t.id,c.title=t.title,c.content=t.content,c.is_anonymous=t.is_anonymous,c.is_fold=t.is_fold,c.is_covered=t.is_covered,c.slider=t.score,o.value=parseInt(t.semester/100),a.value=t.semester.toString().slice(4,6),c.commentTarget=t.group.id,c.userProfile=t.user},m=()=>{c.id=null,c.title="",c.content="",a.value="",o.value=0,c.is_anonymous=!1,c.is_fold=!1,c.is_covered=!1,c.slider=[5,5,5,5],c.commentTarget=0,c.userProfile={}},p=(0,j.Z)("/comment/delete",{onMutate:()=>{c.deleteLoading=!0},onSuccess:()=>{c.deleteLoading=!1,c.isPostSuccess=!0,t("success","删除评论成功"),m(),n.windowStep=0,setTimeout((()=>{window.location.reload()}),1e3)},onError:e=>{c.deleteLoading=!1,c.isPostError=!0,(0,O.eE)(e.response)?t("error","网络连接错误",3e3):"CommentNotExists"===e.response.data.code||"PermissionDenied"===e.response.data.code?t("error",e.response.data.msg,3e3):(0,O.q6)(e.value.response.data.msg)?t("error",e.value.response.data.msg,3e3):t("error","服务器发生错误",3e3)}}),f=(0,j.Z)("/comment/fold",{onMutate:()=>{c.hideLoading=!0},onSuccess:()=>{c.hideLoading=!1,c.isPostSuccess=!0,c.is_fold?t("success","取消隐藏成功"):t("success","隐藏评论成功"),m(),n.windowStep=0,setTimeout((()=>{window.location.reload()}),1e3)},onError:e=>{c.hideLoading=!1,c.isPostError=!0,(0,O.eE)(e.response)?t("error","网络连接错误",3e3):"CommentNotExists"===e.response.data.code||"PermissionDenied"===e.response.data.code?t("error",e.response.data.msg,3e3):(0,O.q6)(e.value.response.data.msg)?t("error",e.value.response.data.msg,3e3):t("error","服务器发生错误",3e3)}}),v=(0,j.Z)("/comment/cover",{onMutate:()=>{},onSuccess:()=>{c.coverLoading=!1,c.regenerateLoading=!1,c.isPostSuccess=!0,c.is_covered?t("success","取消遮盖成功"):t("success","遮盖评论成功"),m(),n.windowStep=0,setTimeout((()=>{window.location.reload()}),1e3)},onError:e=>{c.coverLoading=!1,c.regenerateLoading=!1,c.isPostError=!0,(0,O.eE)(e.response)?t("error","网络连接错误",3e3):"CommentNotExists"===e.response.data.code||"PermissionDenied"===e.response.data.code?t("error",e.response.data.msg,3e3):(0,O.q6)(e.value.response.data.msg)?t("error",e.value.response.data.msg,3e3):t("error","服务器发生错误",3e3)}}),g=()=>{p.mutate({id:c.id})},_=()=>{f.mutate({id:c.id,status:!c.is_fold})},C=()=>{c.coverLoading=!0,v.mutate({id:c.id,status:!c.is_covered})},x=()=>{c.regenerateLoading=!0,v.mutate({id:c.id,status:c.is_covered})};return(0,$.YP)(e,(()=>{s.userProfile.is_admin||s.userProfile.is_community_admin?i.value=e.value.map((t=>JSON.parse(JSON.stringify(t)))):i.value=e.value.filter((t=>t.user&&t.user.id==s.userProfile.id)).map((t=>JSON.parse(JSON.stringify(t)))),i.value.length>0?n.windowStep=0:(n.windowStep=1,c.userProfile=s.userProfile)}),{deep:!0}),{statics:l,errorMsg:d,formStatus:c,windowStatus:n,courseYear:o,courseTerm:a,userComments:i,courseName:r,doDeleteComment:g,doHideComment:_,doCoverComment:C,doRegenerateCover:x,setEditTarget:u,clearEditTarget:m}};var I=s(2105),B=s(4920),M=s(1921),U=s(8789),H=s(9574),q=s(3616),A=s(3434);const Y={setup(){const{statics:t,errorMsg:e,formStatus:s,windowStatus:o,courseYear:a,courseTerm:r,userComments:i,courseName:n,doHideComment:l,doDeleteComment:d,doCoverComment:c,doRegenerateCover:u,setEditTarget:m,clearEditTarget:p}=F(),f=(0,$.f3)("global");return{useUserName:A.Z,commentPolicy:q.commentPolicy,logoDark:U,logoLight:H,unixToReadable:M.N,judgeItems:E.De,yearItems:E.FV,termItems:E.u$,gradingInfo:E.gN,global:f,statics:t,errorMsg:e,formStatus:s,windowStatus:o,courseYear:a,courseTerm:r,userComments:i,courseName:n,doHideComment:l,doDeleteComment:d,doCoverComment:c,doRegenerateCover:u,setEditTarget:m,clearEditTarget:p,gradingEmojis:E.GU}},components:{AvatarContainer:I.Z,TextContainer:B.Z}},R=Y;var J=s(1001),z=(0,J.Z)(R,P,L,!1,null,"49589685",null);const W=z.exports;var G=s(5890),V=s(6683),K=s(9921),Q=s(3213),X=s(8544),tt=s(257),et=s(2251);const st=()=>{const t=(0,et.t)(),e=(0,$.f3)("showSnackbar"),s=(0,$.f3)("global"),o=(0,$.qj)({...Q.U8,commentLoading:!1}),a=(0,$.iH)([]),r={total:0,score:0,count:(()=>{let t={};return Object.keys(E.xs).filter((t=>""!==t)).forEach((e=>{t[e]=0})),t})()},i=()=>{o.commentLoading=!0;const{status:s,data:i,error:n}=(0,X.Z)(["comment_recent"],"/comment/recent");(0,tt.Z)(s,(()=>{if("success"===s.value)o.commentLoading=!1;else if("error"===s.value){const s=n.value.response;e("error",(0,O.eE)(s)?"网络连接失败":s.data.msg,3e3),setTimeout((()=>t.push("/")),3e3)}})),(0,tt.Z)(i,(()=>{if(i.value){const t=Object.keys(r.count).filter((t=>"__ob__"!==t));i.value.data?a.value=i.value.data.map((e=>t.indexOf(e.course.institute)>=0?e:{...e,course:{...e.course,institute:"其他学院"}})):a.value=[]}}))};return(0,$.bv)((()=>{i()})),{commentText:a,status:o,global:s}},ot={components:{BackgroundImage:c.Z,CommentCard:u.Z,ImageLoader:m.Z,CommentLoader:p.Z,Nothing:G.Z,ManageCard:W},setup(){const{commentText:t,status:e,global:s}=st();return(0,$.JJ)("courseCommentText",t),{commentText:t,status:e,global:s,backgroundDark:V,backgroundLight:K}},data(){return{scrollTop:document.documentElement.scrollTop}},mounted(){document.addEventListener("scroll",(()=>{this.scrollTop=document.documentElement.scrollTop}))},computed:{adoptiveCardPosition(){return this.$vuetify.breakpoint.mdAndDown?{}:this.scrollTop<=40?{transform:"translate(0, -160px)"}:{position:"fixed",top:"90px"}}}},at=ot;var rt=(0,J.Z)(at,l,d,!1,null,null,null);const it=rt.exports},6683:(t,e,s)=>{t.exports=s.p+"img/user-background-dark.588b4e61.svg"},9921:(t,e,s)=>{t.exports=s.p+"img/user-background-light.09beccad.svg"}}]);