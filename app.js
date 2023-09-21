const readline=require('readline');
const {generateMeta }=require('./controllers/openAIController')

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('enter promt:\n', generateMeta)






