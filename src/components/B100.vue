<!--Bài 100: Viết chương trình giải phương trình bậc 2-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold ">B100 : Viết chương trình giải phương trình bậc 2 : ax^2 + bx + c = 0</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập a :</label>
        <input v-model="a" class="form-control" placeholder="Nhập a :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập b :</label>
        <input v-model="b" class="form-control" placeholder="Nhập b :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập c :</label>
        <input v-model="c" class="form-control" placeholder="Nhập c :"/>
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
        alert("B100 : Vui lòng nhập a,b,c bằng số !")
      } else {
        let results = "PT"
        if (a === 0) {
          if (b === 0) {
            if (c === 0) {
              results += " có vô số nghiệm"
            } else {
              results += " vô nghiệm"
            }
          } else {
            let x = -c / b;
            results += " có một nghiệm x = " + x
          }
        } else {
          let delta = Math.pow(-b, 2) - 4 * a * c
          if (delta < 0) {
            results += " vô nghiệm "
          } else if (!results) {
            let x = -b / (2 * a)
            results += " cố một nghiệm kép x = " + x
          } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            results += " có hai nghiệm : x1 = " + x1 + " x2 = " + x2
          }
        }
        this.results = results
        this.isSubmit = true
      }

    }
  }
}
</script>