const DELETE=async(req,res)=>{
    try{
    const id=req.params.id;
    await dataModel.findByIdAndRemove(id).exec();
    res.send('Data Removed from DB');
    res.status(202);
    }catch(err){
        res.send('No content to delete from DB');
        res.status(204);
        console.log(err);
    }
   
}
module.exports=DELETE;