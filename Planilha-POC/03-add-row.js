const {GoogleSpreadsheet} = require('google-spreadsheet')
const credentials = require ('./credentials.json')

const doc = new GoogleSpreadsheet('1oAJyVdRfgUEOMYo6Kw-jKuN63L9wNtYZuBy9h-_eJXA')

const run = async () =>{
    try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]

    //Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
        Nome: 'Cris Pereira',
        Email: 'cris.123@gmail.com',
        Whatsapp: '35900112233',
        Cupom: 'aa0101',
        Promo: 'Natal2000'
    })

    }catch(err){
        console.log(err)
    }
}
run()