Object.defineProperty(Object.prototype,'mergeDeepRight',{
    value:function(source){
        //get with non enumerable properties too
        let props=Object.getOwnPropertyDescriptors(source);
        
        for (let i in props){
            //we don't need descriptors
            let value = props[i].value;

            if(typeof value === 'object' && !Array.isArray(value) && value!== null){
                //for nested object
                if(i in this){
                    this[i].mergeDeepRight(value);
                }else{
                    this[i]=source[i]
                }
            }else if(Array.isArray(value)){
                //for array               
                if(i in this){
                    this[i]=this[i].concat(source[i])
                }else{
                    this[i]=source[i]
                }
            }else{
                //otherwise simply change it
                this[i]=source[i]
            }
        }
    }
    // non-enumerable by default when using defineProperty
})


const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: { 
            verified: true,
            tags: ['important']
        }
    }
};
let update={
    age: 40,
    contact: {
        email: 'baa@example.com',
        ss:[2,3,4],
        aa:{a:1,b:3},
        favorite: true,
        meta: {
            tags: ['vip'],
            xx:[2,3]
        }
    }
};

data.mergeDeepRight(update);
console.log(data);