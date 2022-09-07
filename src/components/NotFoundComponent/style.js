import styled from "styled-components";
export const Error = styled.h1`
  font-size: 160px;
  opacity: 1;
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
  -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
  0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  animation: zoomInOut 5s infinite linear reverse, glitch 800ms infinite linear;

    @keyframes zoomInOut {
    0% {
      transform: scale(100%);
      opacity: 0;
    }

    50% {
      transform: scale(50%);
      opacity: .8;
    }
    100% {
      transform: scale(10%);
      opacity: .5;
    }
  }


  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
  }

`

export const Text = styled.div`
  margin: 1rem 0;
  line-height: 1.5em;
  letter-spacing: 1px;
  color: #fff;
`

export const MainErrorPage = styled.main`
  text-align: center;

h2 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #fff;
}

button {
  color: #a4ff00;
  font-size: 1rem;
  border-radius: 1rem;
  padding: 1rem 2rem;
  border: .1em solid #a4ff00;
  position: relative;
  text-shadow: 0 0 .5em hsl(150, 31%, 36%);
  box-shadow: 0px 0px 20px 2px #a4ff00, inset 0px 0px 10px 2px #a4ff00;
  animation: buttonLight 2s infinite reverse linear;
  cursor: pointer;
}

button::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: #a4ff00;

  transform: perspective(1em)
  rotateX(40deg) scale(1, .35);
  filter: blur(1.5em);
  animation: reflectionGlow 2s infinite reverse linear;
}


@keyframes reflectionGlow {
  0% {
    opacity: .5;;
  }
  100% {
    opacity: 1;
  }
}

@keyframes buttonLight {
  0% {
    background: none;
  }
  100% {
    color: #fff;
    background: #a4ff00;
    box-shadow: 0 0 2em 0.5em #a4ff00;
  }
}

`