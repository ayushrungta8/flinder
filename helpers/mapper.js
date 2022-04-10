// This is for preprocessing of the information
//this file will take list of string -> convert into json objects

import { Questions} from '../pages/Components/Question'

export function mapper(answers){
    let length = answers.length;
    let result = {}
    for(let i=0;i<length;i++){
        if(Questions[i].question.id=="parties"){
            result[Questions[i].question.id] = parseInt(answers[i]);
            continue;
        }
        result[Questions[i].question.id] =answers[i]
    }
    result.hygiene = 5;
    return result
}