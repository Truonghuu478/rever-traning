<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold">Bài 194: Cho mảng 1 chiều các số nguyên có nhiều hơn 2 giá trị. Hãy viết hàm liệt kê các cặp giá trị gần nhau nhất</label>
    <div class="d-flex">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :" />
        <p>{{ list }}</p>
      </div>
    </div>

    <div class="d-flex">
      <button
        class="btn btn-success my-3 mr-3"
        type="submit"
        @click.prevent="add">
        add
      </button>
      <button class="btn btn-info my-3" type="click" @click.prevent="reset">
        reset
      </button>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit">
      Kết quả : <span class="font-weight-bold">{{ results }}</span>
    </p>
  </form>
</template>
<script>
import ValidateMixin from "../validate.mixin";

export default {
  mixins: [ValidateMixin],
  data() {
    return {
      n: null,
      list: [],
      results: "",
      isSubmit: false,
    };
  },
  methods: {
    reset() {
      this.list = [];
      this.isSubmit = false;
    },
    add() {
      if (this.validate(this.n, "B194",0)) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    perform() {
      if (this.list.length <= 1) {
        alert("Thông tin không hợp lệ, vui lòng nhập ít nhất 2 phần tử");
        return;
      }
      let results = ""

      for (let i = 0; i < this.list.length; i++) {
        let valueAfter = !isNaN(this.list[i-1]) ? this.list[i-1] : -1
        let valueBefore = !isNaN(this.list[i+1]) ? this.list[i+1] : -1
          if (this.list[i] ===  valueAfter ||  valueBefore === this.list[i]) {
            result += " " + this.list[i]
          }
        }
      this.results = results ? "Mảng có các giá trị bằng nhau liên kề là : " + results : "Mảng không có giá trị thoả điều kiện"

      this.isSubmit = true;
    },
  },
};
</script>
