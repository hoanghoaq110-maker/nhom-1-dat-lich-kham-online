import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default function (to, from, next) {
  var token = localStorage.getItem("token_admin");
  axios
    .get("http://127.0.0.1:8000/api/admin/check-token", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      if (res.data.status) {
        localStorage.setItem("ho_ten_admin", res.data.data.ho_ten);
        localStorage.setItem("admin_chuc_vu", res.data.data.ten_chuc_vu);
        next();
      } else {
        next("/admin/login");
        toaster.error(res.data.message);
      }
    });
}
