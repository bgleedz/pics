import axios from 'axios';

export default axios.create ({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 
			'Client-ID NG_xEK7dWQ53DfWM9tKlkmOFCQpI7im7VwDTmbbk_8g'
	}

});