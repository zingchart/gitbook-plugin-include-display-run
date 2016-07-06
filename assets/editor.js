require(["gitbook"], function(gitbook) {

  function initEditor(a,b) {
    var blocks = document.getElementsByClassName('editor');
    for (var i=0;i<blocks.length;i++){
      var block = blocks[i];
      var settings = JSON.parse(block.dataset.settings);

      var editor = ace.edit(settings.id);
      editor.setTheme('ace/theme/' + settings.theme );
      editor.getSession().setMode('ace/mode/' + settings.mode);
      editor.setReadOnly(settings.readOnly);
      editor.setOption('maxLines', settings.maxLines)
    }
  }

  gitbook.events.bind("page.change", initEditor);
});
