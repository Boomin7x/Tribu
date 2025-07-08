import { ReactNode } from 'react';
import { bbox_douala } from '../../../_utils';
import { IGetAllBuildingsParams } from '../../../_utils/types/building_types';
import { BuildingLayers, RoadLayers } from './layers';
// import BuildingLayers from './layers/building_layers';

export const LILayersSide = () => {
  type ILayersItem = {
    name: string;
    icon: string;
    children: (string | ReactNode)[];
  };

  const layerItems: ILayersItem[] = [
    {
      name: 'Buildings',
      icon: 'tdesign:adjustment',
      children: [
        'Residential Buildings',
        'Commercial Buildings',
        'Points of Interest',
      ],
    },
    {
      name: 'Road Networks',
      icon: 'tdesign:adjustment',
      children: ['Footways', 'Motoways', 'Primary roads', 'Secondary roads'],
    },
    {
      name: 'Weather',
      icon: 'tdesign:adjustment',
      children: ['sunny', 'rainy', 'snowy'],
    },
    {
      name: 'Income levels',
      icon: 'tdesign:adjustment',
      children: [
        <div className="flex items-center gap-2">
          <div className="h-[1rem] w-[1.5rem] bg-[#55CFE0] " />{' '}
          <span className="text-xs">{`<$300 – Extremely Low Income`}</span>
        </div>,
        <div className="flex items-center gap-2">
          <div className="h-[1rem] w-[1.5rem] bg-[#48BFE3] " />{' '}
          <span className="text-xs">{`$300–$800 – Very Low Income`}</span>
        </div>,
        <div className="flex items-center gap-2">
          <div className="h-[1rem] w-[1.5rem] bg-[#5290DA] " />{' '}
          <span className="text-xs">{`$800–$1,500 – Low Income`}</span>
        </div>,
        <div className="flex items-center gap-2">
          <div className="h-[1rem] w-[1.5rem] bg-[#5E60CE] " />{' '}
          <span className="text-xs">{`$800–$1,500 – Low Income`}</span>
        </div>,
        <div className="flex items-center gap-2">
          <div className="h-[1rem] w-[1.5rem] bg-[#692FC3] " />{' '}
          <span className="text-xs">{`$10,000 – Upper-Middle to High Income`}</span>
        </div>,
        <div className="flex items-center gap-2">
          <div className="h-[1rem] w-[1.5rem] bg-[#7401B8] " />{' '}
          <span className="text-xs">{`$3,000–$10,000 – Middle Income`}</span>
        </div>,
      ],
    },
    {
      name: 'Economic factors',
      icon: 'tdesign:adjustment',
      children: ['crime', 'health care ', 'education'],
    },
  ];

  const bbox = {
    min_lat: '3.7000',
    max_lat: '4.1500',
    min_lon: '9.6000',
    max_lon: '9.9000',
  };

  const queryParams: IGetAllBuildingsParams = {
    bbox: bbox_douala.join(','),
    // bbox: `${bbox.min_lon},${bbox.min_lat},${bbox.max_lon},${bbox.max_lat}`,
  };
  //   const { data, isLoading } = useGetAllBuildings(queryParams);

  // if (isLoading) {
  //   return <LoadingLayers />
  // }

  return (
    <>
      <BuildingLayers />
      <RoadLayers />
    </>
  );
};

// export default LILayersSide;
