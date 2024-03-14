const express = require("express");
const router = express.Router();

const ctrlWrapper = require("../../middlewares/ctrlWrapper");
const addTransaction = require("../../controllers/transaction/addTransaction");
const getAllTransactions = require("../../controllers/transaction/getAllTransactions");
const getAllTransactionsOfType = require("../../controllers/transaction/getAllTransactionsOfType");
const removeTransactionById = require("../../controllers/transaction/removeTransactionById");

router.post("/:transactionType", ctrlWrapper(addTransaction));
router.get("/", ctrlWrapper(getAllTransactions));
router.get("/:transactionType", ctrlWrapper(getAllTransactionsOfType));
router.delete("/:transactionId", ctrlWrapper(removeTransactionById));

module.exports = router;
