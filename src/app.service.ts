import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { 
      "operation_code":1
     };
  }
  separateAndFindHighest(inputList) {

    const alphabets = inputList.filter(item => isNaN(item));
    const numbers = inputList.filter(item => !isNaN(item));
    const highestAlphabet = alphabets.reduce((maxChar, currentChar) => {
      return currentChar > maxChar ? currentChar : maxChar;
    }, 'A');
    return {alphabets, highestAlphabet, numbers};
  }
  

  create(b)
  {
    var res = this.separateAndFindHighest(b.data);
    Object.assign(res, {
      "is_success": true,
      "user_id": "john_doe_17091999", "email" : "john@xyz.com",
      "roll_number":"ABCD123"
      })
    return res;
  }
}
