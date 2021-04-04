var columns = [
  'year_film',
  // 'year_ceremony',
  // 'ceremony',
  'category',
  'name',
  'film',
  'winner',
];

// Create cells for table header row.
var headers = columns.map(column => {
  return `<td>${column}</td>`;
}).join('');

/**
 * Formats a search result object as an HTML page.
 *
 * @param {object} result Search result.
 *
 * @return {string} HTML page for the search result.
 */
function formatSearchResult(result) {
  var table = result.map(val => {
    var row = '<tr>';
    columns.forEach(column => {
      row += `<td>${val[column]}</td>`;
    });
    row += '</tr>';
    return row;
  }).join('');

  var html = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<body>\n' +
    '<h1>Search</h1>' +
    '  <form action="/search" method="GET">\n' +
    '    <label for="fyear">Year of film</label>\n' +
    '    <input type="text" name="year" id="fyear"><br>\n' +
    '    <label for="name">Name of nominee/winner</label>\n' +
    '    <input type="text" name="name" id="name"><br>\n' +
    '    <label for="category">Category</label>' +
    '    <input type="text" name="category" id="category"><br>\n' +
    '    <label for="winner">Show only winners</label>\n' +
    '    <input type="checkbox" name="winner" id="winner"><br>\n' +
    '    <button>Search</button>\n' +
    '  </form>\n' +
    '  <h1>Search Results</h1>\n' +
    `  <table>\n` +
    //`    <tr>${headers}</tr>` +
    `    <tr>` + `<th>Year</th>` + `<th>Category</th>` + `<th>Name</th>` + `<th>Film</th>` + `<th>Winner?</th>` + `</tr>` +
    `    ${table}\n` +
    '  </table>\n' +
    '</body>\n' +
    '</html>';

  return html;
}

module.exports = {
  formatSearchResult,
};