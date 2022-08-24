const uniqueId = () => {
    return Math.round(Math.random() * 1000000);
}


  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    {
      id: 'transactionId',
      numeric: true,
      disablePadding: true,
      label: 'Transaction ID',
    },
    {
      id: 'category',
      numeric: false,
      disablePadding: false,
      label: 'Category',
    },
    {
      id: 'amount',
      numeric: true,
      disablePadding: false,
      label: 'Amount',
    },
    {
      id: 'dateTime',
      numeric: false,
      disablePadding: false,
      label: 'Date and Time',
    },
    {
      id: 'transactionType',
      numeric: false,
      disablePadding: false,
      label: 'Transaction Type',
    },
    {
      id: 'description',
      numeric: false,
      disablePadding: false,
      label: 'Description',
    },
    {
      id: 'actions',
      numeric: false,
      disablePadding: false,
      label: 'Actions',
    }
  ];

  export {
    uniqueId,stableSort,getComparator,headCells
}