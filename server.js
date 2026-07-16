const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


app.post("/api/czat", async function(req, res){

    try{

        const wiadomosc = req.body.wiadomosc;

        if(
            typeof wiadomosc !== "string" ||
            wiadomosc.trim() === ""
        ){
            return res.status(400).json({
                blad:"Nie wpisano pytania."
            });
        }


        const odpowiedzAI =
            await openai.responses.create({

                model:"gpt-4.1-mini",

                instructions:`
                    Jesteś pomocnym nauczycielem biologii.

                    Odpowiadasz po polsku.
                    Tłumaczysz prostym językiem dla ucznia.
                    Wyjaśniasz trudne pojęcia.
                    Podajesz przykłady i porównania.
                    Nie wymyślasz informacji.
                    Gdy nie jesteś pewny, wyraźnie o tym mówisz.
                    Odpowiadasz głównie na pytania związane z biologią.
                `,

                input:wiadomosc.trim(),

                max_output_tokens:700
            });


        res.json({
            odpowiedz:odpowiedzAI.output_text
        });

    }
    catch(blad){

        console.error("Błąd AI:", blad);

        res.status(500).json({
            blad:"Serwer nie mógł otrzymać odpowiedzi od AI."
        });
    }

});


app.listen(3000, function(){

    console.log(
        "Serwer działa na adresie http://localhost:3000"
    );

});
