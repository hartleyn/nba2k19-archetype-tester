/*
import { FETCH_POST } from './types';
import { BASE_PATH } from '../config/config';
import axios from 'axios';


export const fetchPostById = () => dispatch => {
	axios({
		url: BASE_PATH + '/blog/posts/1/',
		method: 'get',
	})
	.then(res => dispatch({
		type: FETCH_POST,
		payload: res.data,
	}))
	.catch(error => console.error(error));
}
*/
