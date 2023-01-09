<!--Bài 115: Viết chương trình nhập họ tên, điểm toán, điểm văn của 1 học sinh. Tính điểm trung bình và xuất ra kết quả-->
<template>
  <form class="form-group card  text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 115: Viết chương trình nhập họ tên, điểm toán, điểm văn của 1 học sinh. Tính
      điểm trung bình và xuất ra kết quả
    </label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập họ tên :</label>
        <input v-model="hoTen" class="form-control" placeholder="Nhập họ tên :"/>
      </div>
      <div class="form-group w-50">
        <label class="form-label">Nhập điểm toán :</label>
        <input v-model="diemToan" class="form-control" placeholder="Nhập điểm toán :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập điểm văn :</label>
        <input v-model="diemVan" class="form-control" placeholder="Nhập điểm văn :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p v-show="isSubmit"> Kết quả : điểm trung bình của <span class="font-weight-bold">{{ hoTen }}</span> là <span
        class="font-weight-bold">{{ DTB }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      hoTen: null,
      diemVan: null,
      diemToan: null,
      DTB: 0,
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let hoTen = +this.hoTen
      let diemVan = +this.diemVan
      let diemToan = +this.diemToan
      if (!hoTen || isNaN(diemVan) || isNaN(diemToan) || diemToan < 0 || diemToan < 0) {
        alert("B115 : Thông tin không hợp lệ, vui lòng nhập lại!")
      } else {
        this.DTB = diemVan + diemToan / 2
        this.isSubmit = true
      }
    }
  }
}
</script>