
<!--Bài 85: Nhập vào tháng của 1 năm. Cho biết tháng thuộc quý mấy trong năm-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 85: Nhập vào tháng của 1 năm. Cho biết tháng thuộc quý mấy trong năm</label>
    <table border="1">
      <thead>
      <tr>
        <th>Quý</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
            <td>Quý 1 trong năm bắt đầu từ tháng 1 đến hết tháng 3</td>
          <td>Quý 2 trong năm bắt đầu từ tháng 4 đến hết tháng 6</td>
          <td>quý 3 trong năm bắt đầu từ tháng 7 đến hết tháng 9</td>
          <td>quý 4 trong năm bắt đầu từ tháng 10 đến hết tháng 12.</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex align-items-center">
      <div  class="form-group w-50  text-left">
        <label class="form-label">Nhập Tháng :</label>
        <input  v-model="month" class="form-control" placeholder="Nhập a :"  />
      </div>
      <div class="form-group  text-left">
        <span class="p-3" v-show="isSubmit"> Kết quả : tháng {{month}} thuộc quý <span class="font-weight-bold">{{precious}}</span></span>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Kiểm tra
    </button>
  </form>
</template>
<script >
export default {
  data(){
    return {
      month:null,
      precious:null,
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let month = +this.month
      if(isNaN(month) ){
        alert("Bài 85 : vui lòng nhập Tháng bằng số !")
      }else if(parseInt(month) !== month){
        alert("Bài 85 : nhập sai tháng, vui lòng nhập lại ")
      } else if(month < 0 || month > 12){
        alert("Bài 85 : vui lòng nhập từ tháng 1 đến tháng 12 !")
      }else {
        if(month > 0 && month <=3){
          this.precious = 1
        }else if(month >3 && month <=6){
          this.precious = 2
        }else if(month > 6 && month <=9){
          this.precious = 3
        }else this.precious = 4
      this.isSubmit = true
      }
    }
  }
}
</script>