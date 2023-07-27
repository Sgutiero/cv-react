import React from 'react';
import '../styles/Header.css'

function Header() {
  return (
    // <div className="container">
    //   <h2 className="mb-2">Sebastian Gutierrez Rojas</h2>
    //   <p className="mb-4">Desarrollador Backend</p>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam delectus dignissimos esse fugiat tempore exercitationem. Aliquam obcaecati molestiae minus.</p>
    //     <img src="../src/img/Foto001.JPG" className='img-thumbnail' alt="" />

    //     </div>

    <div className="container">
      <h2 className="mb-2">Sebastian Gutierrez Rojas</h2>
      <p className="mb-4">Desarrollador Backend</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam delectus dignissimos esse fugiat tempore exercitationem. Aliquam obcaecati molestiae minus.</p>
      <div className="image-container">
        <img src="../src/img/Foto001.JPG" className='img-thumbnail' alt="" />
      </div>
    </div>

  );
}

export default Header;
