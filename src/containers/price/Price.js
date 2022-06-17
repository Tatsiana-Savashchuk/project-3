import { PageBuilder } from '../../components/pageBuilder/PageBuilder';
import { uniqueId } from 'lodash';
import { getService } from '../../api/service';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/loader/Loader';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  text-align: left;
  color: #75a2a5;
`;

const TableName = styled.tr`
  background-color: #ffebd07e;
  font-size: medium;
  font-weight: bold;
  text-transform: uppercase;
`; 

const Name = styled.td`
  border-style: solid;
  border-width: 3px;
  border-color: #ffebd0;
  padding: 10px;
`;

const Cost = styled(Name)`
  text-align: center;
`;

const PriceTable = ({ priceList = [], isLoading = false }) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Table>
      <tbody>
        <TableName><Name>Service</Name><Cost>Cost</Cost></TableName>
        {priceList.map(({ name, description = '-' }) => 
          <tr key={uniqueId('price_')}>
            <Name>{name}</Name>
            <Cost>{description}</Cost>
          </tr>  
        )}
      </tbody>
    </Table>
  );
};

export const Price = () => {
  const [priceList, setPriceList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => { 
    setPriceList(await getService());
    setIsLoading(false);
  }

  useEffect(()=>{
    fetchData();
  }, [setPriceList])

  return <PageBuilder main={<PriceTable priceList={priceList} isLoading={isLoading} />} />;
};
