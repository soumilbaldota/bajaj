import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getOpCode() {
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
      "user_id": "vivek_kumar_ 20112001", "email" : "vk6593@srmist.edu.in",
      "roll_number":"RA2011003010070"
      })
    return res;
  }
}
