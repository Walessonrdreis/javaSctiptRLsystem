



A expressão `${}` é uma parte dos chamados *template literals* (ou strings de modelo) em JavaScript. Essa sintaxe permite que você insira expressões JavaScript diretamente dentro de strings.

Ao usar *template literals*, o código fica mais limpo e legível do que quando se utiliza a concatenação tradicional com o operador `+`.

**Método replace**

O método `replace` é uma função de string em JavaScript que é usada para substituir uma parte de uma string por outra. A sintaxe básica é a seguinte:

```javascript
string.replace(substringOuExpressaoRegular, novaSubstringOuFuncao);
```

- `substringOuExpressaoRegular`: O trecho da string que você deseja substituir, ou uma expressão regular que corresponde ao trecho a ser substituído.
  
- `novaSubstringOuFuncao`: A nova substring que substituirá a parte da string correspondente ou uma função que retorna a nova substring.


**Método toLocaleString**

O método `toLocaleString` em JavaScript é utilizado para formatar números, datas e horas de acordo com as configurações regionais do usuário. Ele retorna uma string representando o valor formatado com base nas opções fornecidas ou nas configurações do ambiente.

A sintaxe básica para o método `toLocaleString` aplicado a números é a seguinte:

```javascript
number.toLocaleString([locales[, options]]);
```

- `number`: O número a ser formatado.

- `locales` (opcional): Uma string com um ou mais identificadores de localidade, ou um array de strings de identificadores de localidade, indicando as localidades cujas convenções de formatação devem ser usadas.

- `options` (opcional): Um objeto com opções de formatação, permitindo maior controle sobre o formato. Por exemplo, você pode definir o número mínimo de casas decimais (`minimumFractionDigits`) e o número máximo de casas decimais (`maximumFractionDigits`).

Aqui está um exemplo de uso do `toLocaleString` para formatar um número em JavaScript:

```javascript
const numero = 1234567.89;
const numeroFormatado = numero.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log(numeroFormatado); // Saída: 1.234.567,89
```

Neste exemplo:

- `'pt-BR'` é o identificador de localidade para o Brasil, indicando que queremos usar as convenções de formatação brasileiras.

- `{ minimumFractionDigits: 2, maximumFractionDigits: 2 }` são opções que definem que queremos exatamente 2 casas decimais no resultado final.

O método `toLocaleString` é especialmente útil ao lidar com valores que serão apresentados a usuários, pois adapta automaticamente a formatação conforme as configurações de idioma e região do usuário.

