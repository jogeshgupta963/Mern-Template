const GET=async(req,res)=>{
    try{
    res.send('Basic Server');
    res.status(200);
    }catch(err){
        res.status(502);
        res.send('Error Occured for the GET Request :(');
        console.log(err);
    }
}

module.exports=GET;