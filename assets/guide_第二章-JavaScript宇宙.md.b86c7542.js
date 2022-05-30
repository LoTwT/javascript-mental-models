import{_ as a,c as n,o as s,a as e}from"./app.c931d240.js";const g='{"title":"JavaScript\u5B87\u5B99","description":"","frontmatter":{},"headers":[{"level":2,"title":"Values and Code","slug":"values-and-code"},{"level":2,"title":"Values","slug":"values"},{"level":2,"title":"Types of Values","slug":"types-of-values"},{"level":3,"title":"Primitive Values(\u539F\u59CB\u503C)","slug":"primitive-values-\u539F\u59CB\u503C"},{"level":3,"title":"Object and Functions(\u5BF9\u8C61\u548C\u51FD\u6570)","slug":"object-and-functions-\u5BF9\u8C61\u548C\u51FD\u6570"},{"level":3,"title":"No Other Types\uFF08\u6CA1\u6709\u5176\u4ED6\u7C7B\u578B\uFF09","slug":"no-other-types\uFF08\u6CA1\u6709\u5176\u4ED6\u7C7B\u578B\uFF09"},{"level":2,"title":"Expressions","slug":"expressions"}],"relativePath":"guide/\u7B2C\u4E8C\u7AE0-JavaScript\u5B87\u5B99.md","lastUpdated":1647762686000}',t={},l=e(`<h1 id="javascript\u5B87\u5B99" tabindex="-1">JavaScript\u5B87\u5B99 <a class="header-anchor" href="#javascript\u5B87\u5B99" aria-hidden="true">#</a></h1><h2 id="values-and-code" tabindex="-1">Values and Code <a class="header-anchor" href="#values-and-code" aria-hidden="true">#</a></h2><blockquote><p>\u867D\u7136\u6211\u4EEC\u7684\u503C\u548C\u6211\u4EEC\u7684\u4EE3\u7801\u4EA4\u4E92\uFF0C\u4F46\u503C\u662F\u5B58\u5728\u4E8E\u5B8C\u5168\u72EC\u7ACB\u7684\u7A7A\u95F4\u4E2D</p></blockquote><ul><li>\u503C\u4E0D\u5B58\u5728\u4E8E\u6211\u4EEC\u7684\u4EE3\u7801\u4E2D</li><li>\u6211\u4EEC\u7684\u4EE3\u7801\u4E2D\u4E0D\u5305\u62EC\u503C\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u53EA\u662F\u4E00\u5806\u6307\u4EE4\uFF0C\u6709<code>if</code>\u8BED\u53E5\u3001\u53D8\u91CF\u58F0\u660E\u3001\u9017\u53F7\u548C\u82B1\u62EC\u53F7\u3002</li></ul><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1gzj29cdlsuj20s40i2gmu.jpg" alt="image-20220219194800337" style="zoom:50%;"><p>\u53EF\u4EE5\u60F3\u8C61\u4E00\u4E0B\u6211\u4EEC\u662F\u4E00\u4E2A\u5C0F\u4EBA\u7AD9\u5728\u5730\u7403\u4E0A\uFF0C\u624B\u91CC\u62FF\u7740\u8981\u6267\u884C\u7684code\uFF0C\u4E0A\u9762\u6709\u4E00\u6761\u6761\u6307\u4EE4\uFF0C\u503C\u5B58\u5728\u4E8E\u79BB\u6211\u4EEC\u6BD4\u8F83\u8FDC\u7684\u661F\u7403\u4E0A<code>boolean </code>\u3001<code>number</code>\u3001<code>string</code>\u3001<code>symbol</code>\u3001<code>null</code>\u3001<code>undifined</code>\u3001<code>object</code>\u3001<code>function</code></p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1gzj28oyn9pj20uu0u0gnw.jpg" alt="image-20220219194727606" style="zoom:50%;"><h2 id="values" tabindex="-1">Values <a class="header-anchor" href="#values" aria-hidden="true">#</a></h2><p>\u6982\u62EC\u7684\u8BF4\uFF0C\u503C\u6709\u4E24\u79CD\u7C7B\u578B</p><ul><li>\u539F\u59CB\u7C7B\u578B <ul><li>\u539F\u59CB\u7684\u4EF7\u503C\u89C2\u5C31\u50CF\u661F\u661F\u2014\u2014\u51B0\u51B7\u800C\u9065\u8FDC\uFF0C\u4F46\u5F53\u6211\u9700\u8981\u5B83\u4EEC\u65F6\uFF0C\u5B83\u4EEC\u603B\u662F\u5728\u90A3\u91CC\u3002</li><li>\u5373\u4F7F\u5728\u6211\u8FD9\u9897\u5C0F\u884C\u661F\u7684\u8868\u9762\uFF0C\u6211\u4E5F\u80FD\u627E\u5230\u5B83\u4EEC\uFF0C\u5E76\u6307\u51FA\u5B83\u4EEC\u3002</li><li>\u5B83\u4EEC\u53EF\u4EE5\u662F\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u7B49\u3002\u6240\u6709\u539F\u59CB\u503C\u90FD\u6709\u4E00\u4E2A\u5171\u540C\u70B9:\u5B83\u4EEC\u662FJavaScript\u4E16\u754C\u7684\u6C38\u4E45\u7EC4\u6210\u90E8\u5206\u3002\u6211\u53EF\u4EE5\u6307\u51FA\u5B83\u4EEC\uFF0C\u4F46\u6211\u4E0D\u80FD\u521B\u9020\u3001\u7834\u574F\u6216\u6539\u53D8\u5B83\u4EEC</li></ul></li></ul><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u5BF9\u8C61\u548C\u51FD\u6570 <ul><li>\u5BF9\u8C61\u548C\u51FD\u6570\u4E5F\u662F\u503C\uFF0C\u4F46\u4E0E\u539F\u59CB\u503C\u4E0D\u540C\u7684\u662F\uFF0C\u6211\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u64CD\u4F5C\u5B83\u4EEC\u3002</li><li>\u5982\u679C\u539F\u59CB\u503C\u5C31\u50CF\u9065\u8FDC\u7684\u6052\u661F\uFF0C\u90A3\u4E48\u5BF9\u8C61\u548C\u51FD\u6570\u5C31\u66F4\u50CF\u6F02\u6D6E\u5728\u6211\u7684\u884C\u661F\u5468\u56F4\u7684\u5C0F\u884C\u661F\u3002\u5B83\u4EEC\u4E0D\u662F\u6211\u4EE3\u7801\u7684\u4E00\u90E8\u5206\uFF0C\u4F46\u5B83\u4EEC\u79BB\u6211\u5F88\u8FD1\uFF0C\u53EF\u4EE5\u64CD\u7EB5</li></ul></li></ul><h2 id="types-of-values" tabindex="-1">Types of Values <a class="header-anchor" href="#types-of-values" aria-hidden="true">#</a></h2><blockquote><p>JavaScript\u7684\u503C\u67099\u79CD\u7C7B\u578B</p></blockquote><h3 id="primitive-values-\u539F\u59CB\u503C" tabindex="-1">Primitive Values(\u539F\u59CB\u503C) <a class="header-anchor" href="#primitive-values-\u539F\u59CB\u503C" aria-hidden="true">#</a></h3><ul><li>Undefined <ul><li>\u7528\u4E8E\u65E0\u610F\u4E2D\u4E22\u5931\u7684\u503C</li></ul></li><li>Null <ul><li>\u7528\u4E8E\u6545\u610F\u4E22\u5931\u503C</li></ul></li><li>Booleans <ul><li>(true\u548Cfalse)\uFF0C\u7528\u4E8E\u903B\u8F91\u8FD0\u7B97\u3002</li></ul></li><li>Numbers <ul><li>(-100, 3.14,\u7B49\u7B49)\uFF0C\u7528\u4E8E\u6570\u5B66\u8BA1\u7B97\u3002</li></ul></li><li>BigInts <ul><li>(\u7F55\u89C1\u4E14\u65B0\u9896)\uFF0C\u7528\u4E8E\u5927\u6570\u5B57\u7684\u6570\u5B66\u3002</li></ul></li><li>String <ul><li>(\u201Chello\u201D\uFF0C\u201Cabracadabra\u201D\u7B49)\uFF0C\u7528\u4E8E\u6587\u672C\u3002</li></ul></li><li>Symbols <ul><li>(\u4E0D\u5E38\u89C1)\uFF0C\u7528\u4E8E\u4E3E\u884C\u4EEA\u5F0F\u548C\u9690\u85CF\u79D8\u5BC6\u3002</li></ul></li></ul><h3 id="object-and-functions-\u5BF9\u8C61\u548C\u51FD\u6570" tabindex="-1">Object and Functions(\u5BF9\u8C61\u548C\u51FD\u6570) <a class="header-anchor" href="#object-and-functions-\u5BF9\u8C61\u548C\u51FD\u6570" aria-hidden="true">#</a></h3><ul><li>Object({}\u548C\u5176\u4ED6)\uFF0C\u7528\u4E8E\u5BF9\u76F8\u5173\u6570\u636E\u548C\u4EE3\u7801\u8FDB\u884C\u5206\u7EC4\u3002</li><li>Functions(x =&gt; x * 2 \u548C\u5176\u4ED6)\uFF0C\u7528\u4E8E\u5F15\u7528\u4EE3\u7801\u3002</li></ul><h3 id="no-other-types\uFF08\u6CA1\u6709\u5176\u4ED6\u7C7B\u578B\uFF09" tabindex="-1">No Other Types\uFF08\u6CA1\u6709\u5176\u4ED6\u7C7B\u578B\uFF09 <a class="header-anchor" href="#no-other-types\uFF08\u6CA1\u6709\u5176\u4ED6\u7C7B\u578B\uFF09" aria-hidden="true">#</a></h3><p>\u5728JavaScript\u4E2D\uFF0C\u9664\u4E86\u6211\u4EEC\u521A\u521A\u5217\u4E3E\u7684\u90A3\u4E9B\u4E4B\u5916\uFF0C\u6CA1\u6709\u5176\u4ED6\u7684\u57FA\u672C\u503C\u7C7B\u578B\u3002</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(hello|goodbye)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
</code></pre></div><p>\u26A0\uFE0F \u4F60\u53EF\u80FD\u542C\u8BF4\u8FC7everything \u90FD\u662F\u5BF9\u8C61\u3002\u8FD9\u662F\u4E00\u4E2A\u6D41\u884C\u7684\u90FD\u5E02\u4F20\u8BF4\uFF0C\u4F46\u5B83\u4E0D\u662F\u771F\u7684\u3002</p><p>\u867D\u7136\u50CF\u201Chi\u201D. touppercase()\u8FD9\u6837\u7684\u4EE3\u7801\u4F7F\u201Chi\u201D\u770B\u8D77\u6765\u50CF\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F46\u8FD9\u53EA\u662F\u4E00\u79CD\u9519\u89C9\u3002\u5F53\u60A8\u8FD9\u6837\u505A\u65F6\uFF0CJavaScript\u4F1A\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u5BF9\u8C61\uFF0C\u7136\u540E\u7ACB\u5373\u4E22\u5F03\u5B83\u3002\u5982\u679C\u8FD9\u4E2A\u673A\u5236\u8FD8\u4E0D\u9002\u5408\u4F60\uFF0C\u90A3\u4E5F\u6CA1\u5173\u7CFB\u3002\u8FD9\u786E\u5B9E\u76F8\u5F53\u4EE4\u4EBA\u56F0\u60D1! \u73B0\u5728\uFF0C\u60A8\u53EA\u9700\u8981\u8BB0\u4F4F\u539F\u59CB\u503C(\u5982\u6570\u5B57\u548C\u5B57\u7B26\u4E32)\u4E0D\u662F\u5BF9\u8C61\u3002</p><h2 id="expressions" tabindex="-1">Expressions <a class="header-anchor" href="#expressions" aria-hidden="true">#</a></h2><blockquote><p>\u6709\u5F88\u591A\u95EE\u9898JavaScript\u65E0\u6CD5\u56DE\u7B54\u3002\u4F46\u662FJavaScript\u5F88\u4E50\u610F\u56DE\u7B54\u4E00\u4E9B\u95EE\u9898\u3002\u8FD9\u4E9B\u95EE\u9898\u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u540D\u79F0\uFF0C\u5B83\u4EEC\u88AB\u79F0\u4E3A\u8868\u8FBE\u5F0F\u3002</p></blockquote><p>\u8868\u8FBE\u5F0F\u662FJavaScript\u53EF\u4EE5\u56DE\u7B54\u7684\u95EE\u9898\u3002JavaScript\u7528\u5B83\u77E5\u9053\u7684\u552F\u4E00\u65B9\u5F0F\u6765\u56DE\u7B54\u8868\u8FBE\u5F0F\u2014\u2014\u7528\u503C\u3002</p><p>\u603B\u4E4B\u8BB0\u4F4F\u4E00\u53E5\u8BDD\uFF1A<strong>Expressions always result in a single value.</strong></p><h1 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h1><ul><li>\u5728JS\u4E16\u754C\u4E2D\u6709\u503C\u4E5F\u6709code\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u4E0D\u540C\u7684\u503C\u60AC\u6D6E\u5728JS\u7684\u5B87\u5B99\u4E2D\uFF0C\u5B83\u4EEC\u4E0D\u5B58\u5728\u4E8E\u6211\u4EEC\u7684\u4EE3\u7801\u4E2D\uFF0C\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u5F15\u7528\u5B83\u4EEC\u3002</li><li>\u503C\u6709\u4E24\u79CD\u5206\u7C7B\uFF0C\u4E00\u79CD\u662F\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u4E00\u79CD\u662F\u5BF9\u8C61\u548C\u65B9\u6CD5\u7684\u503C\uFF0C\u603B\u5171\u6709\u4E5D\u79CD\u4E0D\u540C\u7684\u7C7B\u578B\u3002\u6BCF\u79CD\u7C7B\u578B\u90FD\u6709\u7279\u5B9A\u7684\u7528\u9014\uFF0C\u4F46\u6709\u4E9B\u5F88\u5C11\u4F7F\u7528\u3002</li><li>\u6709\u4E9B\u503C\u662F\u5B64\u72EC\u7684\uFF0C\u6BD4\u5982<code>null</code>\u662FNull\u7C7B\u578B\u7684\uFF0C<code>undefined</code>\u662FUndefined\u7C7B\u578B\u7684\uFF0C\u6211\u4EEC\u5C06\u5728\u540E\u9762\u4E86\u89E3\u5230\uFF0C\u8FD9\u4E24\u4E2A\u5B64\u72EC\u7684\u503C\u662F\u5F88\u591A\u9519\u8BEF\u7684\u5236\u9020\u8005!</li><li>\u6211\u4EEC\u53EF\u4EE5\u5411JS\u5B87\u5B99\u8BE2\u95EE\u8868\u8FBE\u5F0F\uFF0C\u8868\u8FBE\u5F0F\u603B\u662F\u8868\u793A\u4E00\u4E2A\u503C</li><li>\u6211\u4EEC\u53EF\u4EE5\u7528<code>typeof</code>\u6765\u5F97\u5230\u503C\u7684\u7C7B\u578B</li></ul>`,29),o=[l];function i(c,p,u,d,r,h){return s(),n("div",null,o)}var v=a(t,[["render",i]]);export{g as __pageData,v as default};
