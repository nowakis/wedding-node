function defaultGetCallback(res) {
  return function (err, result) {
    if (err) {
      throw err;
    }

    if (result.length > 0) {
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

module.exports = {
  get: defaultGetCallback,
  post: defaultPostCallback
}