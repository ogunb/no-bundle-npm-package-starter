## Classes

<dl>
<dt><a href="#Walkthrough">Walkthrough</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#colors">colors</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#formatPrice">formatPrice(price)</a></dt>
<dd><p>Returns formatted price in double.
It&#39;ll use Intl.NumberFormat function when available with <code>&#39;tr-TR&#39;, { minimumFractionDigits: 2 }</code> params.
Or else it will return .toFixed(2) of the given number.</p>
</dd>
<dt><a href="#upperCase">upperCase(string)</a></dt>
<dd><p>Returns uppercased string.
It&#39;ll use String.prototype.toLocaleUpperCase to regard Turkish letters when available.
Or else it will just return with String.prototype.toUpperCase</p>
</dd>
<dt><a href="#formatDate">formatDate(date, options)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#setDocumentTitle">setDocumentTitle(title)</a></dt>
<dd><p>Update document title with given argument.</p>
</dd>
<dt><a href="#animateTitle">animateTitle(options)</a></dt>
<dd><p>Animates document title with current and given title with given interval.</p>
</dd>
<dt><a href="#setBodyOverflow">setBodyOverflow(overflow)</a></dt>
<dd><p>Update document body overflow-y with given argument.</p>
</dd>
<dt><a href="#isDocumentInForeground">isDocumentInForeground(callback)</a></dt>
<dd><p>Check whether the user is actively viewing the page or it&#39;s in the background.</p>
</dd>
</dl>

<a name="Walkthrough"></a>

## Walkthrough
**Kind**: global class  
<a name="new_Walkthrough_new"></a>

### new exports.Walkthrough()
Vue2 plugin
https://shepherdjs.dev/docs/

<a name="colors"></a>

## colors : <code>object</code>
**Kind**: global namespace  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Colors | <code>object</code> | colors available |

<a name="formatPrice"></a>

## formatPrice(price)
Returns formatted price in double.
It'll use Intl.NumberFormat function when available with `'tr-TR', { minimumFractionDigits: 2 }` params.
Or else it will return .toFixed(2) of the given number.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| price | <code>number</code> | It can be float or int. |

<a name="upperCase"></a>

## upperCase(string)
Returns uppercased string.
It'll use String.prototype.toLocaleUpperCase to regard Turkish letters when available.
Or else it will just return with String.prototype.toUpperCase

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Any string |

<a name="formatDate"></a>

## formatDate(date, options) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - Formatted date as string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| date | <code>string</code> \| <code>number</code> \| <code>Date</code> |  | Date to be formatted. |
| options | <code>Object</code> |  |  |
| options.format | <code>string</code> | <code>&quot;&#x27;DD&quot;</code> | MMMM YYYY HH:mm' - Format. |

<a name="setDocumentTitle"></a>

## setDocumentTitle(title)
Update document title with given argument.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | New document title |

<a name="animateTitle"></a>

## animateTitle(options)
Animates document title with current and given title with given interval.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  |  |
| options.newTitle | <code>string</code> |  | Second title to display intervals. |
| options.intervalTimer | <code>number</code> | <code>2000</code> | Interval in milliseconds. |
| options.duration | <code>number</code> |  | How long should animation take place. |

<a name="setBodyOverflow"></a>

## setBodyOverflow(overflow)
Update document body overflow-y with given argument.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| overflow | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | New overflow |

<a name="isDocumentInForeground"></a>

## isDocumentInForeground(callback)
Check whether the user is actively viewing the page or it's in the background.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Called when the document was in the background and returns to foreground. |

