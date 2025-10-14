import {Console} from '@woowacourse/mission-utils'

export default class InputView{




    async askAddString(){
        return await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    }
}