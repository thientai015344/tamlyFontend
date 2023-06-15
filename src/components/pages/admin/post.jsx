import React, { useState, useEffect } from "react";

import { getAllpost, createNewpostAdm } from './apipost';
import avatagu from "./profile.png"
import { Card, Container, Table, Row, Col } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';


function Post() {
  const [showCar, setShowcar] = useState(false);
  const [car, setcar] = useState('')
  const [carid, setcarid] = useState('')

  let initrangtai = 1;
  const [trangthai, settrangthai] = useState(initrangtai)
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Số mục hiển thị trên mỗi trang
  const [arrpost, setarrpost] = useState([]);
  const pageCount = Math.ceil(arrpost.length / itemsPerPage); // Tổng số trang

  // Tạo mảng dữ liệu cho trang hiện tại
  const currentData = arrpost.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Hàm xử lý sự kiện khi chuyển trang
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    pushdata();
  }, []);

  const pushdata = () => {
    const numbers = [];
    for (let i = 0; i < 20; i++) {
      numbers.push(
        <tr key={i + 1}>
          <td>{i + 1}</td>
          <td>bài 125/12/202325/12/2023</td>
          <td>
            <img className="imgpost" src={avatagu} alt="anh 1" srcset="" />
          </td>
          <td>25/12/2023</td>
          <td>
            {/* <button className="btn-edit" onClick={() => { handlecaredit(item) }} >
            <i className="fas fa-edit">
            </i></button>
          <button
            className="btn-delete"
            onClick={() => { handleDelete(item) }}
          >
            <i
              className="fas fa-trash">
            </i></button> */}
            25/12/2023
          </td>
        </tr>
      );
    }
    setarrpost(numbers);
  };


  return (
    <>
      <div className="adminRight">     
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Quản lý bài viết</Card.Title>
                  <Link className="btn btn-primary createlink" to="/admin/creatPost"> Thêm bài viết </Link>
                </Card.Header>
                <Card.Body className="all-icons">
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>stt</th>
                        <th>Tên Bài</th>
                        <th>ảnh</th>
                        <th>Ngày tạo</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                    {currentData}
                    
                    </tbody>
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                        previousClassName={'previous'}
                        nextClassName={'next'}
                        previousLinkClassName={'previous-link'}
                        nextLinkClassName={'next-link'}
                      />
                  </Table>       
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Post;