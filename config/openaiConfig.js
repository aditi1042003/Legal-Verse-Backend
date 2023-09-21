const { Configuration ,OpenAIApi, default: OpenAI }=require('openai');

require('dotenv').config()

const openai= new OpenAI({
    apiKey: "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"
});


//const openai=new OpenAIApi(configuration)

module.exports=openai
