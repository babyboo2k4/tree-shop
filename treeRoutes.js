import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Tree from '../models/tree';
import treerepository from '../repositories/tree-repository';

const app = express();
const router = express.Router();

app.use(bodyParser.json());

export const getAll = () => {
    return treerepository.findAll();
};

export const getDetail = (id) => {
    return Tree.findById(id);
};

export const store = async (storeData) => {
    // kiểm tra trùng lặp
    // mã hóa dữ liệu
    // storeData.createdAt = Date.now();
    return treerepository.save(storeData);
};

export const update = async (id, updateData) => {
    const existingTree = await treerepository.findById(id);
    if (!existingTree) {
        throw new Error('Tree is not found');
    }
    // lấy ra bản ghi cũ và thay đổi giá trị mới
    existingTree.treeName = updateData.treeName;
    return treerepository.update(existingTree);
};

export const deleteTree = async (id) => {
    const existingTree = await treerepository.findById(id);
    if (!existingTree) {
        throw new Error('Tree is not found');
    }
       return treerepository.update(existingTree);
};
