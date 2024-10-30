import Tree from '../models/tree';

exports.findAll = () => {
    return Tree.find({});
};

exports.findById = (id) => {
    return Tree.findById(id).exec();
};

exports.save = (insertData) => {
    const data = new Tree(insertData);
    return data.save();
};

exports.update = (id, updateData) => {
    return Tree.findByIdAndUpdate(id, updateData, { new: true }).exec();
};

exports.hardDelete = (id) => {  
    return Tree.deleteOne({ _id: id });
};
