class Countries {
  constructor(apiEndPoint) {
    if (typeof apiEndPoint !== 'string') {
      throw new Error('url must be a string');
    }
    this.apiEndPoint = apiEndPoint;
  }
  send(region) {
    if (typeof region !== 'string') {
      throw new Error('region must be a string');
    }
    return new Promise((resolve, reject) => {
      fetch(this.apiEndPoint + `?region=${region}`)
        .then((response) => {
          if (response.status == 200) {
            return response.json();
          } else {
            reject(`We have error, status code: ${response.status}`)
          }
        })
        // we need data property from the response
        .then(data => {
          if (data.hasOwnProperty('data')) {
            resolve(data.data);
          } else {
            reject('No data property found in the response');
          }
        })
        .catch((error) =>reject(error))
    })
  }
}

const url = "https://api.first.org/data/v1/countries";
const countries = new Countries(url);

(async () => {
  try {
    const data = await countries.send('africa');
    console.log(data); // Data.
  } catch (error) {
    console.log(error);
  }
})();