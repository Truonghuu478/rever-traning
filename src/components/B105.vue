<!--Bài 105: Viết chương trình nhập 1 số nguyên có 2 chữ số.  Hãy in ra cách đọc của số nguyên này-->
<template>
  <form class="form-group card text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">105: Viết chương trình nhập 1 số nguyên có 2 chữ số. Hãy in ra cách đọc của số
      nguyên này</label>
    <input v-model="n" class="form-control" placeholder="Nhập số nguyên n :"/>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p v-show="isSubmit">Kết quả :  <span class="font-weight-bold">{{ results }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      results: '',
      isSubmit: false
    }
  },
  methods: {
    readNumber(n) {
      let hang_don_vi = n % 10
      let hang_chuc = Math.floor(n / 10)
      let results = ""
      switch (hang_chuc) {
        case 1 :
          results += "mười ";
          break
        case 2 :
          results += "hai mươi ";
          break
        case 3 :
          results += "ba mươi ";
          break
        case 4 :
          results += "bốn mươi ";
          break
        case 5 :
          results += "năm mươi ";
          break
        case 6 :
          results += "sáu mươi ";
          break
        case 7 :
          results += "bảy mươi ";
          break
        case 8 :
          results += "tám mươi ";
          break
        case 9 :
          results += "chín mươi ";
          break
        default:
          break
      }
      switch (hang_don_vi) {
        case 1 :results += n > 10 ? "mốt" : "một";break
        case 2 :results += "hai";break
        case 3 :results += "ba";break
        case 4 :results += n < 15? "bốn" : "tư";break
        case 5 :results += n < 10 ? "năm" : "lăm";break
        case 6 :results += "sáu";break
        case 7 :results += "bảy";break
        case 8 :results += "tám";break
        case 9 :results += "chín";break
        default:break
      }
      return results
    },
    submit() {
      let n = parseInt(this.n)
      if (isNaN(n)) {
        alert("Bài 105 : vui lòng nhập n bằng số ")
      } else if(n < 0 || n > 99){
        alert("Bài 105 : vui lòng nhập n >= 0 và  n <= 99 ")
      }else{
        this.results = this.readNumber(n)
        this.isSubmit = true
      }
    }
  }
}
</script>