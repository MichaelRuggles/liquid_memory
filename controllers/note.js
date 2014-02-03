/**
 * GET /notes
 * Notes index page.
 */

exports.index = function(req, res) {
  res.render('notes/index', {});
};


/**
 * GET /notes/:note_id
 * Renders a single note page.
 * @param {int} note_id
 */

exports.show = function(req, res, next) {
  
  var note_id = req.params.note_id;
  
  res.render('notes/show', { 
    node_id: note_id
  });
}
