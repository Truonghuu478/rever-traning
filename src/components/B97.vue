<!--Bài 97: Viết chương trình nhập 3 cạnh của 1 tam giác, cho biết đó là tam giác gì-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 97: Viết chương trình nhập 3 cạnh của 1 tam giác, cho biết đó là tam giác
      gì </label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập cạnh a :</label>
        <input v-model="a" class="form-control" placeholder="Nhập n :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập cạnh b :</label>
        <input v-model="b" class="form-control" placeholder="Nhập x :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập cạnh c :</label>
        <input v-model="c" class="form-control" placeholder="Nhập x :"/>
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
      a: null,
      b: null,
      c: null,
      results: "",
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let a = parseFloat(this.a)
      let b = parseFloat(this.b)
      let c = parseFloat(this.c)
      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("B97 : Vui lòng nhập a,b,c bằng số !")
      } else {
        let results = "Đây là tam giác"
        if (a === b && b === c) {
          results += " đều "
        } else {
          if (a * a + b * b === c * c || a * c + c * c === b * b || b * b + c * c === a * c) {
            results += " vuông "
          }
          if (a === b || a === c || b === c) {
            results += " cân "
          } else {
            results += " thường "
          }
        }
        this.results = results
        this.isSubmit = true
      }
    }
  }
}
</script>