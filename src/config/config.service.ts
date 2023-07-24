import { DotenvParseOutput, config} from "dotenv";
import { IConfigService } from "./config.interface";

export class ConfigService implements IConfigService{
    private config: DotenvParseOutput;

    constructor(){
        const {error, parsed} = config(); 
        if(error) {
            throw new Error('Не найден .env');
        }
        if(!parsed){
            throw new Error('Пустой .env');
        }
        this.config = parsed;
    }

    get(key : string) : string {
        const res : string = this.config[key];
        if(! res){
            throw new Error(`Нет запрошенного ключа ${key}`);
        }
        return res;
    }
}