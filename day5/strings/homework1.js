
function rmHtmlTags(str){
    try{
        if(typeof str !== 'string'){
            throw new Error('Parameter should be a string');
        }
        let regexp = /<[^>]+>/g;
        console.log(str.replace(regexp, ''));
    }catch(err){
        console.log(err.message);
    }
}
rmHtmlTags('<p><strong><em>Content</em></strong></p>') 
rmHtmlTags(2);
