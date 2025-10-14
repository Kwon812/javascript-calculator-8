import InputView from "./InputView.js";
import Calculator from "./Calculator.js";
import OutputView from "./outputView.js";
import StrParser from "./StrParser.js";

class App {
  constructor() {
    this.inputView=new InputView();
    this.outputView=new OutputView();
  }
  async run() {
    const userStrRaw=await this.inputView.askAddString()
    const parsedNumber=StrParser.parse(userStrRaw)
    const calculator=new Calculator(parsedNumber);
    const result=calculator.getAdd()
    this.outputView.printAddResult(result)
  }
}

export default App;
