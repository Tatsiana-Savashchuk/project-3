import { PageBuilder } from '../../components/pageBuilder/PageBuilder.js';
import { Button } from '../../components/button/Button.js';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const HomeContent = () => {
  const navigate = useNavigate();
  const goToAppointment = () => {
    navigate('/appointment');
  }

  return (
    <div className='home-content'>
      <p className='home-content-header'>manicure studio <br /><span className="uppercase home-content-header-logo">SAVA</span></p>
      <p className='home-content-description'>we take care of every client's nails</p>
      <Button text='to make an appointment' onClickFuction={goToAppointment} uppercase />
    </div>
  )
}

export const Home = () => {
  return <PageBuilder main={<HomeContent />} />;
};
