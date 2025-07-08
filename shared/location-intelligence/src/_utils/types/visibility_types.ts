export interface IGetVisibilityScoreParams {
  lon: number;
  lat: number;
  buffer_radius?: number;
}

type AgeGroup =
  | '0_14'
  | '15_24'
  | '25_34'
  | '35_44'
  | '45_54'
  | '55_64'
  | '65_plus';
type Gender = 'male' | 'female' | 'non_binary' | 'other';
type IncomeLevel = 'low' | 'middle' | 'high';

type Lifestyle = string; // Could be more specific like "urban" | "suburban" | "rural"
type CommercialFocus = string; // Could be more specific like "retail" | "dining" | "entertainment"
type CulturalFocus = string; // Could be more specific like "arts" | "sports" | "music"

interface DemographicTarget {
  age_group: AgeGroup[];
  gender: Gender[];
  income_level: IncomeLevel[];
}

interface PsychographicTarget {
  lifestyle: Lifestyle[];
  commercial_focus: CommercialFocus[];
  cultural_focus: CulturalFocus[];
}

interface AreaOfInterest {
  min_longitude: number;
  max_longitude: number;
  min_latitude: number;
  max_latitude: number;
}

export interface ISetVisibilityPayload {
  grid_size_km: number;
  area_of_interest: AreaOfInterest;
  demographic_target: DemographicTarget;
  psychographic_target: PsychographicTarget;
  num_of_zones: number;
}
