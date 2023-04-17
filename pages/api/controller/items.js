import { IncomingForm } from 'formidable';
import { v4 } from 'uuid';
import { InsertItem } from "../model/itemSchema"
export const config={
    api:{
        bodyParser:false
    }
};

const Items = (req,res)=>{
    const body = req.body;
    const form = new IncomingForm({ keepExtensions: true, uploadDir: './public/uploaded' });
    form.parse(req, async (errors, fields, files)=>{
        if(errors){
            console.log(errors)
            //res.status(500).json({errors});
        }
        else{
            //console.log(fields)
            const dataset0 = fields.text.slice(0,fields.text.length-1);
            //console.log(dataset0)
            const dataset = dataset0.split(",");
            //console.log(dataset[0])
            
            const itemData = {
                serial: v4(),
                title: dataset[0],
                description: dataset[1],
                price: dataset[2],
                tags: fields.tags,
                stock: parseInt(fields.stock), //convert them to int
                price: parseInt(fields.price), //convert them to int
                image: `uploaded/${files.file.newFilename}`,
            }
            //console.log(itemData);
            const dbresponse = async(itemData)=>{
                await InsertItem(itemData)
                .then(data=>console.log(data))
                .catch(err=>console.log(err))
            }
            try{dbresponse(itemData);}
            catch(err){console.log(err)}
            //const {path, name} = files.file;
            //const name = files.file.name;
            //const serverFilePath = `./public/uploads/${name}`;

        try {
        // await fs.promises.rename(path, serverFilePath);
        console.log("Try")
        } 
        catch (error) {
        console.error('Error saving uploaded file:', error);
        //return res.status(500).json({ message: 'Error saving uploaded file' });
        }

        }
    })
//    res.status(200).json({name:'John Doe'})
}
export default Items;