<!--Bài 101: Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày-->
<template>
  <form class="form-group card text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 101: Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày</label>
    <div class="d-flex ">
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
    <p v-show="isSubmit"> Kết quả : <span class="font-weight-bold">{{ results }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      month: null,
      year: null,
      results: "",
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let month = parseFloat(this.month)
      let year = parseFloat(this.year)

      if (isNaN(month) || isNaN(year)|| month < 1 || month > 12 || year > 2021) {
        alert("B101 : Tháng, năm không hợp lệ, vui lòng nhập lại!")
      } else {
        let results = ""
        switch (month){
          case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            results = `Tháng ${month} năm ${year} có 31 ngày`
            break;
          case 4: case 6: case 9 : case 11:
            results = `Tháng ${month}} năm ${year} có 30 ngày`
            break;
          case 2:
            if(year % 4 === 0 && year %100 !== 0 || year %400 === 0){
              results = `Tháng ${month}} năm ${year} có 29 ngày`
            }else{
              results = `Tháng ${month}} năm ${year} có 28 ngày`
            }
        }
        this.results = results
        this.isSubmit = true
      }

    }
  }
}
</script>