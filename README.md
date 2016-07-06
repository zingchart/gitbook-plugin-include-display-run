
GitBook Plugin to display and run included files.
==============

### 1. You can use install it via **NPM** and save it to package.json:
```
$ npm install gitbook-plugin-include-display-run --save
```
### 2. Add the plugin to `book.json` config
```
{
    "plugins": [ "include-display-run"]
}
```

### 3. Include displayrun block in your markdown files.
```
{% displayrun src='../HTML/4Elements/forms/select.html' %}
{% enddisplayrun %}
```

```
{% displayrun   src='../HTML/4Elements/forms/input.html', display='editor',
                language='javascript', readOnly='true', theme='github' %}
{% enddisplayrun %}
```

```
{% displayrun src='../HTML/4Elements/forms/meter.html', display='run' %}
{% enddisplayrun %}
```

#### General Attributes

* `src` *required* - The relative path to the file that will be displayed in the editor and run in page.
* `display` *optional* - Indicates how the code is included in the page.  Options are: `['both', 'editor', 'run']`
	* default: `both`
* `separator` *optional* - Any text/HTML that should be used between the editor and the executed code if the `display` option is set to `both`
	* default: `<hr>`

#### Editor Attributes

We are using an ACE editor for the editor.  We currently support the following attributes.
* `language` *optional* - Sets the programming language mode to be used in the syntax highlighter.  The full list of supported languages can be found in the [Ace Editor Repository](https://github.com/ajaxorg/ace-builds/tree/master/src-min-noconflict).
    * default: `html`
* `theme` *optional* - Sets the Ace Editor Theme.  The full list of supported themes can be found in the [Ace Editor Repository](https://github.com/ajaxorg/ace/tree/master/lib/ace/theme).
    * default: `chrome`
* `readOnly` *optional* - If set to `true`, the editor will not be editable.
    * default: `false`
* `maxLines` *optional* - Sets the maximum number of lines that will be visible in the editor.
    * default: 25

#### Executed Code Attributes

The executed code displays in an iframe in order to preserve any items in the `<head>` that may be necessary for the example.
* `height` *optional* - Sets the height of the iframe
    * default: 300
* `runStyle` *optional* - Sets the style of the iframe element
    * default: `border:0`

---
# License

MIT License

&copy; 2016 ZingChart, Inc.