<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>QUẢN LÝ LỊCH HẸN</b></h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm lịch hẹn
                    </button>
                </div>
                <div class="row mb-2 mt-2 px-3">
                    <div class="col-md-3">
                        <label class="form-label">Bác sĩ</label>
                        <select class="form-select">
                            <option value="">Tất cả bác sĩ</option>
                            <template v-for="(value, index) in list_bac_si" :key="index">
                                <option :value="value.id">{{ value.ho_ten }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">Từ ngày</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">Đến ngày</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">Trạng thái</label>
                        <select class="form-select">
                            <option value="">Tất cả trạng thái</option>
                            <option value="0">Chờ xác nhận</option>
                            <option value="1">Đã xác nhận</option>
                            <option value="2">Đã huỷ</option>
                            <option value="3">Hoàn thành</option>
                        </select>
                    </div>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="bg-primary text-light text-nowrap">
                                <th class="text-center">#</th>
                                <th class="text-center">Bệnh Nhân</th>
                                <th class="text-center">Giờ Hẹn</th>
                                <th class="text-center">Lý Do Khám</th>
                                <th class="text-center">Trạng Thái</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in list_lich_hen" :key="index">
                                <tr class="text-nowrap">
                                    <th class="align-middle text-center">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.ten_benh_nhan }}</td>
                                    <td class="align-middle text-center">{{ value.ngay_dat_hen }}</td>
                                    <td class="align-middle">{{ value.ly_do_kham }}</td>
                                    <td class="align-middle text-center">
                                        <span style="width: 100px;" :class="getTrangThaiClass(value.tinh_trang)">
                                            {{ getTrangThaiText(value.tinh_trang) }}
                                        </span>
                                    </td>
                                    <td class="align-middle text-center d-flex">
                                        <button v-if="value.tinh_trang == 0" data-bs-toggle="modal"
                                            data-bs-target="#xacNhanModal" class="btn btn-success me-2 flex-fill"
                                            style="width: 120px;">
                                            Xác nhận
                                        </button>
                                        <button v-if="value.tinh_trang == 1" data-bs-toggle="modal"
                                            data-bs-target="#donThuocModal" class="btn btn-info me-2 flex-fill"
                                            style="width: 120px;">
                                            Hoàn thành
                                        </button>
                                        <button v-if="value.tinh_trang == 3" data-bs-toggle="modal"
                                            data-bs-target="#chiTietModal" class="btn btn-primary me-2 flex-fill"
                                            style="width: 120px;">
                                            Chi tiết
                                        </button>
                                        <button v-if="value.tinh_trang < 2" class="btn btn-danger flex-fill"
                                            data-bs-toggle="modal" data-bs-target="#deleteModal">
                                            Hủy
                                        </button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Thêm Mới -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thêm Lịch Hẹn</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Bệnh Nhân</label>
                            <select class="form-select">
                                <option value="">-- Chọn bệnh nhân --</option>
                                <template v-for="(value, index) in list_benh_nhan" :key="index">
                                    <option :value="value.id">{{ value.ho_ten }}</option>
                                </template>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Bác Sĩ</label>
                            <select class="form-select">
                                <option value="">-- Chọn bác sĩ --</option>
                                <template v-for="(value, index) in list_bac_si" :key="index">
                                    <option :value="value.id">{{ value.ho_ten }}</option>
                                </template>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Ngày Hẹn</label>
                            <input type="date" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Giờ Hẹn</label>
                            <input type="time" class="form-control" />
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Lý Do Khám</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                        Thêm mới
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xác Nhận Lịch Hẹn -->
    <div class="modal fade" id="xacNhanModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Xác Nhận Lịch Hẹn</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert">
                        Bạn có chắc chắn muốn xác nhận lịch hẹn này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Kê Đơn Thuốc -->
    <div class="modal fade" id="donThuocModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Kê Đơn Thuốc</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Đơn Thuốc</label>
                            <textarea class="form-control" rows="4" placeholder="Nhập đơn thuốc..."></textarea>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Chẩn Đoán</label>
                            <textarea class="form-control" rows="3" placeholder="Nhập chẩn đoán..."></textarea>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Ghi Chú</label>
                            <textarea class="form-control" rows="3" placeholder="Nhập ghi chú..."></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                        Hoàn thành
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Chi Tiết Lịch Hẹn -->
    <div class="modal fade" id="chiTietModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Chi Tiết Lịch Hẹn</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Bệnh Nhân:</label>
                            <p>Nguyễn Văn A</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Bác Sĩ:</label>
                            <p>Nguyễn Văn A</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Ngày Hẹn:</label>
                            <p>2025-01-01</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Lý Do Khám:</label>
                            <p>Sốt cao</p>
                        </div>
                        <div class="col-md-12 mb-3" v-if="chi_tiet_lich_hen.don_thuoc">
                            <label class="form-label fw-bold">Đơn Thuốc:</label>
                            <p>Paracetamol 500mg</p>
                        </div>
                        <div class="col-md-12 mb-3" v-if="chi_tiet_lich_hen.chuan_doan">
                            <label class="form-label fw-bold">Chẩn Đoán:</label>
                            <p>Sốt cao</p>
                        </div>
                        <div class="col-md-12 mb-3" v-if="chi_tiet_lich_hen.ghi_chu">
                            <label class="form-label fw-bold">Ghi Chú:</label>
                            <p>Ghi chú</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Hủy -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Hủy Lịch Hẹn</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn hủy lịch hẹn này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import baseRequestAdmin from '../../../core/baseRequestAdmin';

export default {
    data() {
        return {
            list_lich_hen: [],
            list_benh_nhan: [],
            list_bac_si: [],
            create_lich_hen: {
                id_benh_nhan: "",
                id_bac_si: "",
                ngay_hen: "",
                gio_hen: "",
                ly_do: "",
            },
            del_lich_hen: {},
            xac_nhan_lich_hen: {
                id: "",
                id_bac_si: "",
            },
            don_thuoc_data: {
                id: "",
                don_thuoc: "",
                chuan_doan: "",
                ghi_chu: "",
            },
            chi_tiet_lich_hen: {},
            tim_kiem: {
                id_bac_si: "",
                tu_ngay: "",
                den_ngay: "",
                tinh_trang: "",
            },
        };
    },
    mounted() {
        this.loadData();

    },
    methods: {
        timKiem() {
            baseRequestAdmin.post('admin/lich-hen/tim-kiem', this.tim_kiem)
                .then((res) => {
                    if (res.data.status) {
                        this.list_lich_hen = res.data.data;
                        this.list_benh_nhan = res.data.benh_nhan;
                        this.list_bac_si = res.data.bac_si;
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        loadData() {
            baseRequestAdmin.get('admin/lich-hen/data')
                .then((res) => {
                    if (res.data.status) {
                        this.list_lich_hen = res.data.data;
                        this.list_benh_nhan = res.data.benh_nhan;
                        this.list_bac_si = res.data.bac_si;
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        getTrangThaiClass(tinh_trang) {
            switch (tinh_trang) {
                case 0: return 'badge bg-warning';  // Chờ xác nhận
                case 1: return 'badge bg-primary';  // Đã xác nhận
                case 2: return 'badge bg-danger';  // Hoàn thành
                case 3: return 'badge bg-success';   // Đã hủy
                default: return 'badge bg-secondary';
            }
        },
        getTrangThaiText(tinh_trang) {
            switch (tinh_trang) {
                case 0: return 'Chờ xác nhận';
                case 1: return 'Đã xác nhận';
                case 2: return 'Đã huỷ';
                case 3: return 'Hoàn thành';
                default: return 'Không xác định';

            }
        }
    },
};
</script>

<style scoped>
.badge {
    font-size: 0.9em;
    padding: 0.5em 1em;
}
</style>