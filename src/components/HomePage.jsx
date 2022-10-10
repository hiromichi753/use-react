import React from 'react'
import {Button} from 'react-bootstrap'
import reactImage from "./../Images/react.png";
import jsImage from "./../Images/js.png";
import firebaseImage from "./../Images/firebase.jpg";
import profileImage from "./../Images/HiGeen2.jpg";
import golangImage from "./../Images/go-logo_blue.png"
import rubyImage from "./../Images/ruby.png"
import pythonImage from "./../Images/python-logo-only.png"

const HomePage = () => {
    return (
        <div className="container text-center">
        <h1>HiGeen</h1>
  
        <img src={profileImage} className="profileImage" />
  
        <p>
          HiGeenです。普段は個人でプログラムの開発を趣味で行っています。golang,python,rubyを取り扱っています。
          使えるものは、SQLは一通り　広く浅く勉強しております　ポートフォリオを準備するために、reactを勉強してみました
          趣味はロードバイクです。
          仕事上で、ネットワークのメンテナンスサーバーのメンテナンスをしています。
        </p>
  
        <section class="page-section" id="services">
          <div className="service">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
              <h3 class="section-subheading text-muted mb-5">
                私が作った作品一覧です
              </h3>
            </div>
            <div class="row text-center">
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">ECサイト</h4>
                <p class="text-muted">
                  
                </p>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">レスポンシブサイト</h4>
                <p class="text-muted">
                  
                </p>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">ウェブセキュリティ</h4>
                <p class="text-muted">
                 
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section id="skill">
          <div class="text-center">
            <h1 class="title">スキル</h1>
            <div class="row text-center">
              <div class="col-md-4 services">
                <img src={reactImage} />
                <h4>React</h4>
                <p>Reactがつかえます</p>
              </div>
              <div class="col-md-4 services">
                <img src={jsImage} />
                <h4>HTML/CSS</h4>
                <p>HTML/CSSがつかえます</p>
              </div>
              
              <div class="col-md-4 services">
                <img src={golangImage} />
                <h4>Golang</h4>
                <p>Golangがつかえます</p>
              </div>
              <div class="col-md-4 services">
                <img src={rubyImage} />
                <h4>Ruby</h4>
                <p>Rubyがつかえます</p>
              </div>
              <div class="col-md-4 services">
                <img src={pythonImage} />
                <h4>Python</h4>
                <p>Pythonがつかえます</p>
              </div>
            </div>
            <button type="button" class="btn btn-primary">
              スキル一覧
            </button>
          </div>
        </section>
      </div>
    );
};

export default HomePage