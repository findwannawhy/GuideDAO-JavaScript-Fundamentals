/* На основе объекта details, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/

export function renderTableRow(details) {
  console.log(details);
  return `<tr>
      <td>${details.title}</td>
      <td>${details.price}</td>
    </tr>`;
}
