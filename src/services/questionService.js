function postQuestion(question) {
    var body = JSON.stringify(question)

    var response = await axios.post('https://tcc-unip.herokuapp.com/questions', body)
    return response
}

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });