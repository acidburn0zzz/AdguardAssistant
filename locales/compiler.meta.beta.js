// ==UserScript==
// @name Adguard Assistant Beta
// @name:ru Помощник Adguard Beta
// @name:uk Помічник Adguard Beta
// @name:pl Asystent Adguarda Beta
// @name:de Adguard-Assistent Beta
// @name:zh 使用 Adguard 助手 Beta
// @name:he העוזר האישי של אדגארד Beta
// @name:it Assistente Adguard Beta
// @name:fa دستیار اَدگارد Beta
// @name:sr Koristi Adguard-ovog pomoćnika Beta
// @name:es Asistente de Adguard Beta
// @name:id Asisten Aguard Beta
// @name:tr Adguard Assistant Beta
// @name:ja AdGuardアシスタント Beta
// @name:es Adguard Assistant Beta
// @name:pt AdGuard Assistente Beta
// @name:ar Adguardمساعد Beta
// @name:ko AdGuard 도우미 Beta
// @namespace Adguard
// @description Provides easy and convenient way to manage filtering right from the browser
// @description:ru Позволяет легко и быстро управлять фильтрацией прямо из браузера
// @description:uk Забезпечує легкий і зручний спосіб керування фільтрацією прямо з веб-переглядача
// @description:pl Zapewnia łatwy i wygodny sposób na zarządzanie filtrowaniem bezpośrednio z przeglądarki
// @description:de Bietet einen einfachen und nützlichen Weg die Filterung direkt im Browser zu verwalten
// @description:zh 提供简单方便的方法来管理浏览器筛选
// @description:he מספק דרך קלה ונוחה לנהל סינון תקין ישירות מהדפדפן
// @description:it Fornisce un modo facile e comodo per gestire il filtraggio direttamente dal browser
// @description:fa روش راحت و آسان برای مدیریت فیلترینگ مستیق از داخل مرورگر.
// @description:sr Pruža lak i zgodan način za upravljanje filtriranjem direktno iz pregledača.
// @description:es Permite fácilmente gestionar los filtros desde el navegador
// @description:id Menyediakan cara mudah dan nyaman untuk mengelola penyaringan langsung dari peramban
// @description:tr Filtrelemeyi, tarayıcıdan doğrudan kolayca yönetmenizi sağlar.
// @description:ja ブラウザから簡単にフィルタリングを管理する便利な機能を提供します。
// @description:es Proporciona una forma fácil y cómoda de manejar el filtrado desde el navegador
// @description:pt Fornece uma maneira fácil e conveniente de gerenciar a filtragem diretamente do seu navegador
// @description:ar يوفر طريقه سهله ومريحه لأداره التصفية الحقيقة من المتصفح
// @description:ko 브라우저에서 바로 필터링 관리를 쉽고 간편하게 할 수 있도록 도와줍니다.
// @version 4.0.15
// @downloadURL https://cdn.adguard.com/public/Userscripts/Beta/AdguardAssistant/4.0/assistant.user.js
// @updateURL https://cdn.adguard.com/public/Userscripts/Beta/AdguardAssistant/4.0/assistant.meta.js
// @include *
// @exclude *://mil.ru/*
// @exclude *://feedly.com/*
// @exclude *wikipedia.org*
// @exclude *icloud.com*
// @exclude *hangouts.google.com*
// @exclude *www.facebook.com/plugins/сomments*
// @exclude *www.facebook.com/v2.9/plugins*
// @exclude *disqus.com/embed/comments*
// @exclude *vk.com/widget*
// @exclude *twitter.com/intent/*
// @exclude *www.youtube.com/embed/*
// @exclude *player.vimeo.com*
// @exclude *coub.com/embed*
// @exclude *staticxx.facebook.com/connect/xd_arbiter/*
// @exclude *vk.com/q_frame*
// @exclude *tpc.googlesyndication.com*
// @exclude *syndication.twitter.com*
// @exclude *platform.twitter.com*
// @require src\utils\css.escape.js
// @require src\ioc.js
// @require src\log.js
// @require src\balalaika.patched.js
// @require src\settings.js
// @require src\utils\ui-utils.js
// @require src\utils\common-utils.js
// @require src\utils\punycode.js
// @require src\event.js
// @require src\selector\diff_match_patch.js
// @require src\selector\dom.patched.js
// @require src\selector\adguard-selector.js
// @require src\adguard-rules-constructor.js
// @require src\iframe.js
// @require src\gm.js
// @require src\slider-widget.js
// @require src\wot.js
// @require src\_locales\ru.js
// @require src\_locales\en.js
// @require src\_locales\fa.js
// @require src\_locales\he.js
// @require src\_locales\it.js
// @require src\_locales\pl.js
// @require src\_locales\uk.js
// @require src\_locales\zh.js
// @require src\_locales\de.js
// @require src\_locales\tr.js
// @require src\_locales\ja.js
// @require src\_locales\ar.js
// @require src\_locales\es-419.js
// @require src\_locales\pt-BR.js
// @require src\_locales\ko.js
// @require src\localization.js
// @require src\controllers\mainMenuController.js
// @require src\controllers\selectorMenuController.js
// @require src\controllers\sliderMenuController.js
// @require src\controllers\blockPreviewController.js
// @require src\controllers\settingsMenuController.js
// @require src\button.js
// @require src\main.js
// @resource button.css src\styles\button.css
// @resource selector.css src\styles\selector.css
// @resource button.html    src\templates\button.html
// @resource style.css  src\styles\style.css
// @resource mainMenu.html src\templates\mainMenu.html
// @resource selectorMenu.html src\templates\selectorMenu.html
// @resource sliderMenu.html src\templates\sliderMenu.html
// @resource blockPreview.html src\templates\blockPreview.html
// @resource settingsMenu.html src\templates\settingsMenu.html
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_getResourceText
// @grant   GM_addStyle
// @grant   property:settings
// ==/UserScript==
