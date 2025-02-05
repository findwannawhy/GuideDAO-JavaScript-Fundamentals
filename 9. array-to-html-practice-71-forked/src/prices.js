/* На основе параметра rows, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/

export function renderTableRows(rows) {
  console.log(rows);
  let html = "";
  rows.forEach((row) => {
    html += `<tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
    </tr>`;
  });
  return html;
}
