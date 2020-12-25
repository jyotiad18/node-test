function getURL(){
    if(process.env.NODE_ENV === 'production'){
        return ''
    }else{
        return ''
    }
}

module.exports = getURL;