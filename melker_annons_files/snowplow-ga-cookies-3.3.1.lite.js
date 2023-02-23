/*!
 * Attaches GA cookie data to Snowplow events v3.3.1 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

"use strict";!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).snowplowGaCookies={})}(this,(function(e){e.GaCookiesPlugin=function(){return{contexts:function(){var e={schema:"iglu:com.google.analytics/cookies/jsonschema/1-0-0",data:{}};return"__utma __utmb __utmc __utmv __utmz _ga".split(" ").forEach((function(o){var t=function(e,o,t,n,i,u,c){return 1<arguments.length?document.cookie=e+"="+encodeURIComponent(null!=o?o:"")+(t?"; Expires="+new Date(+new Date+1e3*t).toUTCString():"")+(n?"; Path="+n:"")+(i?"; Domain="+i:"")+(u?"; SameSite="+u:"")+(c?"; Secure":""):decodeURIComponent((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])}(o);t&&(e.data[o]=t)})),[e]}}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.min.js.map
