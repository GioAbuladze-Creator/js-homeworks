const send = url => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();;
                } else {
                    reject(`We have error, status code: ${response.status}`);
                }
            })
            // we only need data property from the response
            .then((data) => {
                if(data.hasOwnProperty('data')) {
                    resolve(data.data);
                }else{
                    reject('No data property found in the response');
                }
            })
            .catch((error) =>reject(error));
    })
}

const url = "https://api.first.org/data/v1/countries";

send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });