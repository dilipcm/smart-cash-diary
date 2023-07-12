import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect, useState } from "react";
import { uniqueId } from "../utils";

const theme = createTheme();
function AddTransaction() {
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [dateTime, setDateTime] = React.useState(new Date());
  const [transaction_type, setTransactionType] = React.useState("");
  const [description, setDescription] = React.useState("");
  try {
    var x = JSON.parse(localStorage.getItem("smartcashdiary"));
    if (x == null) {
      var initialLocalState = [];
    } else {
      initialLocalState = x;
    }
  } catch {
    initialLocalState = [];
  }
  const [newtransaction, setNewTransaction] = useState(initialLocalState);

  // const amount = React.useRef(0);
  // const description = React.useRef("");

  const saveState = () => {
    localStorage.setItem("smartcashdiary", JSON.stringify(newtransaction));
  };

  saveState();

  const handleAddNewTransaction = (item) => {
    let newtransactions = [...newtransaction, item];
    setNewTransaction(newtransactions);
  };

  const handleTransactionSubmit = (event) => {
    event.preventDefault();

    const data = {
      transactionId: uniqueId(),
      category: category,
      amount: +amount,
      dateTime: dateTime.toLocaleString("en-IN"),
      transactionType: transaction_type,
      description: description,
    };

    handleAddNewTransaction(data);

    setCategory("");
    setAmount("");
    setDateTime(new Date());
    setTransactionType("");
    setDescription("");
  };

  useEffect(() => {
    let localState = JSON.parse(localStorage.getItem("smartcashdiary"));
    if (localState) {
      setNewTransaction(localState);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{ alignItems: "left" }}
          gap={2}
        >
          <Paper container="true">
            <CssBaseline />
            <Box
              fullWidth
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h3">Add Transaction</Typography>

              <Box
                component="form"
                onSubmit={handleTransactionSubmit}
                id="transaction_form"
                display="grid"
                sx={{ mt: 1, mx: 4, width: "85%" }}
                gridTemplateColumns="repeat(12, 1fr)"
                gap={2}
              >
                <Box gridColumn="span 12">
                  <FormControl fullWidth>
                    <InputLabel id="category-label">
                      {" "}
                      Select Category
                    </InputLabel>
                    <Select
                      labelId="category-label"
                      id="category"
                      value={category}
                      required
                      label="Category"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <MenuItem value="Salary">Salary</MenuItem>
                      <MenuItem value="Gift Voucher">Gift Voucher</MenuItem>
                      <MenuItem value="CashBacks">CashBacks</MenuItem>
                      <MenuItem value="Groceries">Groceries</MenuItem>
                      <MenuItem value="Dream11">Dream11</MenuItem>
                      <MenuItem value="Recharge">Recharge</MenuItem>
                      <MenuItem value="Rent">Rent</MenuItem>
                      <MenuItem value="Gas Bill">Gas Bill</MenuItem>
                      <MenuItem value="Electricity Bill">
                        Electricity Bill
                      </MenuItem>
                      <MenuItem value="DTH Bill">DTH</MenuItem>
                      <MenuItem value="Loan">Loan</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box gridColumn="span 12">
                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    name="amount"
                    value={amount}
                    label="Enter Amount"
                    type="number"
                    // id="amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Box>
                <Box gridColumn="span 12">
                  <LocalizationProvider
                    className="FormGroup"
                    dateAdapter={AdapterDateFns}
                    fullWidth
                  >
                    <Stack spacing={3}>
                      <DateTimePicker
                        required
                        label="Choose Date and Time"
                        renderInput={(params) => <TextField {...params} />}
                        value={dateTime}
                        onChange={(newDateTime) => {
                          setDateTime(newDateTime);
                        }}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
                <Box gridColumn="span 12">
                  <FormControl fullWidth>
                    <InputLabel id="transaction-type-label">
                      Select Transaction Type
                    </InputLabel>
                    <Select
                      labelId="transaction-type-label"
                      id="transaction_type"
                      value={transaction_type}
                      required
                      label="Transaction Type"
                      onChange={(e) => setTransactionType(e.target.value)}
                    >
                      <MenuItem value="income">Income</MenuItem>
                      <MenuItem value="expense">Expense</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box gridColumn="span 12">
                  <TextareaAutosize
                    margin="normal"
                    required
                    aria-label="minimum height"
                    type="text"
                    minRows={3}
                    value={description}
                    style={{ width: "340px" }}
                    placeholder="Description goess here..."
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Box>
                {/* <Box gridColumn="span 12"> */}
                <Box gridColumn="span 6">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 2 }}
                  >
                    Add Transaction
                  </Button>
                </Box>
                <Box gridColumn="span 6">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 2 }}
                  >
                    Add Transaction
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default AddTransaction;
