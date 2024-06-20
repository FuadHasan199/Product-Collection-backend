import app from "./app";
import 'dotenv/config'
const mongoose = require('mongoose');
async function main() {
    try{
        await mongoose.connect(process.env.DB_URL);
        
        app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port ${process.env.PORT}`);
          });
    }catch(error){
        console.log(error);
    }
    
  }

 main()

//   apollo
//   MLuha7jf3b6TPwPm