// import useGetBuildingCategories from "@locationIntelligence";

// import useGetBuildingCategories from '../../../../_hooks/buildings/useGetBuildingCategories';
import { useGetRoadCategories } from '../../../../_hooks';
import { LayerAccordion } from '../_components/LayerAccordion';
import { LayerAccordionLoading } from '../LoadingLayers';

export const WeatherLayers = () => {
  const { data, isLoading } = useGetRoadCategories();
  const builgCategories = data?.data as string[];
  if (isLoading) {
    return <LayerAccordionLoading />;
  }
  if (!data || !builgCategories?.length) return null;

  return <LayerAccordion category={builgCategories} title="Road Networkss" />;
};
