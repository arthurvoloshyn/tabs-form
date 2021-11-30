import React from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';

import { initialImgKey } from '../constants/initial-state';

import { DangerBtn } from './buttons';
import NavBtn from './nav-btn';
import Error from './error';

const Photos = ({
  maxCountOfImages,
  onChangeImg,
  onCheckErrorImg,
  error,
  images,
  toggleTab,
  toggleError,
  warning,
}) => {
  const onClickPrevTab = () => toggleTab(2);
  const onClickNextTab = () => toggleTab(4);

  return (
    <>
      <ImageUploading
        dataURLKey={initialImgKey}
        maxNumber={maxCountOfImages}
        multiple
        onChange={onChangeImg}
        onError={onCheckErrorImg}
        value={images}
      >
        {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
          <>
            <div
              {...dragProps}
              className="image-download-btn"
              onClick={onImageUpload}
            >
              Click or drop here . . .
            </div>
            <Error error={error} toggleError={toggleError} warning={warning} />
            {imageList.length > 0 && (
              <ul className="clear-list-style btn-mg">
                {imageList.map(({ key, ...propsImage }) => {
                  const handleImageRemove = () => onImageRemove(key);
                  return (
                    <li key={`${key}_down`} className="image-item">
                      <img
                        alt="Your img"
                        className="image-size"
                        src={propsImage[initialImgKey]}
                      />
                      <div>
                        <DangerBtn
                          className="one-third-width-btn"
                          onClick={handleImageRemove}
                        >
                          Remove
                        </DangerBtn>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </ImageUploading>
      <NavBtn onNext={onClickNextTab} onPrev={onClickPrevTab} />
    </>
  );
};

Photos.propTypes = {
  maxCountOfImages: PropTypes.number,
  onChangeImg: PropTypes.func,
  error: PropTypes.bool,
  onCheckErrorImg: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      initialImgKey: PropTypes.string,
    }),
  ),
  toggleTab: PropTypes.func,
  toggleError: PropTypes.func,
  warning: PropTypes.string,
};

Photos.defaultProps = {
  maxCountOfImages: 5,
  onChangeImg: () => {},
  error: false,
  onCheckErrorImg: () => {},
  images: [],
  toggleTab: () => {},
  toggleError: () => {},
  warning: '',
};

export default Photos;
