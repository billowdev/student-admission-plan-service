"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeleteRQP = exports.handleUpdateRQP = exports.handleCreateRQP = exports.handleGetOneRQP = exports.handleGetAllRQP = void 0;
const responsible_quota_person_service_1 = __importDefault(require("./../services/responsible-quota-person.service"));
const handleGetAllRQP = async (req, res) => {
    try {
        const query = req.query;
        const responsibleQuotaPersons = await responsible_quota_person_service_1.default.getAllRQP(query);
        res.status(200).json({
            message: "get all responsible person was successfully",
            payload: responsibleQuotaPersons
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch responsible quota persons' });
    }
};
exports.handleGetAllRQP = handleGetAllRQP;
const handleGetOneRQP = async (req, res) => {
    try {
        const { id } = req.params;
        const responsibleQuotaPerson = responsible_quota_person_service_1.default.getOneRQP(id);
        if (!responsibleQuotaPerson) {
            res.status(404).json({ message: 'Responsible quota person not found' });
            return;
        }
        res.status(200).json(responsibleQuotaPerson);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Unable to fetch responsible quota person' });
    }
};
exports.handleGetOneRQP = handleGetOneRQP;
const handleCreateRQP = async (req, res) => {
    try {
        const { year, name, surname, agency, phone, quota } = req.body;
        const newResponsibleQuotaPerson = await responsible_quota_person_service_1.default.createRQP({
            year,
            name,
            surname,
            agency,
            phone,
            quota,
        });
        res.status(201).json({
            message: "create responsible quota person was successfully",
            payload: newResponsibleQuotaPerson
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Unable to create responsible quota person' });
    }
};
exports.handleCreateRQP = handleCreateRQP;
const handleUpdateRQP = async (req, res) => {
    try {
        const { id } = req.params;
        const responsibleQuotaPerson = responsible_quota_person_service_1.default.updateRQP(id, req.body);
        if (!responsibleQuotaPerson) {
            res.status(404).json({ message: 'Responsible quota person not found' });
            return;
        }
        res.status(200).json(responsibleQuotaPerson);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Unable to fetch responsible quota person' });
    }
    res.json({ message: "patch Update successfull" });
};
exports.handleUpdateRQP = handleUpdateRQP;
const handleDeleteRQP = async (req, res) => {
    try {
        await responsible_quota_person_service_1.default.deleteRQP(req.params.id);
        res.status(200).json({ message: "Delete successful" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Unable to delete responsible quota person" });
    }
};
exports.handleDeleteRQP = handleDeleteRQP;
exports.default = {
    handleGetAllRQP: exports.handleGetAllRQP,
    handleGetOneRQP: exports.handleGetOneRQP,
    handleCreateRQP: exports.handleCreateRQP,
    handleUpdateRQP: exports.handleUpdateRQP,
    handleDeleteRQP: exports.handleDeleteRQP
};
