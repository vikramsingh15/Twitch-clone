import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import Navbar from "./navbar";

const App =()=>{
	return(
		<div>
			<BrowserRouter>
				<Navbar />
				<Route path="/" exact component={StreamList} />
				<Route path="/streams/new" exact component={StreamCreate} />
				<Route path="/streams/edit" exact component={StreamEdit} />
				<Route path="/streams/delete" exact component={StreamDelete} />
				<Route path="/streams/show" exact component={StreamShow} />
			</BrowserRouter>
		</div>)
}

export default App;