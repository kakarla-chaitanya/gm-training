import api from "./api";

function get(path,{params={},headers={}}={}){
    return api.get(path,{
        headers:headers,
        params:params,
    });
}

function post(path,body,{params={},headers={}}={}){
    return api.post(path,body,{
        headers:headers,
        params:params,
    });
}

function put(path,body,{params={},headers={}}={}){
    return api.put(path,body,{
        headers:headers,
        params:params,
    });
}

function patch(path,body,{params={},headers={}}={}){
    return api.patch(path,body,{
        headers:headers,
        params:params,
    });
}

function _delete(path,{data={},params={},headers={}}={}){
    return api.delete(path,{
        headers:headers,
        params:params,
        data:{
            source:data,
        }
    });
}
export {get,post,put,patch,_delete};