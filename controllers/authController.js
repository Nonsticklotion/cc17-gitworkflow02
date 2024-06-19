const authController = {};

authController.register((req, res) =>
  res.status(200).json({ message: "done" })
);

module.exports = authController;
