import React from 'react'
import AdminLayout from '../AdminLayout'
import { Table } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="admin-container">
        <div className="admin-heading">
          <h1>All Products</h1>
        </div>

        <Table className="product-table">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Picture</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr >
              <td>1</td>
              <td>MOBILE</td>
              <td>7000</td>
              <td>
                <img  width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICPFsQmB8t6K8SJCqqokHsNG05Fujlgiz7g&s" alt="product image" />
              </td>
              <td>
                <div className="d-flex gap-3 justify-content-center action-buttons">
                  <MdDelete size={23}  cursor={'pointer'}/>
                  <FaEdit size={23}  cursor={'pointer'}/>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
}

export default Dashboard