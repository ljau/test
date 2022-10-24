import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { colors } from '../../lib/colors';
import { BackButtonStyle } from './styled';

const BackButton = () => {
    const navigate = useNavigate();

  return (
    <BackButtonStyle onClick={() => navigate("/")}><FontAwesomeIcon icon={faArrowLeft} size={"3x"} color={colors.white} /></BackButtonStyle>
  )
}

export default BackButton
