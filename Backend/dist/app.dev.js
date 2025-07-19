"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = require("dotenv");

var _cors = _interopRequireDefault(require("cors"));

var _sendemail = require("./utils/sendemail.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Assuming this is where the email sending logic is defined
var app = (0, _express["default"])();

var router = _express["default"].Router();

(0, _dotenv.config)({
  path: './config.env'
});
app.use((0, _cors["default"])({
  origin: process.env.FRONTEND_URL,
  methods: 'POST',
  credentials: true
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
router.post('/send/mail', function _callee(req, res, next) {
  var _req$body, name, email, message;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, message = _req$body.message;

          if (!(!name || !email || !message)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", next(res.status(400).json({
            success: false,
            message: 'Please provide all required fields'
          })));

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap((0, _sendemail.sendEmail)({
            email: "nehaaaaa.2305@gmail.com",
            subject: "GYM WEBSITE CONTACT",
            message: message,
            userEmail: email
          }));

        case 6:
          res.status(200).json({
            success: true,
            message: 'Email sent successfully'
          });
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: _context.t0.message
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
});
app.use(router);
app.listen(process.env.PORT, function () {
  console.log("Server is running on port ".concat(process.env.PORT));
});
//# sourceMappingURL=app.dev.js.map
