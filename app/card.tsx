import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
 text-align: center;
    position: relative;
    width: 300px;
    height: 3px;
    background: linear-gradient(to right, transparent, blue, transparent);
    overflow: hidden;
    margin: 15px auto;
}
  }

  .loader::after {
    content: '';
    position: absolute;
    translate: -200px 0;
    width: 150px;
    height: 100%;
    background: linear-gradient(to right, transparent, blue, transparent);
    animation: slide 1s infinite;
  }

  @keyframes slide {
    100% {
      translate: 300px 0;
    }
  }`;

export default Loader;
