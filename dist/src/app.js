"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const course_route_1 = __importDefault(require("./modules/course/routes/course.route"));
const admission_plan_route_1 = __importDefault(require("./modules/admission-plan/routes/admission-plan.route"));
const extra_admission_plan_route_1 = __importDefault(require("./modules/extra-admission-plan/routes/extra-admission-plan.route"));
const user_route_1 = __importDefault(require("./modules/user/routes/user.route"));
const responsible_quota_person_route_1 = __importDefault(require("./modules/responsible-quota-person/routes/responsible-quota-person.route"));
const App = () => {
    const app = (0, express_1.default)();
    app.use((0, body_parser_1.json)());
    // eap = extra-admission-plans
    // ap = admission-plans
    // rqp = responsible-quota-perons
    // u = users
    // c = course
    app.use('/users', user_route_1.default);
    app.use('/admission-plans', admission_plan_route_1.default);
    app.use('/extra-admission-plans', extra_admission_plan_route_1.default);
    app.use('/responsible-quota-perons', responsible_quota_person_route_1.default);
    app.use('/courses', course_route_1.default);
    app.use('/u', user_route_1.default);
    app.use('/ap', admission_plan_route_1.default);
    app.use('/eap', extra_admission_plan_route_1.default);
    app.use('/rqp', responsible_quota_person_route_1.default);
    app.use('/c', course_route_1.default);
    app.get("/", (req, res) => {
        res.end("this is student admission plan service");
    });
    return app;
};
exports.App = App;
exports.default = exports.App;
