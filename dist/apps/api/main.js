(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const data_1 = __webpack_require__(/*! @nx-ionic/data */ "./libs/data/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
const core_1 = __webpack_require__(/*! @nx-ionic/core */ "./libs/core/src/index.ts");
const course_1 = __webpack_require__(/*! @nx-ionic/course */ "./libs/course/src/index.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [core_1.CoreModule, course_1.CourseModule, data_1.DataModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const config = app.get(config_1.ConfigService);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
            common_1.Logger.log(`Running in ${config.get('environment')} mode`);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./libs/core/src/index.ts":
/*!********************************!*\
  !*** ./libs/core/src/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/core.module */ "./libs/core/src/lib/core.module.ts"), exports);


/***/ }),

/***/ "./libs/core/src/lib/config/configuration.ts":
/*!***************************************************!*\
  !*** ./libs/core/src/lib/config/configuration.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const configuration = () => ({
    environment: "development",
    port: parseInt(process.env.PORT || '3000', 10),
    admin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
    },
});
exports.configuration = configuration;


/***/ }),

/***/ "./libs/core/src/lib/config/validation.ts":
/*!************************************************!*\
  !*** ./libs/core/src/lib/config/validation.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = __webpack_require__(/*! joi */ "joi");
exports.validationSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
    PORT: Joi.number().default(3000),
});


/***/ }),

/***/ "./libs/core/src/lib/core.module.ts":
/*!******************************************!*\
  !*** ./libs/core/src/lib/core.module.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configuration_1 = __webpack_require__(/*! ./config/configuration */ "./libs/core/src/lib/config/configuration.ts");
const validation_1 = __webpack_require__(/*! ./config/validation */ "./libs/core/src/lib/config/validation.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const core_resolver_1 = __webpack_require__(/*! ./core.resolver */ "./libs/core/src/lib/core.resolver.ts");
let CoreModule = class CoreModule {
};
CoreModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.configuration],
                validationSchema: validation_1.validationSchema,
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                playground: true,
            }),
        ],
        controllers: [],
        providers: [core_resolver_1.CoreResolver],
        exports: [],
    })
], CoreModule);
exports.CoreModule = CoreModule;


/***/ }),

/***/ "./libs/core/src/lib/core.resolver.ts":
/*!********************************************!*\
  !*** ./libs/core/src/lib/core.resolver.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreResolver = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CoreResolver = class CoreResolver {
    uptime() {
        return process.uptime();
    }
};
tslib_1.__decorate([
    graphql_1.Query(() => graphql_1.Float),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CoreResolver.prototype, "uptime", null);
CoreResolver = tslib_1.__decorate([
    graphql_1.Resolver()
], CoreResolver);
exports.CoreResolver = CoreResolver;


/***/ }),

/***/ "./libs/course/src/index.ts":
/*!**********************************!*\
  !*** ./libs/course/src/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/course.module */ "./libs/course/src/lib/course.module.ts"), exports);


/***/ }),

/***/ "./libs/course/src/lib/course.module.ts":
/*!**********************************************!*\
  !*** ./libs/course/src/lib/course.module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const course_resolver_1 = __webpack_require__(/*! ./resolvers/course.resolver */ "./libs/course/src/lib/resolvers/course.resolver.ts");
const lesson_resolver_1 = __webpack_require__(/*! ./resolvers/lesson.resolver */ "./libs/course/src/lib/resolvers/lesson.resolver.ts");
const course_service_1 = __webpack_require__(/*! ./course.service */ "./libs/course/src/lib/course.service.ts");
const data_1 = __webpack_require__(/*! @nx-ionic/data */ "./libs/data/src/index.ts");
let CourseModule = class CourseModule {
};
CourseModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [],
        providers: [course_resolver_1.CourseResolver, lesson_resolver_1.LessonResolver, course_service_1.CourseService, data_1.DataService],
        exports: [],
    })
], CourseModule);
exports.CourseModule = CourseModule;


/***/ }),

/***/ "./libs/course/src/lib/course.service.ts":
/*!***********************************************!*\
  !*** ./libs/course/src/lib/course.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const data_1 = __webpack_require__(/*! @nx-ionic/data */ "./libs/data/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CourseService = class CourseService {
    constructor(data) {
        this.data = data;
        this.courseIncludes = {
            author: true,
            lessons: true,
        };
        this.items = [
            {
                id: 'intro-to-graphql',
                title: 'introduccion a graphQL',
                lessons: [
                    { id: 'lesson-1', title: 'Introduccion al curso', content: 'Hello world' },
                    { id: 'lesson-2', title: 'First REal lesson course', content: 'Get busy' },
                ],
            },
            {
                id: 'grapql-forexperts',
                title: 'GraphQL para Expertos',
                lessons: [
                    { id: 'lesson-1-course-2', title: 'Introduccion al export curso', content: 'Hello export' },
                    { id: 'lesson-2-course-2', title: 'First Real lesson export course', content: 'Get busy export' },
                ],
            },
        ];
    }
    courses() {
        return this.data.course.findMany({ include: this.courseIncludes });
    }
    course(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const found = yield this.data.course.findUnique({
                where: { id },
                include: this.courseIncludes,
            });
            if (!found) {
                throw new common_1.NotFoundException(`Course with id ${id} not found!`);
            }
            return found;
        });
    }
    createCourse(/*userId: number,*/ input) {
        return this.data.course.create({
            data: Object.assign({}, input),
        });
    }
    updateCourse(/*userId: number,*/ id, input, lessons) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const course = yield this.course(id);
            return this.data.course.update({
                where: { id: course.id },
                data: Object.assign({}, input),
            });
        });
    }
    deleteCourse(/*userId: number*,*/ id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deleted = yield this.data.course.delete({
                where: {
                    id,
                },
            });
            return !!deleted;
        });
    }
    createLesson(/*userId: number,*/ courseId, input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const course = yield this.course(courseId);
            return this.data.lesson.create({
                data: Object.assign({ course: {
                        connect: { id: course.id },
                    } }, input),
            });
        });
    }
    updateLesson(
    /*userId: number,*/ courseId, lessonId, input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.data.lesson.update({
                where: { id: lessonId },
                data: Object.assign({}, input),
            });
        });
    }
    deleteLesson(/*userId: number,*/ courseId, lessonId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // TODO: Check if userId can actually delete this?
            const deleted = yield this.data.lesson.delete({ where: { id: lessonId } });
            return !!deleted;
        });
    }
};
CourseService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_1.DataService !== "undefined" && data_1.DataService) === "function" ? _a : Object])
], CourseService);
exports.CourseService = CourseService;


/***/ }),

/***/ "./libs/course/src/lib/dto/create-course.input.ts":
/*!********************************************************!*\
  !*** ./libs/course/src/lib/dto/create-course.input.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseInput = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateCourseInput = class CreateCourseInput {
};
tslib_1.__decorate([
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CreateCourseInput.prototype, "title", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CreateCourseInput.prototype, "description", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CreateCourseInput.prototype, "imageUrl", void 0);
CreateCourseInput = tslib_1.__decorate([
    graphql_1.InputType()
], CreateCourseInput);
exports.CreateCourseInput = CreateCourseInput;


/***/ }),

/***/ "./libs/course/src/lib/dto/create-lesson.input.ts":
/*!********************************************************!*\
  !*** ./libs/course/src/lib/dto/create-lesson.input.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLessonInput = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateLessonInput = class CreateLessonInput {
};
tslib_1.__decorate([
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CreateLessonInput.prototype, "title", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CreateLessonInput.prototype, "description", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CreateLessonInput.prototype, "content", void 0);
CreateLessonInput = tslib_1.__decorate([
    graphql_1.InputType()
], CreateLessonInput);
exports.CreateLessonInput = CreateLessonInput;


/***/ }),

/***/ "./libs/course/src/lib/dto/update-course.input.ts":
/*!********************************************************!*\
  !*** ./libs/course/src/lib/dto/update-course.input.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourseInput = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateCourseInput = class UpdateCourseInput {
};
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateCourseInput.prototype, "title", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateCourseInput.prototype, "description", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateCourseInput.prototype, "imageUrl", void 0);
UpdateCourseInput = tslib_1.__decorate([
    graphql_1.InputType()
], UpdateCourseInput);
exports.UpdateCourseInput = UpdateCourseInput;


/***/ }),

/***/ "./libs/course/src/lib/dto/update-lesson.input.ts":
/*!********************************************************!*\
  !*** ./libs/course/src/lib/dto/update-lesson.input.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLessonInput = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateLessonInput = class UpdateLessonInput {
};
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateLessonInput.prototype, "title", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateLessonInput.prototype, "description", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateLessonInput.prototype, "content", void 0);
UpdateLessonInput = tslib_1.__decorate([
    graphql_1.InputType()
], UpdateLessonInput);
exports.UpdateLessonInput = UpdateLessonInput;


/***/ }),

/***/ "./libs/course/src/lib/models/course.ts":
/*!**********************************************!*\
  !*** ./libs/course/src/lib/models/course.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
//import { User } from '@beehive/auth'
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const lesson_1 = __webpack_require__(/*! ./lesson */ "./libs/course/src/lib/models/lesson.ts");
//import { Lesson } from './lesson'
let Course = class Course {
};
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "id", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "title", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "description", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    graphql_1.Field(() => [lesson_1.Lesson], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Course.prototype, "lessons", void 0);
Course = tslib_1.__decorate([
    graphql_1.ObjectType()
], Course);
exports.Course = Course;


/***/ }),

/***/ "./libs/course/src/lib/models/lesson.ts":
/*!**********************************************!*\
  !*** ./libs/course/src/lib/models/lesson.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Lesson = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let Lesson = class Lesson {
};
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Lesson.prototype, "id", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Lesson.prototype, "title", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Lesson.prototype, "description", void 0);
tslib_1.__decorate([
    graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Lesson.prototype, "content", void 0);
Lesson = tslib_1.__decorate([
    graphql_1.ObjectType()
], Lesson);
exports.Lesson = Lesson;


/***/ }),

/***/ "./libs/course/src/lib/resolvers/course.resolver.ts":
/*!**********************************************************!*\
  !*** ./libs/course/src/lib/resolvers/course.resolver.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResolver = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
//import { UseGuards } from '@nestjs/common'
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
//import { CtxUser, GqlAuthGuard, User } from '@beehive/auth'
const course_service_1 = __webpack_require__(/*! ../course.service */ "./libs/course/src/lib/course.service.ts");
const update_course_input_1 = __webpack_require__(/*! ../dto/update-course.input */ "./libs/course/src/lib/dto/update-course.input.ts");
const course_1 = __webpack_require__(/*! ../models/course */ "./libs/course/src/lib/models/course.ts");
const create_course_input_1 = __webpack_require__(/*! ../dto/create-course.input */ "./libs/course/src/lib/dto/create-course.input.ts");
let CourseResolver = class CourseResolver {
    constructor(service) {
        this.service = service;
    }
    courses() {
        return this.service.courses();
    }
    course(id) {
        console.log(id);
        return this.service.course(id);
    }
    // @UseGuards(GqlAuthGuard)
    createCourse(/*@CtxUser() user: User,*/ input) {
        return this.service.createCourse(/*user.id,*/ input);
    }
    //  @UseGuards(GqlAuthGuard)
    updateCourse(/*@CtxUser() user: User,*/ id, input) {
        return this.service.updateCourse(/*user.id,*/ id, input);
    }
    //  @UseGuards(GqlAuthGuard)
    deleteCourse(/*@CtxUser() user: User,*/ id) {
        return this.service.deleteCourse(/*user.id,*/ id);
    }
};
tslib_1.__decorate([
    graphql_1.Query(() => [course_1.Course], { nullable: true }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CourseResolver.prototype, "courses", null);
tslib_1.__decorate([
    graphql_1.Query(() => course_1.Course, { nullable: true }),
    tslib_1.__param(0, graphql_1.Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], CourseResolver.prototype, "course", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => course_1.Course, { nullable: true }),
    tslib_1.__param(0, graphql_1.Args('input')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof create_course_input_1.CreateCourseInput !== "undefined" && create_course_input_1.CreateCourseInput) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CourseResolver.prototype, "createCourse", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => course_1.Course, { nullable: true }),
    tslib_1.__param(0, graphql_1.Args('id')),
    tslib_1.__param(1, graphql_1.Args('input')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_b = typeof update_course_input_1.UpdateCourseInput !== "undefined" && update_course_input_1.UpdateCourseInput) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CourseResolver.prototype, "updateCourse", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => Boolean, { nullable: true }),
    tslib_1.__param(0, graphql_1.Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], CourseResolver.prototype, "deleteCourse", null);
CourseResolver = tslib_1.__decorate([
    graphql_1.Resolver(),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof course_service_1.CourseService !== "undefined" && course_service_1.CourseService) === "function" ? _c : Object])
], CourseResolver);
exports.CourseResolver = CourseResolver;


/***/ }),

/***/ "./libs/course/src/lib/resolvers/lesson.resolver.ts":
/*!**********************************************************!*\
  !*** ./libs/course/src/lib/resolvers/lesson.resolver.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonResolver = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
//import { CtxUser, GqlAuthGuard, User } from '@beehive/auth'
//import { UseGuards } from '@nestjs/common'
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const course_service_1 = __webpack_require__(/*! ../course.service */ "./libs/course/src/lib/course.service.ts");
const create_lesson_input_1 = __webpack_require__(/*! ../dto/create-lesson.input */ "./libs/course/src/lib/dto/create-lesson.input.ts");
const update_lesson_input_1 = __webpack_require__(/*! ../dto/update-lesson.input */ "./libs/course/src/lib/dto/update-lesson.input.ts");
const lesson_1 = __webpack_require__(/*! ../models/lesson */ "./libs/course/src/lib/models/lesson.ts");
let LessonResolver = 
//@UseGuards(GqlAuthGuard)
class LessonResolver {
    constructor(service) {
        this.service = service;
    }
    createLesson(
    /*@CtxUser() user: User, */ courseId, input) {
        return this.service.createLesson(/*user.id, */ courseId, input);
    }
    updateLesson(
    /*@CtxUser() user: User, */
    courseId, lessonId, input) {
        return this.service.updateLesson(/*user.id,*/ courseId, lessonId, input);
    }
    deleteLesson(
    /*@CtxUser() user: User,*/
    courseId, lessonId) {
        return this.service.deleteLesson(/*user.id,*/ courseId, lessonId);
    }
};
tslib_1.__decorate([
    graphql_1.Mutation(() => lesson_1.Lesson, { nullable: true }),
    tslib_1.__param(0, graphql_1.Args('courseId')),
    tslib_1.__param(1, graphql_1.Args('input')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_a = typeof create_lesson_input_1.CreateLessonInput !== "undefined" && create_lesson_input_1.CreateLessonInput) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LessonResolver.prototype, "createLesson", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => lesson_1.Lesson, { nullable: true }),
    tslib_1.__param(0, graphql_1.Args('courseId')),
    tslib_1.__param(1, graphql_1.Args('lessonId')),
    tslib_1.__param(2, graphql_1.Args('input')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, typeof (_b = typeof update_lesson_input_1.UpdateLessonInput !== "undefined" && update_lesson_input_1.UpdateLessonInput) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LessonResolver.prototype, "updateLesson", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => Boolean, { nullable: true }),
    tslib_1.__param(0, graphql_1.Args('courseId')),
    tslib_1.__param(1, graphql_1.Args('lessonId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], LessonResolver.prototype, "deleteLesson", null);
LessonResolver = tslib_1.__decorate([
    graphql_1.Resolver()
    //@UseGuards(GqlAuthGuard)
    ,
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof course_service_1.CourseService !== "undefined" && course_service_1.CourseService) === "function" ? _c : Object])
], LessonResolver);
exports.LessonResolver = LessonResolver;


/***/ }),

/***/ "./libs/data/src/index.ts":
/*!********************************!*\
  !*** ./libs/data/src/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/data.module */ "./libs/data/src/lib/data.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/data.service */ "./libs/data/src/lib/data.service.ts"), exports);


/***/ }),

/***/ "./libs/data/src/lib/data.module.ts":
/*!******************************************!*\
  !*** ./libs/data/src/lib/data.module.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const data_service_1 = __webpack_require__(/*! ./data.service */ "./libs/data/src/lib/data.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let DataModule = class DataModule {
};
DataModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [],
        providers: [data_service_1.DataService],
        exports: [data_service_1.DataService],
    })
], DataModule);
exports.DataModule = DataModule;


/***/ }),

/***/ "./libs/data/src/lib/data.service.ts":
/*!*******************************************!*\
  !*** ./libs/data/src/lib/data.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let DataService = class DataService extends client_1.PrismaClient {
    constructor(config) {
        super();
        this.config = config;
        this.defaultAdmin = this.config.get('admin');
    }
    onModuleDestroy() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.$disconnect();
        });
    }
    onModuleInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.$connect();
            yield this.ensureAdminUser();
        });
    }
    createUser({ email, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.user.create({
                data: {
                    email,
                    password,
                },
            });
        });
    }
    findUserByEmail(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.user.findFirst({
                where: {
                    email,
                },
            });
        });
    }
    findUserById(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.user.findFirst({
                where: {
                    id: userId,
                },
            });
        });
    }
    ensureAdminUser() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Check if we have an admin
            const found = yield this.findUserByEmail(this.defaultAdmin.email);
            if (found) {
                common_1.Logger.log(`Admin user: ${found.email}`, 'DataService');
                return true;
            }
            // If not, create it for us
            const created = yield this.createUser(this.defaultAdmin);
            common_1.Logger.log(`Created Admin user: ${created.email}`, 'DataService');
        });
    }
};
DataService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], DataService);
exports.DataService = DataService;


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/padron/proy/nx-ionic/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map