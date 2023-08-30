import React, { Component, Fragment } from 'react';
import EditUserForm from "./EditUserForm";
import { withStyles } from "@material-ui/core/styles";
import {  Modal } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import AddUserForm from "./AddUserForm";
import Navbar from './Navbar';
import "../App.css";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

class DataGridTypeMatrixTable extends Component {

  constructor(props) {
    super(props);

    this.state = { open: false, edit: false, results: [] };
    this.array = [];
    this.currentUser = [];
    this.editing = false;
    this.arrayEdit = {};
  }

  loadContentFromServer() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({ results: json });
      });
  }

  componentDidMount() {
    this.loadContentFromServer();
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addUser = user => {
    user.id = this.state.results.length + 1;
    const updatedResults = [...this.state.results, user];
    this.setState({ results: updatedResults });
    this.handleClose();
  };

  updateUser = (id, updatedUser) => {
    const updatedResults = this.state.results.map(user =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
    this.setState({ results: updatedResults });
    this.handleClose();
  };

  editButton = user => {
    this.setState({ edit: true, arrayEdit: { ...user, acao: '' } });
    this.handleOpen();
  };

  render() {
    const classes = styles();
    const data = this.state.results.map(result => [result.id, result.name, result.username, result.email, '']);
    const open = this.state.open;
    const editing = this.state.edit;
    const currentUser = this.state.arrayEdit;

    return (
      
      <div className="size">
      
	  <div className={classes.root}>
       
	  <MUIDataTable
		title={"Lista de Usuários"}
		data={data}
		columns={columns(this.editButton)}
		options={options}
	  />

	  <Modal
		aria-labelledby="simple-modal-title"
		aria-describedby="simple-modal-description"
		open={open}
		onClose={this.handleClose}
	  >
		<div className="modal">
		  {editing ? (
			<Fragment>
			  <h2 id="simple-modal-title">Editar Usuário</h2>
			  <div id="simple-modal-description">
				<EditUserForm
				  editing={editing}
				  currentUser={currentUser}
				  updateUser={this.updateUser}
				/>
			  </div>
			</Fragment>
		  ) : (
			<Fragment>
			  <h2 id="simple-modal-title">Adicionar Usuário</h2>
			  <div id="simple-modal-description">
				<AddUserForm addUser={this.addUser} />
			  </div>
			</Fragment>
		  )}
		</div>
	  </Modal>
	</div></div>
    );
  }
}

const columns = editButton => [
  { name: 'ID', options: { filter: false } },
  { name: 'Insurance Name', options: { filter: false } },
  { name: 'Product Name', options: { filter: false } },
  { name: 'Claim Status', options: { filter: false } },
  { name: 'Premium', options: { filter: false } },
  { name: 'Min-Max Age', options: { filter: false } },
  { name: 'Illustration', options: { filter: false } },
  { name: 'More Details', options: { filter: false } },
  {
    name: "Premium",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta) => (
        <button onClick={() => editButton(tableMeta.rowData)} className="button muted-button">Editar</button>
      ),
    },
  },
];

const options = {
  filter: true,
  filterType: "dropdown",
  responsive: "simple",
};

export default withStyles(styles)(DataGridTypeMatrixTable);
