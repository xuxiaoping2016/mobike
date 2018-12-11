import jsonP from 'jsonp';
import $ from 'jquery'

class Axios{
    jsonp(options){
        return new Promise((resolve,reject) => {
            jsonP(options.url,{
                param:'callback'
            },(err,res) => {
                if(err){ 
                    reject(err) 
                    return;
                }
                if(res.error === 0){
                    resolve(res)
                }else{
                    reject(res)
                }
            })
        })
    }

    ajax(options){
        return new Promise((resolve, reject) => 
        $.ajax({
            url:options.url,
            dataType: options.dataType || 'json', //指定服务器返回的数据类型
            success:(res) => {
                resolve(res)
            },
            error:(err) => {
                reject(err)
            }
        }))
    }
}

export default new Axios();

