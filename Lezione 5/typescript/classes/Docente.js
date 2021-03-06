"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Docente = void 0;
var Persona_1 = require("./Persona");
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(nome, eta, materie) {
        var _this = _super.call(this, nome, eta) || this;
        _this.materie = materie || [];
        return _this;
    }
    return Docente;
}(Persona_1.Persona));
exports.Docente = Docente;
