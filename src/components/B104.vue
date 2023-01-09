<!--Bài 104: Viết chương trình nhập ngày, tháng, năm. Tính xem ngày đó là ngày thứ bao nhiêu trong năm-->
<template>
  <form class="form-group  text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 104: Viết chương trình nhập ngày, tháng, năm. Tính xem ngày đó là ngày thứ bao nhiêu trong năm</label>
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
    <p v-show="isSubmit"> Kết quả : <span class="font-weight-bold">{{results}}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      day:null,
      month: null,
      year: null,
      s: 0,
      results :"",
      isSubmit: false
    }
  },
  methods: {
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
      if (isNaN(month) || isNaN(day) || isNaN(year) || parseInt(year) !== year || parseInt(month) !== month ||
          parseInt(day) !== day|| month < 1  || month > 12 || year > 5000 ||  day < 1 || day > this.dayOfMonth(month,year)) {
        alert("B101 : Ngày, tháng, năm không hợp lệ, vui lòng nhập lại!")
      } else {
        let s = day;
        for(let i = 1; i < month; i++) {
          switch (i) {
            case 4: case 6: case 9 : case 11: s+= 30; break;
            case 2: s += (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
              break;
            default: s += 31;
          }
        }
        this.s = s
        this.results = `Ngày ${day} tháng ${month} năm ${year} là ngày thứ ${s} trong năm `
        this.isSubmit = true
      }
    }
  }
}
</script>