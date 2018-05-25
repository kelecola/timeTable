<template>
  <div class="timeTable__wrapper">
    <table class="timeTable__content--page">
      <tr class="timeTable__content--days">
        <td>节</td>
        <td>星期一</td>
        <td>星期二</td>
        <td>星期三</td>
        <td>星期四</td>
        <td>星期五</td>
      </tr>
      <tr class="timeTable__content--course">
        <td class="">1</td>
      </tr>
      <tr class="timeTable__content--course">
        <td class="">2</td>
      </tr>
      <tr class="timeTable__content--course">
        <td class="">3</td>
      </tr>
      <tr class="timeTable__content--course">
        <td class="">4</td>
      </tr>
      <tr class="timeTable__content--course">
        <td class="">5</td>
      </tr>
      <tr class="timeTable__content--course">
        <td class="">6</td>
      </tr>
      <tr class="timeTable__content--course">
        <td class="">7</td>
      </tr>
      <tr class="timeTable__content--course">
        <td class="">8</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    const params = new URLSearchParams()
    // 设置入参
    const timeTableParams = {
      // 参数是没有问题了
      params: {
        campusid: 4210,
        stuid: 1561231362,
        termCode: '171802'
      },
      readonly: true
    }
    // 将params推入apiparams里面是格式要求的
    params.append('apiparams', JSON.stringify(timeTableParams))
    // axios.post的请求方式
    axios
      .post('http://localhost:8080/weixt/api/schedule_listForStudent', params, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    // 用箭头法不要用function
    // .catch(function(error) {
    //   console.log(error)
    // })
  }
}
</script>

<style scoped>
tr {
  height: height/9;
}
td {
  /* border: 1px solid red; */
  text-align: center;
}
.timeTable__wrapper,
.timeTable__content--page {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}
.timeTable__content--days td {
  height: 45px;
}
</style>
