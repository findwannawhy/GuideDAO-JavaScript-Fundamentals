/* Для каждого ряда, полученного в параметре rows, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/

export function renderTableRows(rows) {
  console.log(rows);
  let sumString = "";
  rows.forEach(function (row) {
    sumString += `
    <tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
    </tr>
    `;
  });
  return sumString;
}
