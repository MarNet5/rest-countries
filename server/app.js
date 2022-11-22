const express = require("express");

const app = express();

const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
      });

    app.get(`/all`, async function (req, res){
        
    const url = "https://restcountries.com/v2/all";

    const options = {
		method: 'GET',
        mode: 'cors'
	};
    fetch(url, options)
		.then(res => res.json())
		.then(json => console.log(json))
		.catch(err => console.error('error:' + err));
        try {
            let response = await fetch(url, options);
            response = await response.json();
            console.log("response: ", response);
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({msg: `Internal Server Error.`});
        }
    });
    app.get(`/name/:name`, async function (req, res){
        let name = req.params.name;
        console.log("req:", req)
        const url =  `https://restcountries.com/v2/name/${name}`;
    
        const options = {
            method: 'GET',
            mode: 'cors'
        };
        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
            try {
                let response = await fetch(url, options);
                response = await response.json();
                res.status(200).json(response);
            } catch (err) {
                console.log(err);
                res.status(500).json({msg: `Internal Server Error.`});
            }
        });
   

        app.get(`/:codes`, async function (req, res){
            let codes = req.params.codes;
            const url =  `https://restcountries.com/v2/alpha?codes=${codes}`;
        
            const options = {
                method: 'GET',
                mode: 'cors'
            };
            fetch(url, options)
                .then(res => res.json())
                .then(json => console.log(json))
                .catch(err => console.error('error:' + err));
                try {
                    let response = await fetch(url, options);
                    response = await response.json();
                    res.status(200).json(response);
                } catch (err) {
                    console.log(err);
                    res.status(500).json({msg: `Internal Server Error.`});
                }
            });
    app.listen(3000, () => {
        console.log("Listen on the port 3000...");
    });