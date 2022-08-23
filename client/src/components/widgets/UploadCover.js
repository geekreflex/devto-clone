import React, { useEffect, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const UploadCover = ({ coverImg, setCoverImg }) => {
  const [images, setImages] = React.useState([]);

  const [loading, setLoading] = useState(false);
  const maxNumber = 1;

  const onChange = (imageList) => {
    // data for submit
    setImages(imageList);
    if (imageList[0]) {
      uploadToCloud(imageList);
    }
  };

  const uploadToCloud = (image) => {
    const cover = image[0].data_url;
    const imgData = new FormData();
    imgData.append('file', cover);
    imgData.append('upload_preset', 'devto_cover');
    imgData.append('cloud_name', 'dwhg0s0hw');
    setLoading(true);

    fetch('https://api.cloudinary.com/v1_1/dwhg0s0hw/upload', {
      method: 'POST',
      body: imgData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoverImg(data.url);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  if (loading) {
    return <div>Uploading...</div>;
  }

  const onRemove = () => {
    setCoverImg();
  };

  return (
    <UploadCoverWrap>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ onImageUpload, onImageUpdate }) => (
          <div>
            {!coverImg && (
              <Tooltip
                pos="bottom"
                content={'Use a ratio of 100:42 for best results.'}
              >
                <button onClick={onImageUpload}>Add a cover image</button>
              </Tooltip>
            )}

            {coverImg && (
              <ImageItem>
                <img src={coverImg} alt="Post Cover" />
                <div className="image-item__btn-wrapper">
                  <button onClick={onImageUpdate}>Change</button>
                  <button onClick={onRemove}>Remove</button>
                </div>
              </ImageItem>
            )}
          </div>
        )}
      </ImageUploading>
    </UploadCoverWrap>
  );
};

const UploadCoverWrap = styled.div``;
const ImageItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;

  img {
    width: 190px;
    margin-right: 50px;
  }
`;

export default UploadCover;
