import axios from 'axios';
import config from '../../../config';
import {logger} from '../../common/loaders/logger';

export class Restaurant {

  static async searchByDistance(){
    try{
      const restaurants = (await axios.get(config.googleBaseUrl + '&rankby=distance')).data.results;
      return restaurants;
    }catch(error){
      logger.error(error.message);
    }
  }

  static async searchTop3(){
    try{
      //TODO sort all restaurant in 3 km not only the first 20 items
      const json = (await axios.get(config.googleBaseUrl + '&radius=3000')).data.results;
      const jsonAsArray = Object.keys(json).map(function(key){
        return json[key];
      })
      .sort(function(itemA, itemB) {
        return itemB.rating - itemA.rating;
      })
      .slice(0, 3)
      return jsonAsArray;
    }catch(error){
      logger.error(error.message);
    }
  }



}



