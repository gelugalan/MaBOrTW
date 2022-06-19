

const parseBody = async function(req)
{
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString()
    })
    //return body;
}

module.exports = {
    parseBody
}