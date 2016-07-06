
var fs = require('fs');
var Q = require('q');
var htmlencode = require('htmlencode');
var path = require('path');

var _counter = 1;
var _currentPage;

module.exports = {
  website: {
    assets: "./assets",
    js: [
      "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3/ace.js",
      "editor.js"
    ]
  },

  hooks: {
    "page:before": function(page) {
      _currentPage = page;
      return page;
    }
  },

  blocks: {
      displayrun: {
        process: function(block) {

          if (this.generator === 'website') {
            var id = 'displayeditor-' + _counter++;
            var config = block.kwargs;
            var display = config.display || 'both';
            var separator = config.separator || '<hr>';
            var height = config.height || '300px';
            var style = config.runStyle || 'border:0';
            var fullPath = path.resolve(path.dirname(_currentPage.rawPath), config.src);

            var settings = {
              readOnly: config.readOnly || false,
              mode: config.language || 'html',
              theme: config.theme || 'chrome',
              id: id,
              maxLines: config.maxLines || 25
            };

            // Read the file
            return Q.nfcall(fs.readFile, fullPath, "utf-8")
              .then(function(data) {

                var run = '<iframe style="' + style + '" src="' + config.src + '" width="100%" height="' + height + '"></iframe>';

                data = htmlencode.htmlEncode(data).replace(/&nbsp;/g, ' ');
                var editor = '<div class="editor" id="' + id + '" data-settings=' + JSON.stringify(settings) + '>' + data + '</div>';

                var output = '';
                if (display === 'editor' || display === 'both'){
                  output += editor;
                }
                if (display === 'both'){
                  output += separator;
                }
                if (display === 'run' || display === 'both'){
                  output += run;
                }

                return output;
              });
          }
          else {
            return '';
          }
        }
      }
  }

};
