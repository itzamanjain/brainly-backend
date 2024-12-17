"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app;
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.userName || !req.body.password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    const { userName, password } = req.body;
    const user = yield db_1.User.findOne({ userName });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }
    // const hashedPassword = await bcrypt.hash(password,10);
    const hashedPassword = password;
    try {
        const newUser = new db_1.User({ userName, password: hashedPassword });
        yield newUser.save();
        return res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        return res.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
    }
}));
app.post("/api/v1/login", (req, res) => {
});
app.delete("api/v1/content", (req, res) => {
});
app.get("api/v1/content", (req, res) => {
});
app.post("api/v1/content", (req, res) => {
});
app.post("api/v1/brain/share", (req, res) => {
});
app.get("api/v1/brain/:sharelink", (req, res) => {
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
