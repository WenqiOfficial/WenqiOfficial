/*! instant.page v5.2.0 - (C) 2019-2024 Alexandre Dieulot - https://instant.page/license */
let _chromiumMajorVersionInUserAgent=null,_allowQueryString,_allowExternalLinks,_useWhitelist,_delayOnHover=65,_lastTouchTimestamp,_mouseoverTimer,_preloadedList=new Set;const DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION=1111;function init(){if(document.createElement("link").relList.supports("prefetch")){var o="instantVaryAccept"in document.body.dataset||"Shopify"in window,i=navigator.userAgent.indexOf("Chrome/");if(-1<i&&(_chromiumMajorVersionInUserAgent=parseInt(navigator.userAgent.substring(i+"Chrome/".length))),!(o&&_chromiumMajorVersionInUserAgent&&_chromiumMajorVersionInUserAgent<110)){var a,r,i="instantMousedownShortcut"in document.body.dataset,o=(_allowQueryString="instantAllowQueryString"in document.body.dataset,_allowExternalLinks="instantAllowExternalLinks"in document.body.dataset,_useWhitelist="instantWhitelist"in document.body.dataset,{capture:!0,passive:!0});let e=!1,t=!1,n=!1;if("instantIntensity"in document.body.dataset){const s=document.body.dataset.instantIntensity;s.startsWith("mousedown")?(e=!0,"mousedown-only"==s&&(t=!0)):s.startsWith("viewport")?(r=navigator.connection&&navigator.connection.saveData,a=navigator.connection&&navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"),r||a||("viewport"==s?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(n=!0):"viewport-all"==s&&(n=!0))):(r=parseInt(s),isNaN(r)||(_delayOnHover=r))}if(t||document.addEventListener("touchstart",touchstartListener,o),e?i||document.addEventListener("mousedown",mousedownListener,o):document.addEventListener("mouseover",mouseoverListener,o),i&&document.addEventListener("mousedown",mousedownShortcutListener,o),n){let e=window.requestIdleCallback;(e=e||(e=>{e()}))(function(){const t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e=e.target,t.unobserve(e),preload(e.href))})});document.querySelectorAll("a").forEach(e=>{isPreloadable(e)&&t.observe(e)})},{timeout:1500})}}}}function touchstartListener(e){_lastTouchTimestamp=performance.now();e=e.target.closest("a");isPreloadable(e)&&preload(e.href,"high")}function mouseoverListener(e){if(!(performance.now()-_lastTouchTimestamp<DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)&&"closest"in e.target){const t=e.target.closest("a");isPreloadable(t)&&(t.addEventListener("mouseout",mouseoutListener,{passive:!0}),_mouseoverTimer=setTimeout(()=>{preload(t.href,"high"),_mouseoverTimer=void 0},_delayOnHover))}}function mousedownListener(e){e=e.target.closest("a");isPreloadable(e)&&preload(e.href,"high")}function mouseoutListener(e){e.relatedTarget&&e.target.closest("a")==e.relatedTarget.closest("a")||_mouseoverTimer&&(clearTimeout(_mouseoverTimer),_mouseoverTimer=void 0)}function mousedownShortcutListener(e){if(!(performance.now()-_lastTouchTimestamp<DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)){const t=e.target.closest("a");1<e.which||e.metaKey||e.ctrlKey||t&&(t.addEventListener("click",function(e){1337!=e.detail&&e.preventDefault()},{capture:!0,passive:!1,once:!0}),e=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337}),t.dispatchEvent(e))}}function isPreloadable(e){if(e&&e.href&&(!_useWhitelist||"instant"in e.dataset)){if(e.origin!=location.origin)if(!(_allowExternalLinks||"instant"in e.dataset)||!_chromiumMajorVersionInUserAgent)return;if(["http:","https:"].includes(e.protocol)&&("http:"!=e.protocol||"https:"!=location.protocol)&&(_allowQueryString||!e.search||"instant"in e.dataset)&&!(e.hash&&e.pathname+e.search==location.pathname+location.search||"noInstant"in e.dataset))return!0}}function preload(e,t="auto"){if(!_preloadedList.has(e)){const n=document.createElement("link");n.rel="prefetch",n.href=e,n.fetchPriority=t,n.as="document",document.head.appendChild(n),_preloadedList.add(e)}}init();