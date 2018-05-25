<template>
  <div class="page1">
    <router-view/>
  </div>
</template>

<script>
// import { getUserListPage, addUser } from '../src/api/api/api.js'
import axios from 'axios'
export default {
  created() {
    // let postData = {
    //   apiparams: {
    //     params: {
    //       campusid: 4210,
    //       stuid: 2231214,
    //       termCode: '171802'
    //     },
    //     readonly: true
    //   }
    // }

    // 拿到token并且加到之后要用到的地方，document.cookie = 'JSSSID_COOKIE=' + response.data.data.token
    const params = new URLSearchParams()
    const loginQueryParams = {
      params: {
        loginName: 'dddddddd',
        password: 'zaq1234'
      },
      readonly: true
    }
    params.append('apiparams', JSON.stringify(loginQueryParams))
    axios
      .post('http://localhost:8080/weixt/api/user_user_login', params, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
      .then(response => {
        console.log(response)
        document.cookie = 'JSSSID_COOKIE=' + response.data.data.token
        // 这里为路由配置跳转这个动作完成之后跳转到timeTable
        this.$router.push({
          name: 'timeTable'
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: { campusid: 3886, classid: 34802, stuid: 2230248, termcode: '171801' }
// })
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.page1 {
  width: 375px;
  height: 667px;
  background-color: rgba(223, 248, 252, 1);
}
</style>
