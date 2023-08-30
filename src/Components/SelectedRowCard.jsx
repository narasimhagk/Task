function SelectedRowCard({ rowData }) {
    // Assuming rowData is an array representing the selected row's data
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Details</h5>
          <p className="card-text">Column 1: {rowData[0]}</p>
          <p className="card-text">Column 2: {rowData[1]}</p>
          {/* Add more rows as needed */}
        </div>
      </div>
    );
  }
  export default SelectedRowCard