function Student ({ data }) {
  const listHocLai = data.hoc_lai
    .map(function (value, index) {
      return <li key={index}>{ value }</li>;
    });

  const element = (
    <ul>
      <li>Họ Tên: { data.ho_ten }</li>
      <li>Ngày sinh: { data.ngay_sinh }</li>
      <li>Địa chỉ: { data.dia_chi }</li>
      <li>
        Tốt Nghiệp: {
          data.tot_nghiep == true ?
            'Đã Tốt Nghiệp' : 'Chưa Tốt Nghiệp'
        }
      </li>
      <li>Học lại:
        <ul>{ listHocLai }</ul>
      </li>
    </ul>
  );

  return element;
}

export default Student;
