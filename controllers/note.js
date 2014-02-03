/**
 * GET /notes
 * Notes index page.
 */

exports.index = function(req, res) {
  res.render('notes/index', {});
};
