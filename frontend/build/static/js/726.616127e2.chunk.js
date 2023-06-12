"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[726],{8726:function(e,n,t){t.r(n),t.d(n,{Gradient:function(){return h}});var i=t(4165),o=t(5861),r=t(9439),a=t(3433),s=t(5671),l=t(3144),c=t(4942);function u(e){return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]}["SCREEN","LINEAR_LIGHT"].reduce((function(e,n,t){return Object.assign(e,(0,c.Z)({},n,t))}),{});var d=function(){function e(n,t,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];(0,s.Z)(this,e);var c=this,u=-1!==document.location.search.toLowerCase().indexOf("debug=webgl");c.canvas=n,c.gl=c.canvas.getContext("webgl",{antialias:!0}),c.meshes=[];var d=c.gl;t&&i&&this.setSize(t,i),c.lastDebugMsg,c.debug=o&&u?function(e){var n,t=new Date;t-c.lastDebugMsg>1e3&&console.log("---"),(n=console).log.apply(n,[t.toLocaleTimeString()+Array(Math.max(0,32-e.length)).join(" ")+e+": "].concat((0,a.Z)(Array.from(arguments).slice(1)))),c.lastDebugMsg=t}:function(){},Object.defineProperties(c,{Material:{enumerable:!1,value:function(){function e(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,s.Z)(this,e);var o=this;function a(e,n){var t=d.createShader(e);return d.shaderSource(t,n),d.compileShader(t),d.getShaderParameter(t,d.COMPILE_STATUS)||console.error(d.getShaderInfoLog(t)),c.debug("Material.compileShaderSource",{source:n}),t}function l(e,n){return Object.entries(e).map((function(e){var t=(0,r.Z)(e,2),i=t[0];return t[1].getDeclaration(i,n)})).join("\n")}o.uniforms=i,o.uniformInstances=[];var u="\n              precision highp float;\n            ";o.vertexSource="\n              ".concat(u,"\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ").concat(l(c.commonUniforms,"vertex"),"\n              ").concat(l(i,"vertex"),"\n              ").concat(n,"\n            "),o.Source="\n              ".concat(u,"\n              ").concat(l(c.commonUniforms,"fragment"),"\n              ").concat(l(i,"fragment"),"\n              ").concat(t,"\n            "),o.vertexShader=a(d.VERTEX_SHADER,o.vertexSource),o.fragmentShader=a(d.FRAGMENT_SHADER,o.Source),o.program=d.createProgram(),d.attachShader(o.program,o.vertexShader),d.attachShader(o.program,o.fragmentShader),d.linkProgram(o.program),d.getProgramParameter(o.program,d.LINK_STATUS)||console.error(d.getProgramInfoLog(o.program)),d.useProgram(o.program),o.attachUniforms(void 0,c.commonUniforms),o.attachUniforms(void 0,o.uniforms)}return(0,l.Z)(e,[{key:"attachUniforms",value:function(e,n){var t=this;void 0===e?Object.entries(n).forEach((function(e){var n=(0,r.Z)(e,2),i=n[0],o=n[1];t.attachUniforms(i,o)})):"array"==n.type?n.value.forEach((function(n,i){return t.attachUniforms("".concat(e,"[").concat(i,"]"),n)})):"struct"==n.type?Object.entries(n.value).forEach((function(n){var i=(0,r.Z)(n,2),o=i[0],a=i[1];return t.attachUniforms("".concat(e,".").concat(o),a)})):(c.debug("Material.attachUniforms",{name:e,uniform:n}),t.uniformInstances.push({uniform:n,location:d.getUniformLocation(t.program,e)}))}}]),e}()},Uniform:{enumerable:!1,value:function(){function e(n){(0,s.Z)(this,e),this.type="float",Object.assign(this,n),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}return(0,l.Z)(e,[{key:"update",value:function(e){void 0!==this.value&&d["uniform".concat(this.typeFn)](e,0===this.typeFn.indexOf("Matrix")?this.transpose:this.value,0===this.typeFn.indexOf("Matrix")?this.value:null)}},{key:"getDeclaration",value:function(e,n,t){var i=this;if(i.excludeFrom!==n){if("array"===i.type)return i.value[0].getDeclaration(e,n,i.value.length)+"\nconst int ".concat(e,"_length = ").concat(i.value.length,";");if("struct"===i.type){var o=e.replace("u_","");return o=o.charAt(0).toUpperCase()+o.slice(1),"uniform struct ".concat(o," \n                                  {\n")+Object.entries(i.value).map((function(e){var t=(0,r.Z)(e,2),i=t[0];return t[1].getDeclaration(i,n).replace(/^uniform/,"")})).join("")+"\n} ".concat(e).concat(t>0?"[".concat(t,"]"):"",";")}return"uniform ".concat(i.type," ").concat(e).concat(t>0?"[".concat(t,"]"):"",";")}}}]),e}()},PlaneGeometry:{enumerable:!1,value:function(){function e(n,t,i,o,r){(0,s.Z)(this,e),d.createBuffer(),this.attributes={position:new c.Attribute({target:d.ARRAY_BUFFER,size:3}),uv:new c.Attribute({target:d.ARRAY_BUFFER,size:2}),uvNorm:new c.Attribute({target:d.ARRAY_BUFFER,size:2}),index:new c.Attribute({target:d.ELEMENT_ARRAY_BUFFER,size:3,type:d.UNSIGNED_SHORT})},this.setTopology(i,o),this.setSize(n,t,r)}return(0,l.Z)(e,[{key:"setTopology",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=this;t.xSegCount=e,t.ySegCount=n,t.vertexCount=(t.xSegCount+1)*(t.ySegCount+1),t.quadCount=t.xSegCount*t.ySegCount*2,t.attributes.uv.values=new Float32Array(2*t.vertexCount),t.attributes.uvNorm.values=new Float32Array(2*t.vertexCount),t.attributes.index.values=new Uint16Array(3*t.quadCount);for(var i=0;i<=t.ySegCount;i++)for(var o=0;o<=t.xSegCount;o++){var r=i*(t.xSegCount+1)+o;if(t.attributes.uv.values[2*r]=o/t.xSegCount,t.attributes.uv.values[2*r+1]=1-i/t.ySegCount,t.attributes.uvNorm.values[2*r]=o/t.xSegCount*2-1,t.attributes.uvNorm.values[2*r+1]=1-i/t.ySegCount*2,o<t.xSegCount&&i<t.ySegCount){var a=i*t.xSegCount+o;t.attributes.index.values[6*a]=r,t.attributes.index.values[6*a+1]=r+1+t.xSegCount,t.attributes.index.values[6*a+2]=r+1,t.attributes.index.values[6*a+3]=r+1,t.attributes.index.values[6*a+4]=r+1+t.xSegCount,t.attributes.index.values[6*a+5]=r+2+t.xSegCount}}t.attributes.uv.update(),t.attributes.uvNorm.update(),t.attributes.index.update(),c.debug("Geometry.setTopology",{uv:t.attributes.uv,uvNorm:t.attributes.uvNorm,index:t.attributes.index})}},{key:"setSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"xz",i=this;i.width=e,i.height=n,i.orientation=t,i.attributes.position.values&&i.attributes.position.values.length===3*i.vertexCount||(i.attributes.position.values=new Float32Array(3*i.vertexCount));for(var o=e/-2,r=n/-2,a=e/i.xSegCount,s=n/i.ySegCount,l=0;l<=i.ySegCount;l++)for(var u=r+l*s,d=0;d<=i.xSegCount;d++){var v=o+d*a,h=l*(i.xSegCount+1)+d;i.attributes.position.values[3*h+"xyz".indexOf(t[0])]=v,i.attributes.position.values[3*h+"xyz".indexOf(t[1])]=-u}i.attributes.position.update(),c.debug("Geometry.setSize",{position:i.attributes.position})}}]),e}()},Mesh:{enumerable:!1,value:function(){function e(n,t){(0,s.Z)(this,e);var i=this;i.geometry=n,i.material=t,i.wireframe=!1,i.attributeInstances=[],Object.entries(i.geometry.attributes).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],o=n[1];i.attributeInstances.push({attribute:o,location:o.attach(t,i.material.program)})})),c.meshes.push(i),c.debug("Mesh.constructor",{mesh:i})}return(0,l.Z)(e,[{key:"draw",value:function(){d.useProgram(this.material.program),this.material.uniformInstances.forEach((function(e){var n=e.uniform,t=e.location;return n.update(t)})),this.attributeInstances.forEach((function(e){var n=e.attribute,t=e.location;return n.use(t)})),d.drawElements(this.wireframe?d.LINES:d.TRIANGLES,this.geometry.attributes.index.values.length,d.UNSIGNED_SHORT,0)}},{key:"remove",value:function(){var e=this;c.meshes=c.meshes.filter((function(n){return n!=e}))}}]),e}()},Attribute:{enumerable:!1,value:function(){function e(n){(0,s.Z)(this,e),this.type=d.FLOAT,this.normalized=!1,this.buffer=d.createBuffer(),Object.assign(this,n),this.update()}return(0,l.Z)(e,[{key:"update",value:function(){void 0!==this.values&&(d.bindBuffer(this.target,this.buffer),d.bufferData(this.target,this.values,d.STATIC_DRAW))}},{key:"attach",value:function(e,n){var t=d.getAttribLocation(n,e);return this.target===d.ARRAY_BUFFER&&(d.enableVertexAttribArray(t),d.vertexAttribPointer(t,this.size,this.type,this.normalized,0,0)),t}},{key:"use",value:function(e){d.bindBuffer(this.target,this.buffer),this.target===d.ARRAY_BUFFER&&(d.enableVertexAttribArray(e),d.vertexAttribPointer(e,this.size,this.type,this.normalized,0,0))}}]),e}()}});var v=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];c.commonUniforms={projectionMatrix:new c.Uniform({type:"mat4",value:v}),modelViewMatrix:new c.Uniform({type:"mat4",value:v}),resolution:new c.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new c.Uniform({type:"float",value:1})}}return(0,l.Z)(e,[{key:"setSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:640,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480;this.width=e,this.height=n,this.canvas.width=e,this.canvas.height=n,this.gl.viewport(0,0,e,n),this.commonUniforms.resolution.value=[e,n],this.commonUniforms.aspectRatio.value=e/n,this.debug("MiniGL.setSize",{width:e,height:n})}},{key:"setOrthographicCamera",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-2e3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2e3;this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(i-o),0,e,n,t,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}},{key:"render",value:function(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach((function(e){return e.draw()}))}}]),e}();function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=function(){function e(){var n=this;(0,s.Z)(this,e),v(this,"el",void 0),v(this,"cssVarRetries",0),v(this,"maxCssVarRetries",200),v(this,"angle",0),v(this,"isLoadedClass",!1),v(this,"isScrolling",!1),v(this,"scrollingTimeout",void 0),v(this,"scrollingRefreshDelay",200),v(this,"isIntersecting",!1),v(this,"shaderFiles",void 0),v(this,"vertexShader",void 0),v(this,"sectionColors",void 0),v(this,"computedCanvasStyle",void 0),v(this,"conf",void 0),v(this,"uniforms",void 0),v(this,"t",1253106),v(this,"last",0),v(this,"width",void 0),v(this,"minWidth",1111),v(this,"height",600),v(this,"xSegCount",void 0),v(this,"ySegCount",void 0),v(this,"mesh",void 0),v(this,"material",void 0),v(this,"geometry",void 0),v(this,"minigl",void 0),v(this,"scrollObserver",void 0),v(this,"amp",320),v(this,"seed",5),v(this,"freqX",14e-5),v(this,"freqY",29e-5),v(this,"freqDelta",1e-5),v(this,"activeColors",[1,1,1,1]),v(this,"isMetaKey",!1),v(this,"isGradientLegendVisible",!1),v(this,"isMouseDown",!1),v(this,"handleScroll",(function(){clearTimeout(n.scrollingTimeout),n.scrollingTimeout=setTimeout(n.handleScrollEnd,n.scrollingRefreshDelay),n.isGradientLegendVisible&&n.hideGradientLegend(),n.conf.playing&&(n.isScrolling=!0,n.pause())})),v(this,"handleScrollEnd",(function(){n.isScrolling=!1,n.isIntersecting&&n.play()})),v(this,"resize",(function(){n.width=window.innerWidth,n.minigl.setSize(n.width,n.height),n.minigl.setOrthographicCamera(),n.xSegCount=Math.ceil(n.width*n.conf.density[0]),n.ySegCount=Math.ceil(n.height*n.conf.density[1]),n.mesh.geometry.setTopology(n.xSegCount,n.ySegCount),n.mesh.geometry.setSize(n.width,n.height),n.mesh.material.uniforms.u_shadow_power.value=n.width<600?5:6})),v(this,"handleMouseDown",(function(e){n.isGradientLegendVisible&&(n.isMetaKey=e.metaKey,n.isMouseDown=!0,!1===n.conf.playing&&requestAnimationFrame(n.animate))})),v(this,"handleMouseUp",(function(){n.isMouseDown=!1})),v(this,"animate",(function(e){if(!n.shouldSkipFrame(e)||n.isMouseDown){if(n.t+=Math.min(e-n.last,1e3/15),n.last=e,n.isMouseDown){var t=160;n.isMetaKey&&(t=-160),n.t+=t}n.mesh.material.uniforms.u_time.value=n.t,n.minigl.render()}if(0!==n.last&&n.isStatic)return n.minigl.render(),void n.disconnect();(n.conf.playing||n.isMouseDown)&&requestAnimationFrame(n.animate)})),v(this,"addIsLoadedClass",(function(){!n.isLoadedClass&&(n.isLoadedClass=!0,n.el.classList.add("isLoaded"),setTimeout((function(){n.el.parentElement.classList.add("isLoaded")}),3e3))})),v(this,"pause",(function(){n.conf.playing=!1})),v(this,"play",(function(){requestAnimationFrame(n.animate),n.conf.playing=!0})),v(this,"initGradient",(function(e){return n.el=document.querySelector(e),n.connect(),n}))}return(0,l.Z)(e,[{key:"connect",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var n=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.shaderFiles={vertex:"varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}",noise:"//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}",blend:"//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n\treturn blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n\treturn 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n\treturn (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n\treturn base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n\treturn (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n\treturn blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n\treturn (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n\treturn vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n\treturn (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n\treturn vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n\treturn (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n\treturn vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n\treturn max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n\treturn vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n\t// Note : Same implementation as BlendSubtractf\n\treturn max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendSubtract\n\treturn max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n\t// Note : Same implementation as BlendAddf\n\treturn min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendAdd\n\treturn min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n\treturn blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n\treturn vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}",fragment:"varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}"},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new d(this.el,null,null,!0),requestAnimationFrame((function(){n.el&&(n.computedCanvasStyle=getComputedStyle(n.el),n.waitForCssVars())})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}},{key:"initMaterial",value:function(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:""===this.el.dataset.jsDarkenTop?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(var e=1;e<this.sectionColors.length;e+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[e],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+e/this.sectionColors.length,3+e/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*e}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*e}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*e}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*e})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join("\n\n"),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}},{key:"initMesh",value:function(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}},{key:"shouldSkipFrame",value:function(e){return!!window.document.hidden||!this.conf.playing||parseInt(e,10)%2==0||void 0}},{key:"updateFrequency",value:function(e){this.freqX+=e,this.freqY+=e}},{key:"toggleColor",value:function(e){this.activeColors[e]=0===this.activeColors[e]?1:0}},{key:"showGradientLegend",value:function(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}},{key:"hideGradientLegend",value:function(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}},{key:"init",value:function(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}},{key:"waitForCssVars",value:function(){var e=this;if(this.computedCanvasStyle&&-1!==this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#"))this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame((function(){return e.waitForCssVars()}))}}},{key:"initGradientColors",value:function(){var e=this;this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map((function(n){var t=e.computedCanvasStyle.getPropertyValue(n).trim();if(4===t.length){var i=t.substr(1).split("").map((function(e){return e+e})).join("");t="#".concat(i)}return t&&"0x".concat(t.substr(1))})).filter(Boolean).map(u)}}]),e}()}}]);
//# sourceMappingURL=726.616127e2.chunk.js.map