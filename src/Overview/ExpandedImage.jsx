import React, {useRef, useState} from 'react';
import styled from 'styled-components';


export default function ExpandedImage({selectedImage, handleThumbnailClick, selectedStyle, handleExpand, handleNextClick, handlePreviousClick, photoIndex}) {
  return (
    <div className="expanded-image-gallery">
      <>
              <button onClick={() => handlePreviousClick()} value="previous" className="back-button">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <img src={selectedImage} alt="" className="expanded-image"/>
              <button onClick={() => handleNextClick()} className="next-button">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button onClick={() => handleExpand()} className="expand-button">
                <i class="fa-solid fa-expand"></i>
              </button>
      </>
      <div className="image-thumbnail-nav">
        {selectedStyle.photos.map((image, index) => {
          if (index === photoIndex) {
            return (<img
              src={image.thumbnail_url}
              onClick={()=>handleThumbnailClick(image.url, index)}
              className="image-thumbnail-highlighted" />);
          } else {
            return (<img
              src={image.thumbnail_url}
              onClick={()=>handleThumbnailClick(image.url, index)}
              className="image-thumbnail" />);
          }
          })}
      </div>
    </div>
  );
}

//  const Container = styled.div`
//   position: relative;
//   overflow: hidden;
//   display: block;
//   border: 1px solid #00adb7;
//   padding: 50px;
//   border-radius: 15px;
//   :hover {
//     box-shadow: 0 14px 24px rgba(0, 0, 0, 0.55), 0 14px 18px rgba(0, 0, 0, 0.55);
//   }
//  `;

// const Image = styled.img.attrs((props) => ({
//   src: props.source
// }))``;

// const Target = styled(Image)`
//   position: absolute;
//   left: ${(props) => props.offset.left}px;
//   top: ${(props) => props.offset.top}px;
//   opacity: ${(props) => props.opacity};
// `;

// export default function ExpandedImage({selectedImage}) {
//   const sourceRef = useRef(null);
//   const targetRef = useRef(null);
//   const containerRef = useRef(null);

//   const [opacity, setOpacity] = useState(0);
//   const [offset, setOffset] = useState({ left: 0, top: 0 });

//   const handleMouseEnter = () => {
//     setOpacity(1);
//   };

//   const handleMouseLeave = () => {
//     setOpacity(0);
//   };

//   const handleMouseMove = (e) => {
//     const targetRect = targetRef.current.getBoundingClientRect();
//     const sourceRect = sourceRef.current.getBoundingClientRect();
//     const containerRect = containerRef.current.getBoundingClientRect();

//     const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
//     const yRatio =
//       (targetRect.height - containerRect.height) / sourceRect.height;

//     const left = Math.max(
//       Math.min(e.pageX - sourceRect.left, sourceRect.width),
//       0
//     );
//     const top = Math.max(
//       Math.min(e.pageY - sourceRect.top, sourceRect.height),
//       0
//     );
//     setOffset({
//       left: left * -xRatio,
//       top: top * -yRatio
//     });
//   };

//   return (
//     <div className="expanded-image-gallery">
//       <Container
//         ref={containerRef}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onMouseMove={handleMouseMove}
//       >
//         <Image ref={sourceRef} alt="source" source={selectedImage} />
//         <Target
//           ref={targetRef}
//           alt="target"
//           opacity={opacity}
//           offset={offset}
//           source={selectedImage}
//         />

//       </Container>
//     </div>
//   )
// }