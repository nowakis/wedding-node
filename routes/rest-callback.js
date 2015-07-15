function callback() {
  return {
    get: defaultGetCallback,
    post: defaultPostCallback
  }

  function defaultGetCallback(res) {
    return function (err, result) {
      if (err) {
        throw err;
      }

      if (result) {
        res.json(result);
      } else {
        res.statusCode = 404;
        res.send('Error 404: not found.');
      }
    }
  }

  function defaultPostCallback(res) {
    return function (err, result) {
      if (err) {
        throw err;
      }
      res.json(result.insertId);
    }
  }
}

module.exports = callback();