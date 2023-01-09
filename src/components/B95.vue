<!-- Bài 95: Viết chương trình nhập 3 số thực. Hãy thay tất cả các số âm bằng trị tuyệt
      đối của nó-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 95: Viết chương trình nhập 3 số thực. Hãy thay tất cả các số âm bằng trị tuyệt
      đối của nó</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập a :</label>
        <input v-model="a" class="form-control" placeholder="Nhập n :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập b :</label>
        <input v-model="b" class="form-control" placeholder="Nhập x :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập c :</label>
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
        alert("B95 : Vui lòng nhập a,b,c bằng số !")
      } else {
        this.results = `|${a}| = ${a > 0 ? a : a * -1} ; |${b}| = ${b > 0 ? b : b * -1} ; |${c}| = ${c > 0 ? c : c * -1}`
        this.isSubmit = true
      }

    }
  }
}
</script>