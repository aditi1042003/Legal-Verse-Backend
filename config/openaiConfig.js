const { Configuration ,OpenAIApi, default: OpenAI }=require('openai');

require('dotenv').config()

const openai= new OpenAI({
    apiKey: ""
});


//const openai=new OpenAIApi(configuration)

module.exports=openai
