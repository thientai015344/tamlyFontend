import React, { useEffect, useState, useRef, useHistory } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { getAllpost, createNewpostAdm } from './apipost';
import "./creatPost.css"
// react-bootstrap components

function Cars() {
 
  const title = useRef();
  const [discription, setdiscription] = useState('')
  const history = useHistory();
  const [content, setcontent] = useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };


  const handleInputChange = (event) => {
    setdiscription(event.target.value);
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setcontent(data);
  };



  const createNewPost = async () => {

    let data = {
      title: title.current.value,
      discription: discription,
      content: content,
      img: selectedFile,
    }
    NewPost(data);
    
  }

  const NewPost = async (data) => {
    try {
      let response = await createNewpostAdm(data);
      if (response && response.errCode !== 0) {
        alert(' Xe đã tồn tại ')
      } else {
        alert('Thêm xe thành công')
        history.push('/admin/post')
      }
    } catch (error) {
      console.log(error);
    }
  }

  


  useEffect(() => {
    // Làm gì đó với nội dung đã nhập trong CKEditor
    console.log(content);
  }, [content]);


  return (
    <>

      <div className='container'>
        <h1 className='taomoi'>Tạo bài viết mới </h1>
        <div className='top'>
          <div className='left'>
            <label htmlFor="title">Tiêu đề bài viết</label>
            <input placeholder='Nhập Tên bài viết' ref={title} type="text" maxLength={70} name="title" id="title" height={40} />
          </div>
          <div className='right'>
            <label className='chooseImg' htmlFor="img">Chọn Ảnh</label>
            <input id='img' className='choosImg' type="file" onChange={handleFileChange} />
            {selectedFile && (
              <div>
                <p>Selected file: {selectedFile.name}</p>
                <img className='imgReview' src={previewURL} alt="Preview" style={{ maxWidth: '100%' }} />
              </div>
            )}
          </div>
          
        </div>
        <div className='middel'>
          <div className='midel'>
            <h5>Nội dung tóm tắt</h5>
            <label htmlFor="discription"></label>
            <textarea
            id='discription'
              rows={4}
              cols={50}
              value={discription}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='bottom'>
        <h5>Nội dung bài viết</h5>

          <div className='bottomd'>
            <label htmlFor="content"></label>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={handleEditorChange}
            />
                  
          </div>
          <div className='btnd'>
            <button className=' btn btn-primary' type="button" onClick={createNewPost} >Tạo mới</button>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Cars;