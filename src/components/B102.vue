<!--Bài 102: Viết chương trình nhập vào 1 ngày ( ngày, tháng, năm). Tìm ngày kế ngày vừa nhập (ngày, tháng, năm)-->
<template>
  <form class="form-group  text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 102: Viết chương trình nhập vào 1 ngày ( ngày, tháng, năm). Tìm ngày kế ngày vừa nhập (ngày, tháng, năm)</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập ngày :</label>
        <input v-model="day" class="form-control" placeholder="Nhập ngày :"/>
      </div>
      <div class="form-group w-50">
        <label class="form-label">Nhập tháng :</label>
        <input v-model="month" class="form-control" placeholder="Nhập tháng :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập năm :</label>
        <input v-model="year" class="form-control" placeholder="Nhập năm :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Thưc hiện
    </button>
    <p v-show="isSubmit"> Kết quả : Ngày tháng năm kế tiếp là : <span class="font-weight-bold">{{ results }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      day:null,
      month: null,
      year: null,
      results: "",
      isSubmit: false
    }
  },
  methods: {
    findTheNextDay(day,month,year){
      let nextDay = day
      let nextMonth = month
      let nextYear = year
      let days = this.dayOfMonth(month,year)
      if(day < days){
        nextDay ++
      }else if(month < 12){
        nextDay =1
        nextMonth ++
      }else{
        nextDay = nextMonth = 1
        nextYear ++
      }
      return  ` ${nextDay} / ${nextMonth} / ${nextYear}`
    },
  dayOfMonth(month,year){
  switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      return 31;
    case 4: case 6: case 9 : case 11:
      return 30
    case 2:
      if(year % 4 === 0 && year %100 !== 0 || year %400 === 0){
        return 29
      }else{
        return 28
      }
  }
},
    submit() {
      let day = +this.day
      let month = +this.month
      let year = +this.year
      if (isNaN(month) || isNaN(year) || isNaN(day) || parseInt(year) !== year || parseInt(month) !== month ||
          parseInt(day) !== day|| month < 1  || month > 12 || year > 5000 ||  day < 1 || day > this.dayOfMonth(month,year)) {
        alert("B101 : Ngày, tháng, năm không hợp lệ, vui lòng nhập lại!")
      } else {
        this.results = this.findTheNextDay(day,month,year)
        this.isSubmit = true
      }
    }
  }
}
</script>