import React from 'react'
import AdminLayout from '../AdminLayout'

const AddProduct = () => {
  return (
    <AdminLayout>
      <div className="admin-container">
        <div className="admin-heading">
          <h1>Add Product</h1>
        </div>
        <div className="w-100 product-container d-flex justify-content-center align-items-center">
          <div className="product_box">
            <form action="">
              <div className="title">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter Product Title"
                  autoComplete='off'
                  required
                />
              </div>
              <div className="price">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  placeholder="Enter Product Price"
                  autoComplete='off'
                  required
                />
              </div>
              <div className="description">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  placeholder="Enter Product Description"
                  autoComplete='off'
                  required
                />
              </div>
              <div className="thumbnail">
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                  type="text"
                  id="thumbnail"
                  placeholder="Enter Product Thumbnail"
                  autoComplete='off'
                  required
                />
              </div>
              <div className="link">
                <label htmlFor="link">Product Link</label>
                <input
                  type="text"
                  id="link"
                  placeholder="Enter Product Link"
                  autoComplete='off'
                  required
                />
              </div>
              <div className="category">
                <label htmlFor="category">Choose Category</label>
                <select id="category" required>
                  <option value="all">All</option>
                  <option value="electronics">Electronics</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="sports">Sports</option>
                </select>
              </div>

              <div className="form_btns d-flex gap-3">
                <button type="submit" className="mainbtn">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddProduct