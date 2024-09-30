import request from "./request"

// 用户登录
const adminUserLogin = (userName, passwordMd5)=>{
    return request.post('/api/adminUser/login', {
        userName,
        passwordMd5
    })
}

// 获取用户信息
const adminUserProfile = ()=>{
    return request.get('/api/adminUser/profile').then(({resultCode,data})=>{
        if(data){
            data = {
                ...data,
                name: data.nickName,
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            }
        }
        return {resultCode,data}
    })
}

export default {
    adminUserLogin,
    adminUserProfile
}