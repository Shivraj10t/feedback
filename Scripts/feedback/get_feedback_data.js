/*import { fetchData, aa } from '../Utities/utilities.js';*/

document.addEventListener('DOMContentLoaded', ready)
function ready() {
    bindFeedBackQuestions();
}


const feedbackQuestions = document.getElementById('feedbackQuestions');
const main = document.getElementById('main');
function bindFeedBackQuestions() {
    fetchData('/UsersFeedback/GET_FEEDBACK_QUESTION')
        .then((data) => {
            let elements = ''
            const resultData = data.Table;

            /*        main.innerHTML = resultData[0].QUESTIONNAME;*/

            resultData.forEach((values, index) => {

                const QUESTIONID = values.QUESTIONID
                const QUESTIONNAME = values.QUESTIONNAME
                const opctions = values.ANS_OPTIONS.split(',')
                const className = 'col-6'
                const name = `Q_${index}`
                elements += ` 
            <div class="${className} border p-4 border-1">
            <label>${QUESTIONID} ${QUESTIONNAME}</label>
            <div class="row">           
                    ${opctions.map((val, i) => {
                    const value = `${i}`
                        const ID = `${name}_rod_${value}`
                    return `<div class="col-6">
                          <input type="radio" id="${ID}" name="${name}" value="${value}" />
                          <label for="${ID}">${val}</label>
                        </div>`

                }).join('')}
                     </div>
            </div>`


            })
            return elements

        }).then((element) => {

            feedbackQuestions.querySelector('.row').insertAdjacentHTML('beforeend', element)

        })
}
