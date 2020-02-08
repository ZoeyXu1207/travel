import axios from 'axios';

let api = 'http://vue.thexxdd.cn';

export const banner = () => {
    return axios.get((api + "/tourism/"));
}

export const content = (loanend) => {
    return axios.get((api + "/homes/?page=" + loanend));
}

export const goods = (goodsId) => {
    return axios.get((api + "/goods/" + goodsId) + '/');
}

export const speechend = (params) => {
    return axios.post((api + "/speech/"), params);
}

//搜索
export const search = (searchid) => {
    return axios.get((api + "/goods/?search=") + searchid);
}

//发送验证码
export const getcode = (params) => {
    return axios.post((api + "/codes/"), params)
}

//注册
export const register = (params) => {
    return axios.post((api + "/users/"), params)
}

//登录
export const login = (params) =>{
	return axios.post((api + "/login/"), params);
}

//判断攻略是否收藏
export const getcoll = (goodsId) =>{
	return axios.get((api + "/collect/" + goodsId) + '/');
}

//收藏
export const collect = (params) =>{
	return axios.post((api + "/collect/"), params);
}

//取消收藏
export const delcoll = (collId) =>{
	return axios.delete((api + "/collect/" + collId) + '/');
}

//我的收藏

export const mycoll = () => {
    return axios.get((api + "/collect/"))
}