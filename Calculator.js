import React from "react";

const Calculator = () => {
  return (
    <div>
      {" "}
      <table class="blueTable">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colspan="5">&nbsp;</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td id="one" onclick="clickOne()">
              <center>1</center>
            </td>
            <td id="two" onclick="clickTwo()">
              <center>2</center>
            </td>
            <td id="three" onclick="clickThree()">
              <center>3</center>
            </td>
            <td id="add" onclick="add()">
              <center>+</center>
            </td>
            <td id="subtract" onclick="subtract()">
              <center>-</center>
            </td>
          </tr>
          <tr>
            <td id="four" onclick="clickFour()">
              <center>4</center>
            </td>
            <td id="five" onclick="clickFive()">
              <center>5</center>
            </td>
            <td id="six" onclick="clickSix()">
              <center>6</center>
            </td>
            <td id="multiply" onclick="multiply()">
              <center>x</center>
            </td>
            <td id="divide" onclick="divide()">
              <center>
                <strong>&divide;</strong>
              </center>
            </td>
          </tr>
          <tr>
            <td id="seven" onclick="clickSeven()">
              <center>7</center>
            </td>
            <td id="eight" onclick="clickEight()">
              <center>8</center>
            </td>
            <td id="nine" onclick="clickNine()">
              <center>9</center>
            </td>
            <td id="decimal" onclick="decimal()">
              <center>
                <strong>.</strong>
              </center>
            </td>
            <td id="positive_negative">
              <center>+/-</center>
            </td>
          </tr>
          <tr>
            <td id="clear" onclick="clickClear()">
              <center>
                <strong>C</strong>
              </center>
            </td>
            <td id="zero" onclick="clickZero()">
              <center>0</center>
            </td>
            <td id="backspace" onclick="backspace()">
              <center>
                <strong>&larr;</strong>
              </center>
            </td>
            <td>&nbsp;</td>
            <td id="enter" onclick="safeEquationEval(equation.join(''))">
              <center>Enter</center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
