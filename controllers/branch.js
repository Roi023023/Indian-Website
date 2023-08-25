const BranchSerivce = require('../services/branches');

const createBranch = async (req, res) => {
    const newBranch = await BranchSerivce.createBranch(req.body.city, req.body.country, req.body.established);
    res.json(newBranch);
};

const getBranches = async (req, res) => {
    const Branches = await BranchSerivce.getBranches();
    res.json(Branches);
};

const getBranch = async (req, res) => {
    const Branch = await BranchSerivce.getBranchById(req.params.id);
    if (!Branch) {
        return res.status(404).json({ errors: ['Branch not found'] });
    }
    res.json(Branch);
};

const updateBranch = async (req, res) => {
    const branch = await BranchSerivce.updateBranch(req.params.id, req.body.city, req.body.country, req.body.established);
    if (!branch) {
      return res.status(404).json({ errors: ['Branch not found'] });
    }
    res.json(branch);
  };

  const deleteBranch = async (req, res) => {
    const Branch = await BranchSerivce.deleteBranch(req.params.id);
    if (!Branch) {
      return res.status(404).json({ errors: ['Branch not found'] });
    }
  
    res.send();
  };

  module.exports = {
    createBranch,
    getBranches,
    getBranch,
    updateBranch,
    deleteBranch
  };