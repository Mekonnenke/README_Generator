


const inquirer  = require('inquirer');
const fs =require ('fs');
const util = request

const generateMarkDown = requeire('./js/generateMarkDown')

const question = [{

       type: 'input',
       name:'Title',
       message: 'What is the title of this develop page?'
    },
    {
        type: 'input',
        name:'Description',
        message: 'What is the the purpose of this developing page?'

    },
    {
        type: 'input',
        name:'Table of Contents',
        message: 'Table of Contents'

    },
    {
        type: 'input',
        name:'What licence ',
        message: 'Table of Contents'

    }
]
  