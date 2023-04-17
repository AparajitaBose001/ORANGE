import {getOneItem} from './controller/getItems';

export const config={
    api:{
        bodyParser:false
    }
};

export default function Handler(req,res){
    if (req.method === 'GET') {
        getOneItem(req,res);
    }
}
