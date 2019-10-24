const util_api = {
  respondData: (res, data) => {
    res.json({
      success: true,
      data,
    });
  },

  respondSucess: (res, message) => {
    res.json({
      sucess: true,
      message,
    });
  },

  respondFail: (res, message) => {
    res.json({
      success: false,
      message,
    });
  },

  respondError: (res, err) => {
    res.json({
      message: err.message,
    });
  },
};

module.exports = util_api;
