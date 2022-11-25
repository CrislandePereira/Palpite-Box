const {GoogleSpreadsheet} = require('google-spreadsheet')
const credentials = require ('./credentials.json')

const doc = new GoogleSpreadsheet('1oAJyVdRfgUEOMYo6Kw-jKuN63L9wNtYZuBy9h-_eJXA')

const run = async () =>{
    try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)

    }catch(err){
        console.log(err)
    }
}
run()