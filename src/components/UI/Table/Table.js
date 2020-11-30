import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './Table.css';

const columns = [
  { field: 'id', headerName: '번호', width: 70 },
  { field: 'pNumber', headerName: '휴대폰 번호', width: 130 },
  {
    field: 'age',
    headerName: '나이',
    description: '65세 이상이면 "예" 65세 미만이면 "아니오"',
    width: 110,
  },
  { field: 'disease', sortable: 'false', headerName: '앓고있는 질환', width: 130 },
  { field: 'help', headerName: '도움 필요도', width: 230 },
  { field: 'relationship', headerName: '보호자와 어르신과의 관계', width: 130 },
  { field: 'workingHour', headerName: '월 160시간 이상', width: 130 },
  { field: 'violence', headerName: '폭력성', width: 130 },
];



export default function DataTable({ data }) {
    console.log(data);
    let rows = [];
    // rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },]
    let count = 1;
    for (let keys in data) {
        console.log(keys);
        console.log(data[keys]);
        
        let age = null;
        if(data[keys].q1.a1 === 1) {
            age = '65세 이상';
        }else {
            age = '65세 미만';
        }

        let disease = null;
        if(data[keys].q2.a3 === 1) {
            disease = '치매';
        }else if(data[keys].q2.a4 === 1) {
            disease = '알츠하이머';
        }else if(data[keys].q2.a5 === 1) {
            disease = '뇌출혈/뇌내출혈';
        }else if(data[keys].q2.a6 === 1) {
            disease = '뇌경색증';
        }else if(data[keys].q2.a7 === 1) {
            disease = '뇌중풍';
        }else if(data[keys].q2.a8 === 1) {
            disease = '파킨슨병';
        }else if(data[keys].q2.a9 === 1) {
            disease = '퇴행성 질환';
        }else if(data[keys].q2.a10 === 1) {
            disease = '기타 질환';
        }else if(data[keys].q2.a11 === 1) {
            disease = '없음';
        }else {
            disease = null;
        }

        let help = null;
        if(data[keys].q3.a12 === 1) {
            help = '거동이 어려워 누워 계심.';
        }else if(data[keys].q3.a13 === 1) {
            help = '전적인 도움 없이 일상생활 불가';
        }else if(data[keys].q3.a14 === 1) {
            help = '일상생활에서 부분적인 도움이 필요';
        }else if(data[keys].q3.a15 === 1) {
            help = '가사 일이나 외출의 경우에만 도움 필요';
        }

        let rel = null;
        if(data[keys].q4.a16 === 1) {
            rel = '배우자';
        }else if(data[keys].q4.a17 === 1) {
            rel = '자녀';
        }else if(data[keys].q4.a18 === 1) {
            rel = '며느리/사위';
        }else if(data[keys].q4.a19 === 1) {
            rel = '형제자매';
        }else if(data[keys].q4.a20 === 1) {
            rel = '손자/외손자';
        }else if(data[keys].q4.a21 === 1) {
            rel = '손자 며느리/사위';
        }else if(data[keys].q4.a22 === 1) {
            rel = '처남/처형/처제'  
        } else if(data[keys].q4.a23 === 1) {
            rel = '시부모/시동생';
        }else {
            rel = '기타';
        }

        let workingHour = null;
        if(data[keys].q5.a25 === 1) {
            workingHour = '160시간 이상';
        }else if(data[keys].q5.a26 === 1) {
            workingHour = '160시간 이하';
        }

        let violence = null;
        if(data[keys].q6.a27 === 1) {
            violence = '있음';
        }else if(data[keys].q6.a28 === 1) {
            violence = '없음';
        }

        rows.push({
            id: count,
            pNumber: data[keys].phone_number,
            age,
            disease,
            help,
            relationship: rel,
            workingHour,
            violence
        });
        count++;
    }
    
  return (
    <div className="data--table" style={{ height: 630, width: '110%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}