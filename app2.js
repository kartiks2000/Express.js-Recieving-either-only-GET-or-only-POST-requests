// Recieving either only "GET" or only "POST" requests.


// using "get()" to recieve only "GET" requests
app.get('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/addproduct');
});


// using "post()" to recieve only "POST" requests
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/addproduct');
});

// NOTE-: This is just a Incomplete/dummy code hence it will not work. 