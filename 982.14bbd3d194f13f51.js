"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[982],{2982:(h,s,o)=>{o.r(s),o.d(s,{pwa_camera_modal:()=>d});var r=o(467),a=o(1288);const d=(()=>{let c=class{constructor(e){(0,a.r)(this,e),this.onPhoto=(0,a.c)(this,"onPhoto",7),this.noDeviceError=(0,a.c)(this,"noDeviceError",7),this.facingMode="user",this.hidePicker=!1}present(){var e=this;return(0,r.A)(function*(){const n=document.createElement("pwa-camera-modal-instance");n.facingMode=e.facingMode,n.hidePicker=e.hidePicker,n.addEventListener("onPhoto",function(){var i=(0,r.A)(function*(t){e._modal&&e.onPhoto.emit(t.detail)});return function(t){return i.apply(this,arguments)}}()),n.addEventListener("noDeviceError",function(){var i=(0,r.A)(function*(t){e.noDeviceError.emit(t)});return function(t){return i.apply(this,arguments)}}()),document.body.append(n),e._modal=n})()}dismiss(){var e=this;return(0,r.A)(function*(){e._modal&&(e._modal&&e._modal.parentNode.removeChild(e._modal),e._modal=null)})()}render(){return(0,a.h)("div",null)}};return c.style=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}",c})()}}]);