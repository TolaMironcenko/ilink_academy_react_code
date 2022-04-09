import Header from './components/Header/Header';
import Ht from './components/Ht/Ht';
import Footer from './components/Footer/Footer';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Reviewes from './components/Reviewes/Reviewes';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import { useState } from 'react';
import FlashMessageSuccess from './components/FlashMessage/FlashMessage';

function App() {

  const [nowSlide, setNowSlide] = useState(1)
  const [formActive, setFormActive] = useState(false)
  const [flashMessageActive, setFlashMessageActive] = useState(false)
  const [successFeedback, setSuccessFeedback] = useState(false)
  const [inPage] = useState(2)
  const [feedbacks, setFeedbacks] = useState([])

  const lastFeedback = nowSlide * inPage
  const firstFeedback = lastFeedback - inPage
  const currentFeedback = feedbacks.slice(firstFeedback, lastFeedback)

  return (
    <div style={{ background: '#585CC6' }}>
      <Header avatar={require('./Rectangle 1.png')} />
      <Ht
        style={{
          color: '#FFFFFF',
          width: '1000px',
          marginLeft: '80px'
        }}
        tag='h1'
      >
        Добро пожаловать в академию!
      </Ht>
      <div className='aboutme'>
        <img
          src={require("./my_photo.png")}
          alt="my_photo"
          className="meimg"
        />
        <AboutMe
          name='Анатолий Миронченко'
          sex='мужчина' age='19'
          city='Томск'
          animal='есть'
          date='22.03.2022'
        >
          Всем привет! Меня зовут Яна, мне 22 года, я студент.
          Учусь на программиста, но хочу стать продуктовым аналитиком.
          Недавно, например, я начала проходить курс на известной платформе,
          который поможет мне устроиться на работу моей мечты!<br></br><br></br>
          BTW: И да, у меня есть милая кошка :)
        </AboutMe>
      </div>
      <Reviewes
        inPage={inPage}
        allFeedbacks={feedbacks.length}
        feedbacks={currentFeedback}
        setActive={setFormActive}
        nowSlide={nowSlide}
        setNowSlide={setNowSlide}
      />
      <Footer />
      <FeedbackForm
        setFlashMessageActive={setFlashMessageActive}
        active={formActive}
        setActive={setFormActive}
        setSuccessFeedback={setSuccessFeedback}
        feedbacks={feedbacks}
        setFeedbacks={setFeedbacks}
      />
      <FlashMessageSuccess
        active={flashMessageActive}
        setActive={setFlashMessageActive}
        success={successFeedback ? "success" : "error"}
      />
      <svg
        style={{
          opacity: '0.7',
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '830px',
          height: '1610px',
          zIndex: '0',
        }}
        width="642"
        height="1382"
        viewBox="0 0 642 1382"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.07"
          d="M42.7271 766.5L83.0012 762.229L42.7271 766.5ZM446.227
          503.5L424.247 537.517L446.227 503.5ZM232.227 454L272.696
          452.403L232.227 454ZM794.671 1306.16C445.733 1172.96 274.509
          1088.57 186.473 1011.79C144.063 974.801 122.027 940.362 108.59
          903.109C94.5639 864.225 89.2055 820.726 83.0012 762.229L2.45299
          770.771C8.49869 827.774 14.5153 881.025 32.3955 930.594C50.8643
          981.795 81.2667 1027.51 133.231 1072.83C233.946 1160.68 419.221
          1249.54 765.783 1381.84L794.671 1306.16ZM83.0012 762.229C74.8545
          685.417 99.6224 584.598 155.313 526.889C182.032 499.202 215.406
          481.713 256.924 479.935C299.249 478.122 354.544 492.477 424.247
          537.517L468.207 469.483C389.245 418.462 317.5 396.266 253.458
          399.009C188.608 401.786 136.287 429.96 97.0274 470.642C20.7621
          549.671 -7.55478 676.412 2.45299 770.771L83.0012 762.229ZM424.247
          537.517C490.418 580.273 501.118 618.859 498.685 640.43C496.075
          663.578 476.624 686.668 444.808 696.018C414.556 704.908 376.256
          699.728 343.239 667.664C309.492 634.892 277.332 569.862 272.696
          452.403L191.759 455.597C196.872 585.138 232.9 673.421 286.809
          725.773C341.448 778.835 410.273 790.592 467.646 773.732C523.455
          757.332 572.129 711.984 579.175 649.507C586.399 585.454 548.286
          521.227 468.207 469.483L424.247 537.517ZM272.696 452.403C260.266
          137.522 316.116 -19.2377 412.034 -103.75C510.376 -190.398 661.173
          -211.927 871.353 -225.585L866.101 -306.415C660.782 -293.073 480.788
          -272.284 358.485 -164.525C233.758 -54.6281 179.108 135.112 191.759
          455.597L272.696 452.403Z"
        />
      </svg>
    </div>
  );
}

export default App;
