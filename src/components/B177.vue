<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold"
      >Bài 177: Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn
      [x,y] cho trước</label>
    <div class="d-flex">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :" />
        <p>{{ list }}</p>
      </div>
      <div class="form-group w-50 d-flex">
        <label class="form-label">Nhập x</label>
        <input v-model="x" class="form-control" placeholder="nhập x :" />
        <label class="form-label">Nhập y</label>
        <input v-model="y" class="form-control" placeholder="nhập y :" />
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
      if (this.validate(this.n, "B176")) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    perform() {
      if (this.x > this.y || !this.list.length) {
        alert("Thông tin không hợp lệ");
        return;
      }

      if (this.validate(this.x, "B177") || this.validate(this.y, "B177")) {
        let result = "";
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i] < this.y && this.list[i] > this.x) {
            result += " " + i;
          }
        }
        this.results = result ? `Danh sách giá trị thuộc trong đoạn ${this.x},${this.y}] là :` + result : `Danh sách không có  giá trị thuộc trong đoạn ${this.x},${this.y}]`;
        this.isSubmit = true;
      }
    },
  },
};
</script>
