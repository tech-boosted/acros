import axios from "axios";

export const post = (url, data, headers, callback) => {
  axios
    .post(url, data, { headers: headers })
    .then((res) => {
      console.log(res);
      callback(res);
    })
    .catch((e) => {
      console.log("Error occured : ", e.response);
      callback(e.response);
    });
};

export const put = (url,data,headers,callback)=>{
    axios.put(url,data,{headers:headers}).then((res)=>{
        console.log(res);
        callback(res);
    }).catch((e)=>{
        console.log("Error occured in api : ",e.response);
        callback(e.response);
    })
}

export const get = (url, headers, callback) => {
  axios
    .get(url, { headers: headers })
    .then((res) => {
      console.log(res);

      callback(res);
    })
    .catch((e) => {
      console.log("Error Occured : ", e.response);
      callback(e.response);
    });
};
export const del = (url, headers, callback) => {
  axios
    .delete(url, { headers: headers })
    .then((res) => {
      console.log(res);

      callback(res);
    })
    .catch((e) => {
      console.log("Error Occured : ", e.response);
      callback(e.response);
    });
};
