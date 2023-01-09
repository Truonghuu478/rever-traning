<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold">Bài 189: Hãy liệt kê các giá trị trong mảng 1 chiều các số nguyên có chữ số đầu tiên là chữ số lẻ</label>
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
      if (this.validate(this.n, "B189",0)) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    perform() {
      if (!this.list.length) {
        alert("Thông tin không hợp lệ");
        return;
      }
      let results = ""

      for (let i = 0; i < this.list.length; i++) {
        if(`${this.list[i].slice(0,1)}` % 2 !== 0){
            results += " "+this.list[i]
        }
      }
      this.results = results ? "Mảng có các giá trị bắt đầu bằng chữ số lẻ là : " + results : "Mảng không có giá trị thoả điều kiện"

      this.isSubmit = true;
    },
  },
};
</script>
