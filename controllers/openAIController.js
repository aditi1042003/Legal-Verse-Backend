const openai=require('../config/openaiConfig.js');

const generateMeta=async(title) =>{
    const stream= await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: `create a legal documet format for topic ${title} `
            }
        ],
       stream  : true,
       max_tokens: 1000

    });

    var response="";

    for await (const part of stream) {
        response =response +part.choices[0].delta.content;
    }

    console.log(response);


   // console.log(description.choices[0].text)
}

module.exports={ generateMeta}