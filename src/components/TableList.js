// import React from "react";
// import { Table, Button } from "antd";
// import Popconfirm from "antd";

// function TableList() {
//   const dataSource = [
//     {
//       key: "1",
//       name: "Mike",
//       age: 32,
//       address: "10 Downing Street",
//     },
//     {
//       key: "2",
//       name: "John",
//       age: 42,
//       address: "10 Downing Street",
//     },
//   ];

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       id: 1,
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//       key: "age",
//       id: 2,
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//       key: "address",
//       id: 3,
//     },
//     {
//       title: "Actions",
//       render: (columns) => {
//         return (
//           <Popconfirm title="Delete?" onConfirm={() => onDelete(columns)}>
//             <Button>Delete</Button>
//           </Popconfirm>
//         );
//       },
//     },
//   ];

//   return <Table dataSource={dataSource} columns={columns} />;
// }

// export default TableList;
