import{_ as k,r as u,o as h,c as m,a as r,b as n,w as c,d as e,k as _,l as f,f as g}from"./index-dd1666b1.js";const $={data(){return{checkSuccess:!1}},mounted(){this.checkLogin()},methods:{checkLogin(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)mingToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(o){this.$http.defaults.headers.common.Authorization=`${o}`;const t="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.post(t,{api_token:this.token}).then(()=>{this.checkSuccess=!0}).catch(a=>{alert(a.response.data.message),this.$router.push("/login")})}else alert("您尚未登入。"),this.$router.push("/login")},signout(){document.cookie="mingToken=;expires=;",alert("token 已清除"),this.$router.push("/login")}}},v=r("h1",null,"你現在在後台頁面",-1),x={id:"nav"};function V(o,t,a,w,d,i){const s=u("RouterLink"),l=u("RouterView");return h(),m("div",null,[v,r("div",x,[n(s,{to:"/"},{default:c(()=>[e("回到前台")]),_:1}),e(" | "),n(s,{to:"/admin/products"},{default:c(()=>[e("後台產品列表")]),_:1}),e(" | "),n(s,{to:"/admin/orders"},{default:c(()=>[e("後台訂單")]),_:1}),e(" | "),r("a",{href:"#",onClick:t[0]||(t[0]=_((...p)=>i.signout&&i.signout(...p),["prevent"]))},"登出")]),d.checkSuccess?(h(),f(l,{key:0})):g("",!0)])}const C=k($,[["render",V]]);export{C as default};
