(function(){"use strict";var e={5874:function(e,o,n){var r=n(9242),a=n(3396);const t={id:"app",class:"container"},i=(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col-md-12"},[(0,a._)("h1",null,"Personas")])],-1),s={class:"row"},l={class:"col-md-12"},d={key:0,class:"alert alert-info",role:"alert"};function c(e,o,n,r,c,u){const p=(0,a.up)("FormularioPersona"),m=(0,a.up)("TablaPersonas");return(0,a.wg)(),(0,a.iD)("div",t,[i,(0,a._)("div",s,[(0,a._)("div",l,[(0,a.Wm)(p,{onAddPersona:u.agregarPersona},null,8,["onAddPersona"]),c.personas.length<1?((0,a.wg)(),(0,a.iD)("div",d," No hay ninguna persona en la base de datos ")):(0,a.kq)("",!0),(0,a.Wm)(m,{personas:c.personas,onDeletePersona:u.eliminarPersona,onEditarPersona:u.actualizarPersona},null,8,["personas","onDeletePersona","onEditarPersona"])])])])}var u=n(7139);const p={id:"tabla-personas"},m={class:"table"},v=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Nombre"),(0,a._)("th",null,"Apellido"),(0,a._)("th",null,"Email")])],-1),f={key:0},b=["onUpdate:modelValue"],h={key:1},_={key:2},g=["onUpdate:modelValue"],y={key:3},w={key:4},k=["onUpdate:modelValue"],P={key:5},E={key:6},D=["onClick"],C=["onClick"],O={key:7},A=["onClick"],j=["onClick"];function F(e,o,n,t,i,s){return(0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("table",m,[v,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.personas,(o=>((0,a.wg)(),(0,a.iD)("tr",{key:o.id},[i.editando===o.id?((0,a.wg)(),(0,a.iD)("td",f,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.nombre=e},null,8,b),[[r.nr,o.nombre]])])):((0,a.wg)(),(0,a.iD)("td",h,(0,u.zw)(o.nombre),1)),i.editando===o.id?((0,a.wg)(),(0,a.iD)("td",_,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.apellido=e},null,8,g),[[r.nr,o.apellido]])])):((0,a.wg)(),(0,a.iD)("td",y,(0,u.zw)(o.apellido),1)),i.editando===o.id?((0,a.wg)(),(0,a.iD)("td",w,[(0,a.wy)((0,a._)("input",{type:"email",class:"form-control","onUpdate:modelValue":e=>o.email=e},null,8,k),[[r.nr,o.email]])])):((0,a.wg)(),(0,a.iD)("td",P,(0,u.zw)(o.email),1)),i.editando===o.id?((0,a.wg)(),(0,a.iD)("td",E,[(0,a._)("button",{class:"btn btn-success",onClick:e=>s.guardarPersona(o)}," 💾 Guardar ",8,D),(0,a._)("button",{class:"btn btn-secondary ml-2",onClick:e=>s.cancelarEdicion(o)}," ❌ Cancelar ",8,C)])):((0,a.wg)(),(0,a.iD)("td",O,[(0,a._)("button",{class:"btn btn-info",onClick:e=>s.editarPersona(o)},"✏️ Editar",8,A),(0,a._)("button",{class:"btn btn-danger ml-2",onClick:n=>e.$emit("delete-persona",o.id)},"🗑️ Eliminar",8,j)]))])))),128))])])])}var U={name:"TablaPersonas",data(){return{editando:null}},props:{personas:Array},methods:{editarPersona(e){this.personaEditada=Object.assign({},e),this.editando=e.id},guardarPersona(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null)},cancelarEdicion(e){Object.assign(e,this.personaEditada),this.editando=null}}},V=n(89);const x=(0,V.Z)(U,[["render",F]]);var N=x;const T=e=>((0,a.dD)("data-v-243f00f4"),e=e(),(0,a.Cn)(),e),z={id:"formulario-persona"},$={class:"container"},q={class:"row"},Z={class:"col-md-4"},K={class:"form-group"},M=T((()=>(0,a._)("label",null,"Nombre",-1))),W={class:"col-md-4"},G={class:"form-group"},H=T((()=>(0,a._)("label",null,"Apellido",-1))),I={class:"col-md-4"},J={class:"form-group"},L=T((()=>(0,a._)("label",null,"Email",-1))),S=T((()=>(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col-md-4"},[(0,a._)("div",{class:"form-group"},[(0,a._)("button",{class:"btn btn-primary"},"Añadir persona")])])],-1))),Y={class:"container"},B={class:"row"},Q={class:"col-md-12"},R={key:0,class:"alert alert-danger",role:"alert"},X={key:1,class:"alert alert-success",role:"alert"};function ee(e,o,n,t,i,s){return(0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("form",{onSubmit:o[7]||(o[7]=(0,r.iM)(((...e)=>s.enviarFormulario&&s.enviarFormulario(...e)),["prevent"]))},[(0,a._)("div",$,[(0,a._)("div",q,[(0,a._)("div",Z,[(0,a._)("div",K,[M,(0,a.wy)((0,a._)("input",{type:"text",class:(0,u.C_)(["form-control",{"is-invalid":i.procesando&&s.validoNombre}]),"onUpdate:modelValue":o[0]||(o[0]=e=>i.persona.nombre=e),onFocus:o[1]||(o[1]=(...e)=>s.resetEstado&&s.resetEstado(...e)),ref:"nombre",onKeypress:o[2]||(o[2]=(...e)=>s.resetEstado&&s.resetEstado(...e))},null,34),[[r.nr,i.persona.nombre]])])]),(0,a._)("div",W,[(0,a._)("div",G,[H,(0,a.wy)((0,a._)("input",{type:"text",class:(0,u.C_)(["form-control",{"is-invalid":i.procesando&&s.validoApellido}]),"onUpdate:modelValue":o[3]||(o[3]=e=>i.persona.apellido=e),onFocus:o[4]||(o[4]=(...e)=>s.resetEstado&&s.resetEstado(...e))},null,34),[[r.nr,i.persona.apellido]])])]),(0,a._)("div",I,[(0,a._)("div",J,[L,(0,a.wy)((0,a._)("input",{type:"email",class:(0,u.C_)(["form-control",{"is-invalid":i.procesando&&s.validoEmail}]),"onUpdate:modelValue":o[5]||(o[5]=e=>i.persona.email=e),onFocus:o[6]||(o[6]=(...e)=>s.resetEstado&&s.resetEstado(...e))},null,34),[[r.nr,i.persona.email]])])])]),S]),(0,a._)("div",Y,[(0,a._)("div",B,[(0,a._)("div",Q,[i.error&i.procesando?((0,a.wg)(),(0,a.iD)("div",R," debes rellenar todos los campos! ")):(0,a.kq)("",!0),i.correcto?((0,a.wg)(),(0,a.iD)("div",X," Persona añadida correctamente ")):(0,a.kq)("",!0)])])])],32)])}var oe={name:"formulario-persona",data(){return{procesando:!1,error:!1,correcto:!1,persona:{nombre:"",apellido:"",email:""}}},methods:{enviarFormulario(){this.procesando=!0,this.resetEstado(),this.validoNombre||this.validoApellido||this.validoEmail?this.error=!0:(this.$emit("add-persona",this.persona),this.$refs.nombre.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.persona={nombre:"",apellido:"",email:""})},resetEstado(){this.error=!1,this.correcto=!1}},computed:{validoNombre(){return this.persona.nombre.length<1},validoApellido(){return this.persona.apellido.length<1},validoEmail(){return this.persona.email.length<1}}};const ne=(0,V.Z)(oe,[["render",ee],["__scopeId","data-v-243f00f4"]]);var re=ne,ae={name:"App",components:{TablaPersonas:N,FormularioPersona:re},data(){return{personas:[{id:1,nombre:"Jon",apellido:"Nieve",email:"jon@email.com"},{id:2,nombre:"Tyrion",apellido:"Lannister",email:"tyrion@email.com"},{id:3,nombre:"Daenerys",apellido:"Targaryen",email:"daenerys@email.com"}]}},methods:{agregarPersona(e){this.personas=[...this.personas,e]},eliminarPersona(e){this.personas=this.personas.filter((o=>o.id!=e))},actualizarPersona(e,o){this.personas=this.personas.map((n=>n.id===e?o:n))}}};const te=(0,V.Z)(ae,[["render",c]]);var ie=te;(0,r.ri)(ie).mount("#app")}},o={};function n(r){var a=o[r];if(void 0!==a)return a.exports;var t=o[r]={exports:{}};return e[r](t,t.exports,n),t.exports}n.m=e,function(){var e=[];n.O=function(o,r,a,t){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],t=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&t||i>=t)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,t<i&&(i=t));if(s){e.splice(c--,1);var d=a();void 0!==d&&(o=d)}}return o}t=t||0;for(var c=e.length;c>0&&e[c-1][2]>t;c--)e[c]=e[c-1];e[c]=[r,a,t]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var r in o)n.o(o,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,r){var a,t,i=r[0],s=r[1],l=r[2],d=0;if(i.some((function(o){return 0!==e[o]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var c=l(n)}for(o&&o(r);d<i.length;d++)t=i[d],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(c)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5874)}));r=n.O(r)})();
//# sourceMappingURL=app.81c08eea.js.map