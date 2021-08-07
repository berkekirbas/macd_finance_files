(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_jsf_src_pages_Landing_Landing_jsx"],{

/***/ "./resources/jsf/src/components/LoaderForm/LoaderForm.jsx":
/*!****************************************************************!*\
  !*** ./resources/jsf/src/components/LoaderForm/LoaderForm.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function LoaderForm() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      width: "100%",
      height: "100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.default, {
      type: "ThreeDots",
      color: "#2BAD60",
      height: "100",
      width: "100"
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoaderForm);

/***/ }),

/***/ "./resources/jsf/src/components/Login/Login.jsx":
/*!******************************************************!*\
  !*** ./resources/jsf/src/components/Login/Login.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_randomStringGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/randomStringGenerator */ "./resources/jsf/src/utils/randomStringGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Config */ "./resources/jsf/src/Config.js");
/* harmony import */ var _LoaderForm_LoaderForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoaderForm/LoaderForm */ "./resources/jsf/src/components/LoaderForm/LoaderForm.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function Login(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    login_email: "",
    login_password: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      loginState = _useState2[0],
      setLoginState = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var handleLoginChange = function handleLoginChange(e) {
    var _e$target = e.target,
        id = _e$target.id,
        value = _e$target.value;
    setLoginState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, id, value));
    });
  };

  var handleLoginSubmit = function handleLoginSubmit(e) {
    e.preventDefault();
    setLoading(true); // ! data

    var data = {
      email: loginState.login_email,
      password: loginState.login_password
    }; // ! login request

    axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(_Config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL, "/api/v1/auth/login"), data, {
      withCredentials: true
    }).then(function (response) {
      if (response.data.token == undefined) {
        console.log(response.data.message);
      } else {
        localStorage.setItem("auth_control_s2", (0,_utils_randomStringGenerator__WEBPACK_IMPORTED_MODULE_1__.randomString)(50));
        setLoading(false);
        history.push("/");
      }
    })["catch"](function (error) {
      setLoading(false);
      console.log(error);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_LoaderForm_LoaderForm__WEBPACK_IMPORTED_MODULE_4__.default, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: props.active == "login" ? "tab-pane active" : "tab-pane",
      id: "login",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        children: "Login"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "text-muted",
        children: "Log into your account"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
        onSubmit: handleLoginSubmit,
        name: "Login_form",
        id: "Login_form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "form-group col-xs-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              htmlFor: "my-email",
              className: "sr-only",
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              id: "login_email",
              className: "form-control input-group-lg",
              type: "text",
              name: "Email",
              title: "Enter Email",
              placeholder: "Your Email",
              value: loginState.login_email,
              onChange: handleLoginChange
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "form-group col-xs-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              htmlFor: "my-password",
              className: "sr-only",
              children: "Password"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              id: "login_password",
              className: "form-control input-group-lg",
              type: "password",
              name: "password",
              title: "Enter password",
              placeholder: "Password",
              value: loginState.login_password,
              onChange: handleLoginChange
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            href: "#",
            children: "Forgot Password?"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "btn btn-primary",
          children: "Login Now"
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./resources/jsf/src/components/Register/Register.jsx":
/*!************************************************************!*\
  !*** ./resources/jsf/src/components/Register/Register.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config */ "./resources/jsf/src/Config.js");
/* harmony import */ var _LoaderForm_LoaderForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LoaderForm/LoaderForm */ "./resources/jsf/src/components/LoaderForm/LoaderForm.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Register(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("male"),
      _useState2 = _slicedToArray(_useState, 2),
      userGender = _useState2[0],
      setGender = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    nickname: "",
    password: "",
    password_confirmation: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      registerState = _useState4[0],
      setRegisterState = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1]; //! Gender Changer Function


  var handleOptionChange = function handleOptionChange(changeEvent) {
    setGender(changeEvent.target.value);
  }; //! registerState handler


  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        id = _e$target.id,
        value = _e$target.value;
    setRegisterState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, id, value));
    });
  }; //! Submit handler


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (registerState.password == registerState.password_confirmation) {
      var data = {
        name: registerState.name,
        nickname: registerState.nickname,
        email: registerState.email,
        password: registerState.password,
        password_confirmation: registerState.password_confirmation,
        gender: userGender
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat(_Config__WEBPACK_IMPORTED_MODULE_2__.BASE_URL, "/api/v1/auth/register"), data, {
        withCredentials: true
      }).then(function (response) {
        setRegisterState({});
        setLoading(false);
        props.changer();
      })["catch"](function (err) {
        return console.error(err);
      });
    } else {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LoaderForm_LoaderForm__WEBPACK_IMPORTED_MODULE_3__.default, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: props.active == "register" ? "tab-pane active" : "tab-pane",
      id: "register",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
        children: "Register Now !!!"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "text-muted",
        children: "Be cool and join today. Meet millions"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
        onSubmit: handleSubmit,
        name: "registration_form",
        id: "registration_form",
        className: "form-inline",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "form-group col-xs-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              htmlFor: "firstname",
              className: "sr-only",
              children: "Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              id: "name",
              className: "form-control input-group-lg",
              type: "text",
              name: "name",
              title: "Enter name",
              placeholder: "Name",
              value: registerState.name,
              onChange: handleChange,
              required: true
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "form-group col-xs-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              htmlFor: "lastname",
              className: "sr-only",
              children: "Nickname"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              id: "nickname",
              className: "form-control input-group-lg",
              type: "text",
              name: "nickname",
              title: "Enter Nickname",
              placeholder: "Nickname",
              value: registerState.nickname,
              onChange: handleChange,
              required: true
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "form-group col-xs-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              htmlFor: "email",
              className: "sr-only",
              children: "Email"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              id: "email",
              className: "form-control input-group-lg",
              type: "text",
              name: "Email",
              title: "Enter Email",
              placeholder: "Your Email",
              value: registerState.email,
              onChange: handleChange,
              required: true
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "form-group col-xs-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              htmlFor: "password",
              className: "sr-only",
              children: "Password"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              id: "password",
              className: "form-control input-group-lg",
              type: "password",
              name: "password",
              title: "Enter password",
              placeholder: "Password",
              value: registerState.password,
              onChange: handleChange,
              required: true
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "form-group col-xs-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              htmlFor: "password",
              className: "sr-only",
              children: "Password Confirmation"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              id: "password_confirmation",
              className: "form-control input-group-lg",
              type: "password",
              name: "password_confirmation",
              title: "Enter Password again",
              placeholder: "Confirm Your Password",
              value: registerState.password_confirmation,
              onChange: handleChange,
              required: true
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "form-group gender",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
            className: "radio-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "radio",
              name: "male",
              value: "male",
              checked: userGender === "male",
              onChange: handleOptionChange,
              className: "form-check-input"
            }), "Male"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
            className: "radio-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "radio",
              name: "female",
              value: "female",
              className: "form-check-input",
              checked: userGender === "female",
              onChange: handleOptionChange
            }), "Female"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: "#",
            children: "Already have an account?"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Register Now"
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./resources/jsf/src/pages/Landing/Landing.jsx":
/*!*****************************************************!*\
  !*** ./resources/jsf/src/pages/Landing/Landing.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Register_Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Register/Register */ "./resources/jsf/src/components/Register/Register.jsx");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Login/Login */ "./resources/jsf/src/components/Login/Login.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Landing = function Landing() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("login"),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setActive = _useState2[1];

  var changer = function changer() {
    if (isActive == "login") {
      setActive("register");
    } else {
      setActive("login");
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
      className: "navbar navbar-default navbar-fixed-top menu",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "navbar-header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            className: "navbar-brand",
            href: "index-register.html",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              loading: "eager",
              src: "images/logo_with_name.png",
              width: "168px",
              height: "30px",
              alt: "logo"
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      id: "lp-register",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "container wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "col-sm-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "intro-texts",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
                className: "text-white",
                children: "Introduce with Traders"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                children: ["Macd Traders Platform is a social media platform that tries to gather all people who trade ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "Why are you waiting for? Join us!"]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "col-sm-6 col-sm-offset-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "reg-form-container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "reg-options",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                  className: "nav nav-tabs",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                    className: isActive == "register" ? "active" : null,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                      href: "#register",
                      "data-toggle": "tab",
                      onClick: changer,
                      children: "Register"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                    className: isActive == "login" ? "active" : null,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                      href: "#login",
                      "data-toggle": "tab",
                      onClick: changer,
                      children: "Login"
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "tab-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Login_Login__WEBPACK_IMPORTED_MODULE_2__.default, {
                  active: isActive
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Register_Register__WEBPACK_IMPORTED_MODULE_1__.default, {
                  changer: changer,
                  active: isActive
                })]
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "col-sm-6 col-sm-offset-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              className: "list-inline social-icons",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                  href: "https://www.facebook.com/profile.php?id=100069041405057",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                    className: "icon ion-social-facebook"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                  href: "https://twitter.com/macdfinance",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                    className: "icon ion-social-twitter"
                  })
                })
              })]
            })
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);

/***/ }),

/***/ "./resources/jsf/src/utils/randomStringGenerator.js":
/*!**********************************************************!*\
  !*** ./resources/jsf/src/utils/randomStringGenerator.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomString": () => (/* binding */ randomString)
/* harmony export */ });
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

var randomString = function randomString(length) {
  var result = " ";
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};



/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Loader;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _loader = __webpack_require__(/*! ./loader */ "./node_modules/react-loader-spinner/dist/loader/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var componentNames = ["Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "TailSpin", "ThreeDots", "Watch", "RevolvingDot", "Triangle", "Plane", "MutatingDots", "CradleLoader"];

function componentName(type) {
  if (componentNames.includes(type)) {
    return _loader.Spinner[type];
  }

  return _loader.Spinner.Audio;
}
/**
 * @return {null}
 */


function Loader(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      display = _useState2[0],
      setDisplay = _useState2[1];

  (0, _react.useEffect)(function () {
    var timer;

    if (props.timeout && props.timeout > 0) {
      timer = setTimeout(function () {
        setDisplay(false);
      }, props.timeout);
    }

    return function () {
      if (timer) clearTimeout(timer);
    };
  });

  if (!props.visible || props.visible === "false") {
    return null;
  }

  return display ? /*#__PURE__*/_react["default"].createElement("div", {
    "aria-busy": "true",
    className: props.className,
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement(componentName(props.type), _objectSpread({}, props))) : null;
}

Loader.propTypes = {
  type: _propTypes["default"].oneOf([].concat(componentNames)),
  style: _propTypes["default"].objectOf(_propTypes["default"].string),
  className: _propTypes["default"].string,
  visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  timeout: _propTypes["default"].number
};
Loader.defaultProps = {
  type: "Audio",
  style: {},
  className: "",
  visible: true,
  timeout: 0
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Audio.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Audio.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Audio = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Audio = function Audio(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    height: props.height,
    width: props.width,
    fill: props.color,
    viewBox: "0 0 55 80",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "matrix(1 0 0 -1 0 80)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "10",
    height: "20",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "4.3s",
    values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "15",
    width: "10",
    height: "80",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "80;55;33;5;75;23;73;33;12;14;60;80",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "30",
    width: "10",
    height: "50",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1.4s",
    values: "50;34;78;23;56;23;34;76;80;54;21;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "45",
    width: "10",
    height: "30",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "30;45;13;80;56;72;45;76;34;23;67;30",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

exports.Audio = Audio;
Audio.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Audio.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/BallTriangle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/BallTriangle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BallTriangle = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BallTriangle = function BallTriangle(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    height: props.height,
    width: props.width,
    stroke: props.color,
    viewBox: "0 0 57 57",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "5",
    cy: "50",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;5;50;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    values: "5;27;49;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "27",
    cy: "5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    from: "5",
    to: "5",
    values: "5;50;50;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    from: "27",
    to: "27",
    values: "27;49;5;27",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "49",
    cy: "50",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;50;5;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cx",
    from: "49",
    to: "49",
    begin: "0s",
    dur: "2.2s",
    values: "49;5;27;49",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))));
};

exports.BallTriangle = BallTriangle;
BallTriangle.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
BallTriangle.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 5,
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Bars.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Bars.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Bars = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Bars = function Bars(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    fill: props.color,
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "60",
    width: "15",
    height: "140",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

exports.Bars = Bars;
Bars.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Bars.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Circles.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Circles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Circles = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Circles = function Circles(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 135 135",
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "-360 67 67",
    dur: "2.5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "360 67 67",
    dur: "8s",
    repeatCount: "indefinite"
  })));
};

exports.Circles = Circles;
Circles.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Circles.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/CradleLoader.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/CradleLoader.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CradleLoader = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CradleLoader = function CradleLoader(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "aria-label": props.label,
    role: "presentation",
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-swing"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-swing-l"
  }), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-swing-r"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-shadow"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-shadow-l"
  }), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-shadow-r"
  })));
};

exports.CradleLoader = CradleLoader;
CradleLoader.propTypes = {
  label: _propTypes["default"].string
};
CradleLoader.defaultProps = {
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Grid.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Grid.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Grid = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Grid = function Grid(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 105 105",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.5",
    cy: "12.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.5",
    cy: "52.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "100ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "52.5",
    cy: "12.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "300ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "52.5",
    cy: "52.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "600ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "92.5",
    cy: "12.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "800ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "92.5",
    cy: "52.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "400ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.5",
    cy: "92.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "700ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "52.5",
    cy: "92.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "500ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "92.5",
    cy: "92.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "200ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

exports.Grid = Grid;
Grid.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Grid.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 12.5,
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Hearts.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Hearts.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Hearts = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hearts = function Hearts(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 140 64",
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0.7s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
  }));
};

exports.Hearts = Hearts;
Hearts.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Hearts.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/MutatingDots.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/MutatingDots.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MutatingDots = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MutatingDots = function MutatingDots(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    id: "goo-loader",
    width: props.width,
    height: props.height,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "fancy-goo"
  }, /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    "in": "SourceGraphic",
    stdDeviation: "6",
    result: "blur"
  }), /*#__PURE__*/_react["default"].createElement("feColorMatrix", {
    "in": "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
    result: "goo"
  }), /*#__PURE__*/_react["default"].createElement("feComposite", {
    "in": "SourceGraphic",
    in2: "goo",
    operator: "atop"
  })), /*#__PURE__*/_react["default"].createElement("g", {
    filter: "url(#fancy-goo)"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    id: "mainAnim",
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    from: "0 50 50",
    to: "359 50 50",
    dur: "1.2s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50%",
    cy: "40",
    r: props.radius,
    fill: props.color
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    id: "cAnim1",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0;cAnim1.end+0.2s",
    calcMode: "spline",
    values: "40;20;40",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50%",
    cy: "60",
    r: props.radius,
    fill: props.secondaryColor
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    id: "cAnim2",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0.4s;cAnim2.end+0.2s",
    calcMode: "spline",
    values: "60;80;60",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  }))));
};

exports.MutatingDots = MutatingDots;
MutatingDots.propTypes = {
  width: _propTypes["default"].number,
  secondaryColor: _propTypes["default"].string,
  height: _propTypes["default"].number,
  color: _propTypes["default"].string,
  radius: _propTypes["default"].number,
  label: _propTypes["default"].string
};
MutatingDots.defaultProps = {
  width: 80,
  height: 90,
  color: "green",
  radius: 11,
  secondaryColor: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Oval.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Oval.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Oval = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Oval = function Oval(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: props.radius
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite"
  })))));
};

exports.Oval = Oval;
Oval.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Oval.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 18
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Plane.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Plane.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Plane = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Plane = function Plane(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "react-spinner-loader-svg-calLoader",
    xmlns: "http://www.w3.org/2000/svg",
    width: "230",
    height: "230",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("desc", null, "Plane animation. Loading "), /*#__PURE__*/_react["default"].createElement("path", {
    className: "react-spinner-loader-cal-loader__path",
    style: {
      stroke: props.secondaryColor
    },
    d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
    fill: "none",
    stroke: "#0099cc",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "10 10 10 10 10 10 10 432",
    strokeDashoffset: "77"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    className: "cal-loader__plane",
    style: {
      fill: props.color
    },
    d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
    fill: "#000033"
  }));
};

exports.Plane = Plane;
Plane.propTypes = {
  secondaryColor: _propTypes["default"].string,
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Plane.defaultProps = {
  secondaryColor: "grey",
  color: "#FFA500",
  label: "async-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Puff.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Puff.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Puff = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Puff = function Puff(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
};

exports.Puff = Puff;
Puff.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Puff.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 1
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RevolvingDot = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RevolvingDot = function RevolvingDot(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    version: "1.1",
    width: props.width,
    height: props.height,
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "none",
    stroke: props.color,
    strokeWidth: "4",
    cx: "50",
    cy: "50",
    r: props.radius + 38,
    style: {
      opacity: 0.5
    }
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: props.color,
    stroke: props.color,
    strokeWidth: "3",
    cx: "8",
    cy: "54",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 48",
    to: "360 50 52",
    repeatCount: "indefinite"
  })));
};

exports.RevolvingDot = RevolvingDot;
RevolvingDot.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
RevolvingDot.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 6
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Rings.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Rings.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Rings = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Rings = function Rings(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius,
    strokeOpacity: "0"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius,
    strokeOpacity: "0"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeWidth",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius + 2
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.5s",
    values: "6;1;2;3;4;5;6",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

exports.Rings = Rings;
Rings.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Rings.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 6,
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/TailSpin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/TailSpin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TailSpin = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TailSpin = function TailSpin(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
    x1: "8.042%",
    y1: "0%",
    x2: "65.682%",
    y2: "23.865%",
    id: "a"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: props.color,
    stopOpacity: "0",
    offset: "0%"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: props.color,
    stopOpacity: ".631",
    offset: "63.146%"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: props.color,
    offset: "100%"
  }))), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    id: "Oval-2",
    stroke: props.color,
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#fff",
    cx: "36",
    cy: "18",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })))));
};

exports.TailSpin = TailSpin;
TailSpin.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
TailSpin.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 1,
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/ThreeDots.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/ThreeDots.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ThreeDots = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThreeDots = function ThreeDots(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 120 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "15",
    cy: "15",
    r: props.radius + 6
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fillOpacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "60",
    cy: "15",
    r: props.radius,
    attributeName: "fillOpacity",
    from: "1",
    to: "0.3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fillOpacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "105",
    cy: "15",
    r: props.radius + 6
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fillOpacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

exports.ThreeDots = ThreeDots;
ThreeDots.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
ThreeDots.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 9
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Triangle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Triangle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Triangle = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Triangle = function Triangle(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-svg"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    id: "triangle",
    width: props.width,
    height: props.height,
    viewBox: "-3 -4 39 39",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    fill: "transparent",
    stroke: props.color,
    strokeWidth: "1",
    points: "16,0 32,32 0,32"
  })));
};

exports.Triangle = Triangle;
Triangle.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Triangle.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Watch.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Watch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Watch = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Watch = function Watch(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    version: "1.1",
    id: "L2",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "none",
    stroke: props.color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    cx: "50",
    cy: "50",
    r: props.radius
  }), /*#__PURE__*/_react["default"].createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: props.color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "85",
    y2: "50.5"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: props.color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "49.5",
    y2: "74"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    dur: "15s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })));
};

exports.Watch = Watch;
Watch.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Watch.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 48
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Spinner = void 0;

var _Circles = __webpack_require__(/*! ./Circles */ "./node_modules/react-loader-spinner/dist/loader/Circles.js");

var _Watch = __webpack_require__(/*! ./Watch */ "./node_modules/react-loader-spinner/dist/loader/Watch.js");

var _Audio = __webpack_require__(/*! ./Audio */ "./node_modules/react-loader-spinner/dist/loader/Audio.js");

var _BallTriangle = __webpack_require__(/*! ./BallTriangle */ "./node_modules/react-loader-spinner/dist/loader/BallTriangle.js");

var _Bars = __webpack_require__(/*! ./Bars */ "./node_modules/react-loader-spinner/dist/loader/Bars.js");

var _CradleLoader = __webpack_require__(/*! ./CradleLoader */ "./node_modules/react-loader-spinner/dist/loader/CradleLoader.js");

var _Grid = __webpack_require__(/*! ./Grid */ "./node_modules/react-loader-spinner/dist/loader/Grid.js");

var _Hearts = __webpack_require__(/*! ./Hearts */ "./node_modules/react-loader-spinner/dist/loader/Hearts.js");

var _MutatingDots = __webpack_require__(/*! ./MutatingDots */ "./node_modules/react-loader-spinner/dist/loader/MutatingDots.js");

var _Oval = __webpack_require__(/*! ./Oval */ "./node_modules/react-loader-spinner/dist/loader/Oval.js");

var _Plane = __webpack_require__(/*! ./Plane */ "./node_modules/react-loader-spinner/dist/loader/Plane.js");

var _Puff = __webpack_require__(/*! ./Puff */ "./node_modules/react-loader-spinner/dist/loader/Puff.js");

var _RevolvingDot = __webpack_require__(/*! ./RevolvingDot */ "./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js");

var _Rings = __webpack_require__(/*! ./Rings */ "./node_modules/react-loader-spinner/dist/loader/Rings.js");

var _TailSpin = __webpack_require__(/*! ./TailSpin */ "./node_modules/react-loader-spinner/dist/loader/TailSpin.js");

var _ThreeDots = __webpack_require__(/*! ./ThreeDots */ "./node_modules/react-loader-spinner/dist/loader/ThreeDots.js");

var _Triangle = __webpack_require__(/*! ./Triangle */ "./node_modules/react-loader-spinner/dist/loader/Triangle.js");

var Spinner = {
  Circles: _Circles.Circles,
  Audio: _Audio.Audio,
  BallTriangle: _BallTriangle.BallTriangle,
  Bars: _Bars.Bars,
  CradleLoader: _CradleLoader.CradleLoader,
  Grid: _Grid.Grid,
  Hearts: _Hearts.Hearts,
  MutatingDots: _MutatingDots.MutatingDots,
  Oval: _Oval.Oval,
  Plane: _Plane.Plane,
  Puff: _Puff.Puff,
  RevolvingDot: _RevolvingDot.RevolvingDot,
  Rings: _Rings.Rings,
  TailSpin: _TailSpin.TailSpin,
  ThreeDots: _ThreeDots.ThreeDots,
  Triangle: _Triangle.Triangle,
  Watch: _Watch.Watch
};
exports.Spinner = Spinner;

/***/ })

}]);