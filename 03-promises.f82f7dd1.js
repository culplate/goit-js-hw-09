!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector(".form");function a(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form button[type=submit]").addEventListener("click",(function(n){n.preventDefault();var t=new FormData(u),o=Object.fromEntries(t.entries()),r=o.delay,f=o.step,c=o.amount,l=+r,d=+f,s=+c;if(""===c)return void e(i).Notify.warning("Amount field cannot be empty");for(var p=1;p<=s;p++)a(p,l).then((function(n){var t=n.position,o=n.delay;return e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;return e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),l+=d,p===s&&setTimeout((function(){return e(i).Notify.info("Hello, whoever is here :)")}),l)}))}();
//# sourceMappingURL=03-promises.f82f7dd1.js.map