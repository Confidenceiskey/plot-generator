import React from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import ErrorBox from '../../../../components/ErrorBox/ErrorBox';
import PlotList from '../../../../components/PlotList/PlotList';
import { getErrorMsg } from '../../Helpers/general/general';

const WhiteBox = styled(Box)({
  background: '#fff'
});

const MainBodyLower = (props) => {
  const { plotList, isError, resource, onDelete } = props;
  const paddingY = plotList.length !== 0 ? '15px' : '0px';
  const isErrorMsg = getErrorMsg(isError, resource);
  const errorPopupBox = isErrorMsg ? <ErrorBox errorMsg={isErrorMsg} /> : null;

  return (
    <WhiteBox px='30px' py={paddingY}>
      {errorPopupBox}
      {plotList.map((resource, i) => {
        return (
          <PlotList 
            resourceName={resource.name} 
            key={resource.name + i} 
            onDelete={onDelete}
            pos={i}
            {...props} 
          />
        );
      })}
    </WhiteBox>
  );
}

export default MainBodyLower;
