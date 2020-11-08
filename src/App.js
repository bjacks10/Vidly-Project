import React, {Component} from 'react';
import Movies from './components/movies';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './components/logout';
import auth from './services/authService';
import ProtectedRoute from './components/common/protectedRoute';

class App extends Component {
	state={};
	componentDidMount(){
		const user = auth.getCurrentUser();
		this.setState({user});
	}
	
	render(){
		const{user} = this.state;
		return (
			<React.Fragment>
			<ToastContainer/>
			<NavBar user={user} />
			<main className="container">
				<Switch>
					<Route path="/logout" component={Logout} />
					<Route path="/login" component={LoginForm} />
					<ProtectedRoute path="/movies/:id" component={MovieForm}  />
					<Route path="/movies" 
						render={props => <Movies {...props} user={this.state.user} />} 
					/>
					<Route path="/customers" component={Customers} />
					<Route path="/rentals" component={Rentals} />
					<Route path="/register" component={RegisterForm} />
					<Route path="/not-found" component={NotFound} />
					<Redirect from="/" exact to="/movies" />
					<Redirect to="/not-found" />
				</Switch>
			</main>
			</React.Fragment>
		);
	}
}

export default App;
